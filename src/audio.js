export function playRiff(ac, n) {
      var riffs = [
        [[[62,1],[62,1],[74,2],[57,3],[56,2],[55,2],[53,2],[62,1],[53,1],[55,3]],0.12],
        [[[55,2],[58,2],[60,3],[55,2],[58,2],[61,1],[60,3]],0.25],
        [[[76,1],[76,1],[null,1],[76,1],[null,1],[72,1],[76,2],[79,3],[null,1],[67,1]],0.15]
      ];
      var riff = riffs[n % riffs.length];
      var seq = riff[0], unit = riff[1];
      var curve = new Float32Array(1024);
      for (var i = 0; i < 1024; i++) { var x = i * 2 / 1024 - 1; curve[i] = Math.tanh(6 * x); }
      var drive = ac.createWaveShaper(); drive.curve = curve;
      var tone = ac.createBiquadFilter(); tone.type = 'lowpass'; tone.frequency.value = 2400;
      var out = ac.createGain(); out.gain.value = 0.12;
      drive.connect(tone); tone.connect(out); out.connect(ac.destination);
      var clock = ac.currentTime + 0.03;
      seq.forEach(function (e, k) {
        var m = e[0];
        var units = e[1];
        var t = clock, dur = units * unit;
        clock += dur;
        if (m === null) return;
        var f = 440 * Math.pow(2, (m - 69) / 12);
        var len = k === seq.length - 1 ? 0.6 : dur * 0.95;
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
