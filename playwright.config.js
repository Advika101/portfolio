import { defineConfig, devices } from '@playwright/test';

const chromium = (device) => ({ ...device, browserName: 'chromium', defaultBrowserType: 'chromium' });
const screen = (width, height) => ({ viewport: { width, height } });

const targets = {
  'iPhone SE': chromium(devices['iPhone SE']),
  'iPhone 15 Pro Max': chromium(devices['iPhone 15 Pro Max']),
  'Pixel 9': chromium(devices['Pixel 9']),
  'Pixel 9 Pro': chromium(devices['Pixel 9 Pro']),
  'Pixel 7': chromium(devices['Pixel 7']),
  'iPad Mini': chromium(devices['iPad Mini']),
  'Pixel 9 landscape': chromium(devices['Pixel 9 landscape']),
  'Galaxy S24': chromium(devices['Galaxy S24']),
  'iPad Pro 11': chromium(devices['iPad Pro 11']),
  'iPad Pro 11 landscape': chromium(devices['iPad Pro 11 landscape']),
  'iPad Pro 13': chromium({ ...devices['iPad Pro 11'], ...screen(1032, 1376) }),
  'iPad Pro 13 landscape': chromium({ ...devices['iPad Pro 11 landscape'], ...screen(1376, 1032) }),
  'Galaxy Tab S4': chromium(devices['Galaxy Tab S4']),
  'Laptop 1280x600': screen(1280, 600),
  'Laptop 1366x768': screen(1366, 768),
  'Desktop 1440x900': screen(1440, 900),
  'Desktop 1920x1080': screen(1920, 1080),
  'Squarish window 1200x1000': screen(1200, 1000),
};

export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  reporter: process.env.CI ? 'github' : 'list',
  use: { baseURL: 'http://localhost:4173/' },
  projects: Object.entries(targets).map(([name, use]) => ({ name, use })),
  webServer: {
    command: 'npx vite preview --port 4173 --strictPort',
    url: 'http://localhost:4173/',
    reuseExistingServer: !process.env.CI,
  },
});
