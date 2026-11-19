import React from 'react';
import { box } from './box';

const TROPHIES = [['#f2c14e', '#c99a2e'], ['#d9dde6', '#a7adbb'], ['#f2c14e', '#c99a2e'], ['#d08a4e', '#a46634'], ['#f2c14e', '#c99a2e']];

function Trophy({ x, cup, trim }) {
  return (
    <>
      <div style={box(x, 20, 2.5, 3.3333, cup)} />
      <div style={box(x - 0.625, 20.5556, 0.625, 1.6667, trim)} />
      <div style={box(x + 2.5, 20.5556, 0.625, 1.6667, trim)} />
      <div style={box(x + 0.9375, 23.3333, 0.625, 2.2222, trim)} />
      <div style={box(x + 0.3125, 25.5556, 1.875, 2.2222, '#3a2b20')} />
      <div style={box(x + 0.3125, 20.5556, 0.625, 1.1111, '#fff3c4')} />
    </>
  );
}

export default function Trophies() {
  return (
    <>
      <div style={box(45, 27.7778, 23.75, 1.6667, '#6b4a2f')} />
      <div style={box(46.25, 29.4444, 0.9375, 2.2222, '#4a3322')} />
      <div style={box(66.5625, 29.4444, 0.9375, 2.2222, '#4a3322')} />
      {TROPHIES.map(([cup, trim], i) => <Trophy key={i} x={46.5625 + i * 4.375} cup={cup} trim={trim} />)}
    </>
  );
}
