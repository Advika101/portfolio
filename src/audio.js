export function playRiff(ac, n) {
      var riffs = [
        [64, 67, 69, 67, 72, 71, 69, 67, 64],
        [57, 60, 62, 63, 64, 67, 64, 62, 60],
        [52, 55, 57, 55, 59, 57, 55, 52, 50]
      ];
      var seq = riffs[n % riffs.length];
      var curve = new Float32Array(1024);
      for (var i = 0; i < 1024; i++) { var x = i * 2 / 1024 - 1; curve[i] = Math.tanh(6 * x); }
      var drive = ac.createWaveShaper(); drive.curve = curve;
      var tone = ac.createBiquadFilter(); tone.type = 'lowpass'; tone.frequency.value = 2400;
      var out = ac.createGain(); out.gain.value = 0.12;
      drive.connect(tone); tone.connect(out); out.connect(ac.destination);
      var t0 = ac.currentTime + 0.03, step = 0.19;
      seq.forEach(function (m, k) {
        var f = 440 * Math.pow(2, (m - 69) / 12);
        var t = t0 + k * step, len = k === seq.length - 1 ? 0.6 : step * 0.95;
        [1, 1.5].forEach(function (mul) {
          var o = ac.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f * mul;
          var g = ac.createGain();
          g.gain.setValueAtTime(0.0001, t);
          g.gain.exponentialRampToValueAtTime(0.8, t + 0.01);
          g.gain.exponentialRampToValueAtTime(0.0001, t + len);
          o.connect(g); g.connect(drive); o.start(t); o.stop(t + len + 0.02);
        });
      });
}
