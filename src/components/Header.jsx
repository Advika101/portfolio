import React from 'react';

export default function Header() {
  return (
<header style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", padding: "0 20px"}}>
  <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
    <p style={{margin: "0", fontFamily: "'Press Start 2P', monospace", fontSize: "10px", color: "var(--acc)", letterSpacing: "1px"}}>~/advika $ whoami</p>
    <h1 style={{margin: "0", fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(22px, 4vw, 34px)", lineHeight: "1.3", color: "var(--head)"}}>Advika Bhat</h1>
    <p style={{margin: "0", fontSize: "24px", color: "var(--muted)"}}>AI infrastructure · DevOps · cloud — and an unreasonable number of cat photos.</p>
  </div>
  <nav aria-label="Links" style={{display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center"}}>
    <a className="ext ghost" href="https://github.com/Advika101" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a className="ext ghost" href="https://www.linkedin.com/in/advika-bhat-604a4a255" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a className="ext ghost" href="Advika_Bhat_Resume_2026.pdf" target="_blank" rel="noopener noreferrer">Resume (PDF)</a>
    <a className="ext" href="mailto:advikabhatwork@gmail.com">Say hi</a>
  </nav>
</header>
  );
}
