"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
}

const COLORS = ["#00d4ff", "#8b5cf6", "#3b82f6", "#06b6d4", "#a78bfa"];

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const mouse = { x: -9999, y: -9999 };
    const MAX_DIST = 170;
    const COUNT = Math.min(Math.round((W * H) / 14000), 110);

    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      size: Math.random() * 1.8 + 0.8,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.5 + 0.3,
    }));

    let raf: number;

    function hex2rgba(hex: string, a: number) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${a})`;
    }

    function tick() {
      ctx!.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse repulsion
        const dxm = p.x - mouse.x;
        const dym = p.y - mouse.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < 130) {
          const force = (130 - dm) / 130;
          p.vx += (dxm / dm) * force * 0.06;
          p.vy += (dym / dm) * force * 0.06;
        }

        // Dampen + move
        p.vx *= 0.982;
        p.vy *= 0.982;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges softly
        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20;
        if (p.y > H + 20) p.y = -20;

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < MAX_DIST) {
            const lineAlpha = (1 - d / MAX_DIST) * 0.22;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(p2.x, p2.y);
            ctx!.strokeStyle = `rgba(0,212,255,${lineAlpha})`;
            ctx!.lineWidth = 0.65;
            ctx!.stroke();
          }
        }

        // Outer glow
        const glowRadius = p.size * 5;
        const grd = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
        grd.addColorStop(0, hex2rgba(p.color, p.alpha * 0.45));
        grd.addColorStop(1, hex2rgba(p.color, 0));
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx!.fillStyle = grd;
        ctx!.fill();

        // Core dot
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = hex2rgba(p.color, p.alpha);
        ctx!.fill();
      }

      raf = requestAnimationFrame(tick);
    }

    tick();

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      style={{ opacity: 0.65 }}
    />
  );
}
