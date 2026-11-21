import React from 'react';

function fitTip(e) {
  const tip = e.currentTarget.querySelector('.tip');
  tip.style.setProperty('--dx', '0px');
  const r = tip.getBoundingClientRect();
  const vw = document.documentElement.clientWidth;
  const dx = r.left < 4 ? 4 - r.left : r.right > vw - 4 ? vw - 4 - r.right : 0;
  tip.style.setProperty('--dx', dx + 'px');
}

export default function Hotspots({ hotspots, showBubble, bubble }) {
  return (
    <>
    {(showBubble) ? (<>
      <div className="bob" style={{position: "absolute", left: "58%", top: "43%", fontFamily: "'Press Start 2P', monospace", fontSize: "10px", color: "#120d22", background: "#ffffff", padding: "6px 8px", border: "2px solid #120d22", whiteSpace: "nowrap", pointerEvents: "none"}}>{bubble}</div>
    </>) : null}
    {(hotspots).map((h, h_i) => (<React.Fragment key={h_i}>
      <button type="button" className={h.cls} data-label={h.label} aria-label={h.label} aria-pressed={h.pressed} onClick={h.pick} onMouseEnter={fitTip} onFocus={fitTip} style={{left: h.l, top: h.t, width: h.w, height: h.h}}><span className="tip" aria-hidden="true">{h.label}</span></button>
    </React.Fragment>))}
    </>
  );
}
