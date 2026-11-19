import React from 'react';
import { box } from './box';

const SEAMS = [[12.5, 72.7778], [37.5, 77.7778], [62.5, 72.7778], [81.25, 84.4444], [21.875, 84.4444], [56.25, 92.2222], [90.625, 77.7778]];

export default function Wall({ sc }) {
  return (
    <>
      <div style={box(0, 0, 100, 72.2222, sc.wall)} />
      {Array.from({ length: 20 }, (_, i) => <div key={i} style={box(i * 5, 0, 0.3125, 71.1111, sc.stripe)} />)}
      <div style={box(0, 71.1111, 100, 1.6667, sc.base)} />
      <div style={box(0, 72.7778, 100, 27.2222, '#4a2f27')} />
      <div style={box(0, 77.7778, 100, 0.5556, '#3c251f')} />
      <div style={box(0, 84.4444, 100, 0.5556, '#3c251f')} />
      <div style={box(0, 92.2222, 100, 0.5556, '#3c251f')} />
      {SEAMS.map(([l, t], i) => <div key={i} style={box(l, t, 0.3125, 6.6667, '#3c251f')} />)}
    </>
  );
}
