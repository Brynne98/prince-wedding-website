"use client";
import { useEffect, useState } from "react";

const TARGET = new Date("2026-09-20T15:30:00+02:00").getTime();
const pad = (n) => String(Math.max(0, Math.floor(n))).padStart(2, "0");

function compute() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { d: "00", h: "00", m: "00", s: "00" };
  const s = diff / 1000;
  return {
    d: pad(s / 86400),
    h: pad((s / 3600) % 24),
    m: pad((s / 60) % 60),
    s: pad(s % 60),
  };
}

export default function Countdown() {
  const [t, setT] = useState({ d: "—", h: "—", m: "—", s: "—" });

  useEffect(() => {
    setT(compute());
    const id = setInterval(() => setT(compute()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="countdown" id="countdown">
      <div className="countdown-cell">
        <div className="countdown-num">{t.d}</div>
        <div className="countdown-lbl">Days</div>
      </div>
      <div className="countdown-cell">
        <div className="countdown-num">{t.h}</div>
        <div className="countdown-lbl">Hours</div>
      </div>
      <div className="countdown-cell">
        <div className="countdown-num">{t.m}</div>
        <div className="countdown-lbl">Minutes</div>
      </div>
      <div className="countdown-cell">
        <div className="countdown-num">{t.s}</div>
        <div className="countdown-lbl">Seconds</div>
      </div>
    </div>
  );
}
