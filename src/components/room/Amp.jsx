import React from 'react';
import { box } from './box';

export default function Amp({ ampCls, ampLed }) {
  return (
    <>
      <div style={box(17.5, 67.7778, 8.75, 15.5556, '#1c1b29')} />
      <div style={box(17.8125, 68.3333, 8.125, 2.7778, '#e8e3f0')} />
      {Array.from({ length: 4 }, (_, i) => <div key={i} style={box(18.75 + i * 1.25, 69.4444, 0.625, 1.1111, '#2a2940')} />)}
      <div className={ampLed} style={box(24.375, 68.8889, 0.9375, 1.6667, '#d63a3a')} />
      <div className={ampCls} style={box(18.125, 71.6667, 7.5, 10.5556, '#3a3955')} />
      {Array.from({ length: 4 }, (_, i) => <div key={i} style={box(18.125, 73.3333 + i * 2.2222, 7.5, 0.5556, '#2a2940')} />)}
      {Array.from({ length: 3 }, (_, i) => <div key={i} style={box(19.6875 + i * 1.875, 71.6667, 0.3125, 10.5556, '#2a2940')} />)}
      <div style={box(20.3125, 72.2222, 3.125, 1.1111, '#f4f1ea')} />
      <div style={box(17.8125, 83.3333, 0.9375, 1.1111, '#111018')} />
      <div style={box(25, 83.3333, 0.9375, 1.1111, '#111018')} />
      <div style={box(26.25, 81.1111, 0.9375, 0.5556, '#111018')} />
      <div style={box(25.625, 81.6667, 0.625, 1.6667, '#111018')} />
    </>
  );
}
