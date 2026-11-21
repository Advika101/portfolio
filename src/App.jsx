import React from 'react';
import { COATS, theme, scene } from './theme';
import { SECTIONS, SPOTS } from './data';
import { playRiff } from './audio';
import Header from './components/Header';
import Room from './components/room/Room';
import Hotspots from './components/Hotspots';
import Panel from './components/Panel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { q: '', sel: 'me', pets: 0, night: null, playing: false, riffs: 0 };
  }

  pet() { this.setState({ pets: this.state.pets + 1 }); }
  componentWillUnmount() { clearTimeout(this.riffTimer); }

  riff() {
    var n = this.state.riffs;
    this.setState({ playing: true, riffs: n + 1 });
    clearTimeout(this.riffTimer);
    this.riffTimer = setTimeout(() => this.setState({ playing: false }), 2000);
    try {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      this.ac = this.ac || new Ctx();
      if (this.ac.state === 'suspended') this.ac.resume();
      playRiff(this.ac, n);
    } catch (e) {}
  }

  renderVals() {
    var self = this;
    var cat = COATS[this.props.catCoat] || COATS.dora;
    if (!cat.tail) cat = Object.assign({ tail: cat.main }, cat);
    var night = this.state.night === null ? !!this.props.startNight : this.state.night;
    var th = theme(night);
    var sc = scene(night);
    var S = SECTIONS;
    var spots = SPOTS;
    var pct = function (v, d) { return (v / d * 100).toFixed(3) + '%'; };
    var hotspots = spots.map(function (s) {
      var key = s[0];
      var on = key === self.state.sel;
      if (key === 'window') {
        return { label: night ? 'Window — switch to day' : 'Window — switch to night', cls: 'hot', pressed: night ? 'true' : 'false',
          l: pct(s[1], 320), t: pct(s[2], 180), w: pct(s[3], 320), h: pct(s[4], 180),
          pick: function () { self.setState({ night: !night }); } };
      }
      return {
        label: S[key].label,
        cls: on ? 'hot on' : 'hot', pressed: on ? 'true' : 'false',
        l: pct(s[1], 320), t: pct(s[2], 180), w: pct(s[3], 320), h: pct(s[4], 180),
        pick: function () {
          if (key === 'cat') { self.pet(); }
          if (key === 'guitar') { self.riff(); }
          self.setState({ sel: on && key !== 'guitar' && key !== 'cat' ? null : key });
        }
      };
    });
    var selKey = this.state.sel;
    var c = S[selKey] || S.me;
    var isSkills = selKey === 'books';
    var q = (this.state.q || '').trim().toLowerCase();
    var total = 0;
    var groups = c.groups.map(function (g) {
      var chips = (isSkills && q) ? g.chips.filter(function (t) { return t.toLowerCase().indexOf(q) !== -1 || g.heading.toLowerCase().indexOf(q) !== -1; }) : g.chips;
      total += chips.length;
      return { heading: g.heading, meta: g.meta, keep: !(isSkills && q) || chips.length > 0,
        bullets: g.bullets.map(function (b) { return { impact: b[0], text: b[1] }; }), hasBullets: g.bullets.length > 0,
        chips: chips.map(function (t) { return { text: t }; }), hasChips: chips.length > 0 };
    }).filter(function (g) { return g.keep; });
    var cur = { kicker: c.kicker, title: c.title, body: c.body, stats: c.stats, hasStats: c.stats.length > 0, groups: groups };
    var matchText = !q ? 'Showing all skills' : (total === 0 ? 'No skills match "' + this.state.q.trim() + '"' : total + (total === 1 ? ' match' : ' matches'));
    var lines = ['mrrp!', 'purrrr…', 'mew :3', 'prrt?', '*slow blink*'];
    return {
      orb: night ? "moon" : "sun", hasSel: !!selKey, closePop: function () { self.setState({ sel: null }); },
      cat: cat, night: night, day: !night, th: th, sc: sc,
      dayCls: night ? 'chip-btn' : 'chip-btn on', nightCls: night ? 'chip-btn on' : 'chip-btn',
      dayPressed: night ? 'false' : 'true', nightPressed: night ? 'true' : 'false',
      setDay: function () { self.setState({ night: false }); }, setNight: function () { self.setState({ night: true }); }, hotspots: hotspots, cur: cur,
      isContact: this.state.sel === 'window', isCat: this.state.sel === 'cat',
      pets: this.state.pets, petCat: function () { self.pet(); },
      showBubble: this.state.playing || (this.state.pets > 0 && this.state.sel === 'cat'),
      bubble: this.state.playing ? 'mrrp?!' : lines[(this.state.pets - 1 + lines.length) % lines.length],
      playing: this.state.playing, isGuitar: this.state.sel === 'guitar', riffs: this.state.riffs,
      playRiff: function () { self.riff(); },
      riffLabel: this.state.playing ? 'Playing…' : 'Play a riff',
      ampCls: this.state.playing ? 'thump' : '', ampLed: this.state.playing ? 'led-on' : ''
    };
  }

  render() {
    const v = this.renderVals();
    const { hasSel, closePop, cat, night, day, th, sc, hotspots, cur, isContact, isCat, pets, showBubble, bubble, playing, isGuitar, riffs, ampCls, ampLed } = v;
    return (
      <div style={{"--pop": th.pop, "--bg": th.bg, "--panel": th.panel, "--line": th.line, "--ink": th.ink, "--muted": th.muted, "--soft": th.soft, "--head": th.head, "--acc": th.acc, "--shadow": th.shadow, overflowX: "hidden", minHeight: "100vh", background: "var(--bg)", color: "var(--ink)", fontFamily: "'VT323', monospace", fontSize: "22px", lineHeight: "1.35"}} data-document-role="page" data-label="Personal site — pixel room">
        <div className="shell" style={{maxWidth: "none", margin: "0 auto", padding: "28px 0 0", display: "flex", flexDirection: "column", gap: "18px"}}>
          <Header />
          <p style={{margin: "0", padding: "0 20px", fontFamily: "'Press Start 2P', monospace", fontSize: "10px", color: "var(--muted)"}}>&gt; click anything in the room<span className="blink" style={{color: "var(--acc)"}}>_</span></p>
          <div className="stage" style={{position: "relative"}}>
            <div className="room-scroll">
              <div className="scene" style={{position: "relative", width: "100%", aspectRatio: "16 / 9", overflow: "visible"}}>
                <Room sc={sc} night={night} day={day} cat={cat} ampCls={ampCls} ampLed={ampLed} playing={playing} />
                <Hotspots hotspots={hotspots} showBubble={showBubble} bubble={bubble} />
              </div>
            </div>
            {hasSel && <Panel cur={cur} closePop={closePop} isContact={isContact} isGuitar={isGuitar} isCat={isCat} riffs={riffs} pets={pets} />}
          </div>
        </div>
      </div>
    );
  }
}
