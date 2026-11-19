import React from 'react';

export default function Window({ sc, night, day }) {
  return (
    <>
<div style={{position: "absolute", left: "2.5000%", top: "8.8889%", width: "17.5000%", height: "28.8889%", background: "#4a3b2a"}}></div>
<div style={{position: "absolute", left: "3.4375%", top: "10.5556%", width: "15.6250%", height: "25.5556%", background: sc.sky}}></div>
{(night) ? (<>
<div style={{position: "absolute", left: "13.7500%", top: "12.7778%", width: "2.8125%", height: "5.0000%", background: "#f4e9c1"}}></div>
<div style={{position: "absolute", left: "14.6875%", top: "12.7778%", width: "1.8750%", height: "1.6667%", background: "#13204a"}}></div>
<div className="twinkle" style={{position: "absolute", left: "5.0000%", top: "14.4444%", width: "0.3125%", height: "0.5556%", background: "#fff6d6"}}></div>
<div className="twinkle d2" style={{position: "absolute", left: "8.1250%", top: "22.2222%", width: "0.3125%", height: "0.5556%", background: "#fff6d6"}}></div>
<div className="twinkle d3" style={{position: "absolute", left: "11.2500%", top: "13.3333%", width: "0.3125%", height: "0.5556%", background: "#fff6d6"}}></div>
<div className="twinkle d2" style={{position: "absolute", left: "6.2500%", top: "30.0000%", width: "0.3125%", height: "0.5556%", background: "#fff6d6"}}></div>
<div className="twinkle" style={{position: "absolute", left: "16.8750%", top: "26.6667%", width: "0.3125%", height: "0.5556%", background: "#fff6d6"}}></div>
<div className="twinkle d3" style={{position: "absolute", left: "10.0000%", top: "31.1111%", width: "0.3125%", height: "0.5556%", background: "#fff6d6"}}></div>
</>) : null}
{(day) ? (<>
<div style={{position: "absolute", left: "13.1250%", top: "12.7778%", width: "3.1250%", height: "5.5556%", background: "#ffe066"}}></div>
<div style={{position: "absolute", left: "13.7500%", top: "11.6667%", width: "1.8750%", height: "7.7778%", background: "#ffe066"}}></div>
<div style={{position: "absolute", left: "12.5000%", top: "13.8889%", width: "4.3750%", height: "3.3333%", background: "#ffe066"}}></div>
<div style={{position: "absolute", left: "13.7500%", top: "13.8889%", width: "1.2500%", height: "1.6667%", background: "#fff3b0"}}></div>
<div style={{position: "absolute", left: "4.3750%", top: "25.5556%", width: "4.3750%", height: "2.2222%", background: "#ffffff"}}></div>
<div style={{position: "absolute", left: "5.3125%", top: "23.8889%", width: "2.5000%", height: "1.6667%", background: "#ffffff"}}></div>
<div style={{position: "absolute", left: "12.5000%", top: "28.8889%", width: "5.0000%", height: "2.2222%", background: "#ffffff"}}></div>
<div style={{position: "absolute", left: "13.7500%", top: "27.2222%", width: "2.1875%", height: "1.6667%", background: "#ffffff"}}></div>
<div style={{position: "absolute", left: "6.8750%", top: "16.6667%", width: "2.5000%", height: "1.6667%", background: "#eaf6ff"}}></div>
<div style={{position: "absolute", left: "3.4375%", top: "32.2222%", width: "15.6250%", height: "3.8889%", background: "#7cc47f"}}></div>
<div style={{position: "absolute", left: "5.6250%", top: "30.5556%", width: "3.7500%", height: "1.6667%", background: "#6ab36e"}}></div>
<div style={{position: "absolute", left: "13.7500%", top: "31.1111%", width: "4.3750%", height: "1.1111%", background: "#6ab36e"}}></div>
<div style={{position: "absolute", left: "7%", top: "38%", width: "22%", height: "55%", background: "rgba(255,240,200,0.18)", clipPath: "polygon(10% 0, 60% 0, 100% 100%, 40% 100%)", pointerEvents: "none"}}></div>
</>) : null}
<div style={{position: "absolute", left: "10.9375%", top: "10.5556%", width: "0.6250%", height: "25.5556%", background: "#4a3b2a"}}></div>
<div style={{position: "absolute", left: "3.4375%", top: "22.7778%", width: "15.6250%", height: "1.1111%", background: "#4a3b2a"}}></div>
<div style={{position: "absolute", left: "1.2500%", top: "7.7778%", width: "2.5000%", height: "32.2222%", background: "#7a3b4b"}}></div>
<div style={{position: "absolute", left: "18.7500%", top: "7.7778%", width: "2.5000%", height: "32.2222%", background: "#7a3b4b"}}></div>
<div style={{position: "absolute", left: "1.2500%", top: "6.6667%", width: "20.0000%", height: "1.6667%", background: "#2a1d14"}}></div>
<div style={{position: "absolute", left: "1.8750%", top: "37.7778%", width: "18.7500%", height: "1.6667%", background: "#5c4a36"}}></div>
    </>
  );
}
