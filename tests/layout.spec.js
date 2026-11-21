import { test, expect } from '@playwright/test';
import { PNG } from 'pngjs';

const ROOM_COLORS = {
  day: ['#e8cfa8', '#e0c49a', '#a77a55', '#4a2f27', '#3c251f'],
  night: ['#2a2147', '#2f2650', '#1a1430', '#4a2f27', '#3c251f'],
};

const rgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const near = (a, b) => a.every((v, i) => Math.abs(v - b[i]) <= 2);

async function layout(page) {
  return page.evaluate(() => {
    const rect = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { top: r.top + scrollY, bottom: r.bottom + scrollY, left: r.left, right: r.right, width: r.width, height: r.height };
    };
    const pop = document.querySelector('.pop');
    return {
      vw: innerWidth,
      vh: innerHeight,
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
      stacked: !!pop && getComputedStyle(pop).position === 'static',
      scene: rect('.scene'),
      stage: rect('.stage'),
      pop: rect('.pop'),
    };
  });
}

async function offscreen(page) {
  return page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    return [...document.body.querySelectorAll('*')]
      .filter((el) => el.checkVisibility({ opacityProperty: true, visibilityProperty: true }))
      .map((el) => ({ el, r: el.getBoundingClientRect() }))
      .filter(({ r }) => r.width > 0 && (r.left < -0.5 || r.right > vw + 0.5))
      .map(({ el, r }) => `${el.tagName.toLowerCase()}.${el.className} ${Math.round(r.left)}..${Math.round(r.right)} of ${vw}`);
  });
}

test('every link to a file on the site loads', async ({ page, request }) => {
  await page.goto('./');
  const hrefs = await page.$$eval('a[href]', (as) => as.map((a) => a.href).filter((h) => h.startsWith(location.origin)));
  expect(hrefs.length).toBeGreaterThan(0);
  for (const href of hrefs) {
    const res = await request.get(href);
    expect(res.status(), href).toBe(200);
    if (href.endsWith('.pdf')) expect(res.headers()['content-type'], href).toContain('pdf');
  }
});

for (const mode of ['day', 'night']) {
  test.describe(mode, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('./');
      await page.evaluate(() => document.fonts.ready);
      if (mode === 'night') await page.click('[data-label^="Window"]');
      await page.mouse.move(0, 0);
    });

    test('nothing overflows horizontally', async ({ page }) => {
      const l = await layout(page);
      expect(l.scrollWidth).toBeLessThanOrEqual(l.vw);
      expect(await offscreen(page)).toEqual([]);
    });

    test('every room label stays on screen when shown', async ({ page }) => {
      const count = await page.locator('.hot').count();
      const bad = [];
      for (let i = 0; i < count; i++) {
        const spot = page.locator('.hot').nth(i);
        await spot.hover();
        const tip = spot.locator('.tip');
        await expect(tip).toHaveCSS('opacity', '1');
        const box = await tip.boundingBox();
        const vw = page.viewportSize().width;
        if (box.x < 0 || box.x + box.width > vw) bad.push(`${await spot.getAttribute('aria-label')}: ${Math.round(box.x)}..${Math.round(box.x + box.width)} of ${vw}`);
      }
      expect(bad).toEqual([]);
    });

    test('room is fully shown and the panel does not escape it', async ({ page }) => {
      const l = await layout(page);
      if (l.stacked) {
        expect(l.scene.width).toBeGreaterThanOrEqual(l.vw - 1);
        expect(l.pop.top).toBeGreaterThanOrEqual(l.scene.bottom);
      } else {
        expect(l.scrollHeight).toBeLessThanOrEqual(l.vh);
        expect(l.scene.bottom).toBeLessThanOrEqual(l.vh + 1);
        expect(l.pop.bottom).toBeLessThanOrEqual(l.vh);
        expect(l.pop.top).toBeGreaterThanOrEqual(l.stage.top);
      }
    });

    test('wall and floor are never painted above or below the room', async ({ page }) => {
      const l = await layout(page);
      const png = PNG.sync.read(await page.screenshot({ fullPage: true, scale: 'css', animations: 'disabled' }));
      const colors = ROOM_COLORS[mode].map(rgb);
      const xs = [3, png.width - 4];
      const rows = [];
      for (let y = Math.ceil(l.stage.top); y < Math.floor(l.scene.top) - 1; y++) rows.push(y);
      for (let y = Math.ceil(l.scene.bottom) + 1; y < Math.min(png.height, Math.floor(l.stage.bottom)); y++) rows.push(y);
      const hits = [];
      for (const y of rows) {
        for (const x of xs) {
          const i = (y * png.width + x) * 4;
          const px = [png.data[i], png.data[i + 1], png.data[i + 2]];
          if (colors.some((c) => near(px, c))) hits.push(`${x},${y}`);
        }
      }
      expect(hits.slice(0, 5), `room colour outside the room (${hits.length} px)`).toEqual([]);
    });

    test('side gaps next to a narrower room continue the wall and floor', async ({ page }) => {
      const l = await layout(page);
      test.skip(l.scene.left < 4, 'room spans the full width');
      const png = PNG.sync.read(await page.screenshot({ fullPage: true, scale: 'css', animations: 'disabled' }));
      const at = (x, y) => {
        const i = (Math.round(y) * png.width + x) * 4;
        return [png.data[i], png.data[i + 1], png.data[i + 2]];
      };
      const [wall, , , floor] = ROOM_COLORS[mode].map(rgb);
      expect(near(at(2, l.scene.top + l.scene.height * 0.3), wall)).toBe(true);
      expect(near(at(2, l.scene.top + l.scene.height * 0.95), floor)).toBe(true);
    });
  });
}
