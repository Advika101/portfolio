import React from 'react';

export default function Panel({ cur, closePop, isContact, isGuitar, isCat, riffs, pets }) {
  return (
      <aside className="pop" aria-label={cur.title} style={{position: "absolute", top: "12px", right: "12px", bottom: "12px", width: "28%", minWidth: "280px", overflowY: "auto", boxSizing: "border-box", padding: "22px", background: "var(--pop)", color: "var(--ink)", border: "4px solid var(--line)", boxShadow: "0 8px 0 var(--shadow)", WebkitBackdropFilter: "blur(6px)", backdropFilter: "blur(6px)", display: "flex", flexDirection: "column", gap: "14px", zIndex: "6", fontSize: "20px", lineHeight: "1.3"}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px"}}>
          <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
            <p style={{margin: "0", fontFamily: "'Press Start 2P', monospace", fontSize: "9px", color: "var(--acc)"}}>{cur.kicker}</p>
            <h2 style={{margin: "0", fontFamily: "'Press Start 2P', monospace", fontSize: "12px", lineHeight: "1.5", color: "var(--head)"}}>{cur.title}</h2>
          </div>
          <button type="button" aria-label="Close" onClick={closePop} style={{flex: "none", width: "32px", height: "32px", fontFamily: "'Press Start 2P', monospace", fontSize: "10px", color: "var(--ink)", background: "transparent", border: "2px solid var(--line)", cursor: "pointer"}}>X</button>
        </div>
        {(cur.body) ? (<>
          <p style={{margin: "0", color: "var(--soft)"}}>{cur.body}</p>
        </>) : null}
        {(cur.hasStats) ? (<>
          <div style={{display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "8px"}}>
            {(cur.stats).map((s, s_i) => (<React.Fragment key={s_i}>
              <div style={{border: "2px solid var(--line)", padding: "8px", display: "flex", flexDirection: "column", gap: "6px"}}>
                <span style={{fontFamily: "'Press Start 2P', monospace", fontSize: "11px", lineHeight: "1.4", color: "var(--acc)"}}>{s.value}</span>
                <span style={{fontSize: "17px", color: "var(--muted)"}}>{s.label}</span>
              </div>
            </React.Fragment>))}
          </div>
        </>) : null}
        {(cur.groups).map((g, g_i) => (<React.Fragment key={g_i}>
          <div style={{display: "flex", flexDirection: "column", gap: "6px", borderTop: "2px dashed var(--line)", paddingTop: "10px"}}>
            <h3 style={{margin: "0", fontFamily: "'Press Start 2P', monospace", fontSize: "9px", lineHeight: "1.6", color: "var(--head)"}}>{g.heading}</h3>
            {(g.meta) ? (<>
              <span style={{color: "var(--muted)", fontSize: "17px"}}>{g.meta}</span>
            </>) : null}
            {(g.hasBullets) ? (<>
              <ul style={{margin: "0", padding: "4px 12px", listStyle: "none", border: "2px solid var(--line)", background: "var(--bg)", display: "flex", flexDirection: "column"}}>
                {(g.bullets).map((b, b_i) => (<React.Fragment key={b_i}>
                  <li style={{display: "flex", flexDirection: "column", gap: "4px", padding: "8px 0", borderBottom: "1px dashed var(--line)"}}>
                    <span style={{fontFamily: "'Press Start 2P', monospace", fontSize: "11px", lineHeight: "1.5", color: "var(--acc)"}}>{b.impact}</span>
                    <span style={{fontSize: "17px", lineHeight: "1.2", color: "var(--soft)"}}>{b.text}</span>
                  </li>
                </React.Fragment>))}
              </ul>
            </>) : null}
            {(g.hasChips) ? (<>
              <div style={{display: "flex", flexWrap: "wrap", gap: "6px"}}>
                {(g.chips).map((c, c_i) => (<React.Fragment key={c_i}>
                  <span style={{border: "2px solid var(--line)", padding: "0 8px", fontSize: "17px", color: "var(--soft)"}}>{c.text}</span>
                </React.Fragment>))}
              </div>
            </>) : null}
          </div>
        </React.Fragment>))}
        {(isContact) ? (<>
          <div style={{display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start"}}>
            <a className="ext" href="mailto:advikabhatwork@gmail.com">Email me</a>
            <a className="ext ghost" href="https://github.com/Advika101">GitHub</a>
            <a className="ext ghost" href="https://www.linkedin.com/in/advika-bhat-604a4a255">LinkedIn</a>
          </div>
        </>) : null}
        {(isGuitar) ? (<>
          <div style={{display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center"}}>
            <span style={{fontFamily: "'Press Start 2P', monospace", fontSize: "16px", lineHeight: "1.5", color: "var(--acc)"}}>Riffs played: {riffs}</span>
            <span style={{fontSize: "18px", color: "var(--muted)"}}>Click the guitar again for another riff.</span>
          </div>
        </>) : null}
        {(isCat) ? (<>
          <div style={{display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center"}}>
            <span style={{fontFamily: "'Press Start 2P', monospace", fontSize: "16px", lineHeight: "1.5", color: "var(--acc)"}}>Head pats: {pets}</span>
            <span style={{fontSize: "18px", color: "var(--muted)"}}>Click Dora again to pet her.</span>
          </div>
        </>) : null}
      </aside>
  );
}
