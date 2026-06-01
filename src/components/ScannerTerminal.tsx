"use client";
import { useEffect, useRef, useState } from "react";

type LineType = "command" | "info" | "critical" | "legacy" | "ok" | "score" | "receipt" | "done";

interface ScanLine {
  text: string;
  type: LineType;
  delay: number;
}

const LINES: ScanLine[] = [
  { text: "$ r2pq scan ./demo-project",             type: "command",  delay: 0    },
  { text: "scanning… 142 files",                    type: "info",     delay: 400  },
  { text: "src/auth/login.py:42   RSA-2048     CRITICAL", type: "critical", delay: 1100 },
  { text: "src/auth/login.py:88   ECDSA P-256  CRITICAL", type: "critical", delay: 2000 },
  { text: "config/tls.yaml:3      SHA-1        LEGACY",   type: "legacy",   delay: 2900 },
  { text: "lib/hash.js:17         MD5          LEGACY",   type: "legacy",   delay: 3800 },
  { text: "PQC readiness: ML-KEM detected ✓",       type: "ok",       delay: 5000 },
  { text: "Y2Q Risk Score: 78 / 100  —  CRITICAL",  type: "score",    delay: 6200 },
  { text: "Sovereign Receipt: 0x9f3c…a71b",         type: "receipt",  delay: 7300 },
  { text: "scan complete — demo data",               type: "done",     delay: 8300 },
];

const LOOP_PAUSE = 3600;

const COLOR: Record<LineType, string> = {
  command:  "#e2e8f0",
  info:     "#64748b",
  critical: "#f87171",
  legacy:   "#f59e0b",
  ok:       "#38bdf8",
  score:    "#38bdf8",
  receipt:  "#94a3b8",
  done:     "#334155",
};

export default function ScannerTerminal() {
  const [visible, setVisible] = useState(0);
  const [blink, setBlink]     = useState(true);
  const isReduced             = useRef(false);

  useEffect(() => {
    isReduced.current =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isReduced.current) {
      setVisible(LINES.length);
      return;
    }

    let dead = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    function cycle() {
      if (dead) return;
      setVisible(0);
      LINES.forEach((_, i) =>
        timers.push(
          setTimeout(() => { if (!dead) setVisible(i + 1); }, LINES[i].delay)
        )
      );
      timers.push(
        setTimeout(
          () => { if (!dead) cycle(); },
          LINES[LINES.length - 1].delay + LOOP_PAUSE
        )
      );
    }

    cycle();

    const blinkId = setInterval(
      () => { if (!dead) setBlink(b => !b); },
      530
    );

    return () => {
      dead = true;
      timers.forEach(clearTimeout);
      clearInterval(blinkId);
    };
  }, []);

  const showCursor = visible > 0 && visible < LINES.length && blink;

  return (
    <div className="w-full">
      {/* Terminal panel */}
      <div
        className="rounded-lg overflow-hidden w-full"
        style={{
          background: "#060a0e",
          border: "1px solid rgba(148,163,184,0.09)",
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-1.5 px-4 py-2.5"
          style={{ borderBottom: "1px solid rgba(148,163,184,0.06)" }}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{ width: 9, height: 9, borderRadius: "50%", display: "inline-block", background: "#1e293b" }}
            />
          ))}
          <span
            className="ml-3 font-mono tracking-widest uppercase"
            style={{ fontSize: "0.58rem", color: "#2d3f52" }}
          >
            r2pq scan — demo
          </span>
        </div>

        {/* Output */}
        <div
          className="px-4 py-4 font-mono"
          style={{
            fontSize: "clamp(0.62rem, 1.8vw, 0.76rem)",
            lineHeight: 1.8,
            minHeight: 234,
          }}
        >
          {visible === 0 && (
            <div style={{ color: "#2d3f52" }}>{blink ? "▋" : " "}</div>
          )}
          {LINES.slice(0, visible).map((line, i) => (
            <div key={i} className="truncate" style={{ color: COLOR[line.type] }}>
              {line.text}
              {i === visible - 1 && showCursor && (
                <span style={{ color: "#3f5060" }}>▋</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <p
        className="mt-2.5 text-center font-mono tracking-widest"
        style={{ fontSize: "0.55rem", color: "#253040", letterSpacing: "0.18em", textTransform: "uppercase" }}
      >
        Illustrative demo — not real scan data
      </p>
    </div>
  );
}
