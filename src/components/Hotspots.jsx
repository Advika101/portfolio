import React from 'react';

export default function Hotspots({ hotspots, showBubble, bubble }) {
  return (
    <>
    {(showBubble) ? (<>
      <div className="bob" style={{position: "absolute", left: "58%", top: "43%", fontFamily: "'Press Start 2P', monospace", fontSize: "10px", color: "#120d22", background: "#ffffff", padding: "6px 8px", border: "2px solid #120d22", whiteSpace: "nowrap", pointerEvents: "none"}}>{bubble}</div>
    </>) : null}
    {(hotspots).map((h, h_i) => (<React.Fragment key={h_i}>
      <button type="button" className={h.cls} data-label={h.label} aria-label={h.label} aria-pressed={h.pressed} onClick={h.pick} style={{left: h.l, top: h.t, width: h.w, height: h.h}}></button>
    </React.Fragment>))}
    </>
  );
}
