export const COATS = {
      dora:   { main: '#f4f1ea', dark: '#8a5a3a', light: '#ffffff', eye: '#e0b23a', tail: '#8a5a3a' },
      ginger: { main: '#e8893a', dark: '#b85f1e', light: '#ffd9a8', eye: '#9be36b' },
      black:  { main: '#22202c', dark: '#111018', light: '#3a3748', eye: '#f2d14e' },
      grey:   { main: '#8c90a3', dark: '#5f6375', light: '#d6d9e3', eye: '#7fd3ff' },
      cream:  { main: '#efdcc0', dark: '#c9a983', light: '#fff6e8', eye: '#6fb3ff' }
};

export function theme(night) {
  return night
      ? { pop: 'rgba(18, 13, 34, 0.80)', bg: '#120d22', panel: '#1d1636', line: '#3a2f5c', ink: '#efe6d8', muted: '#c9bfe3', soft: '#e3daf3', head: '#ffffff', acc: '#ffc35a', shadow: '#0a0716' }
      : { pop: 'rgba(255, 250, 240, 0.82)', bg: '#f5ecdc', panel: '#fffaf0', line: '#d9c4a3', ink: '#2b2140', muted: '#5b5070', soft: '#3a3050', head: '#22193a', acc: '#9a4b0c', shadow: '#d9c4a3' };
}

export function scene(night) {
  return night
      ? { wall: '#2a2147', stripe: '#2f2650', base: '#1a1430', sky: '#13204a' }
      : { wall: '#e8cfa8', stripe: '#e0c49a', base: '#a77a55', sky: '#8fd3ff' };
}
