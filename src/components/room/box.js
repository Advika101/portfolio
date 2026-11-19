// box(left, top, width, height, background, extra?) — absolute-positioned pixel-art rect, units in %.
export const box = (left, top, width, height, background, extra) => ({
  position: 'absolute',
  left: left + '%', top: top + '%', width: width + '%', height: height + '%',
  background, ...extra,
});
