"use client";

import { useEffect, useRef } from "react";

/* A slowly woven drawing: a warp and weft of ink lines, and one accent thread looping through. */
export function Weave({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const x = c.getContext("2d");
    if (!x) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, t = 0, raf = 0;
    const css = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    function size() {
      const r = c!.getBoundingClientRect();
      const d = Math.min(devicePixelRatio || 1, 2);
      c!.width = r.width * d;
      c!.height = r.height * d;
      x!.setTransform(d, 0, 0, d, 0, 0);
      W = r.width;
      H = r.height;
    }
    function draw() {
      x!.clearRect(0, 0, W, H);
      const m = 28, cols = 14, rows = Math.max(1, Math.round((cols * H) / W));
      const cw = (W - 2 * m) / cols, rh = (H - 2 * m) / rows;
      x!.lineWidth = 1;
      x!.strokeStyle = css("--ink");
      x!.globalAlpha = 0.55;
      for (let i = 0; i <= cols; i++) {
        const px = m + i * cw;
        x!.beginPath();
        for (let y = m; y <= H - m; y += 4) x!.lineTo(px + Math.sin(y * 0.045 + t * 0.6 + i) * 2.2, y);
        x!.stroke();
      }
      for (let j = 0; j <= rows; j++) {
        const py = m + j * rh;
        x!.beginPath();
        for (let xx = m; xx <= W - m; xx += 4) x!.lineTo(xx, py + Math.cos(xx * 0.045 - t * 0.5 + j) * 2.2);
        x!.stroke();
      }
      x!.globalAlpha = 1;
      x!.strokeStyle = css("--accent");
      x!.lineWidth = 1.6;
      x!.beginPath();
      for (let k = 0; k <= 1; k += 0.004) {
        const a = k * Math.PI * 2 * 1.5 + t * 0.25;
        const r = Math.min(W, H) * 0.26 * (0.7 + 0.3 * Math.sin(k * Math.PI * 6 + t));
        x!.lineTo(W / 2 + Math.cos(a) * r, H / 2 + Math.sin(a) * r * 0.8);
      }
      x!.stroke();
    }
    function loop() {
      t += 0.012;
      draw();
      if (!reduce) raf = requestAnimationFrame(loop);
    }
    const onResize = () => { size(); draw(); };
    size();
    loop();
    addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", onResize); };
  }, []);

  return <canvas ref={ref} className={className} role="img" aria-label="A slowly woven drawing of threads" />;
}
