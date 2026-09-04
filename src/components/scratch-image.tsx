"use client";

import { useEffect, useRef } from "react";

type ScratchImageProps = {
  topSrc: string;
  bottomSrc: string;
  alt: string;
  className?: string;
  brushSize?: number;
};

export function ScratchImage({
  topSrc,
  bottomSrc,
  alt,
  className = "",
  brushSize = 48,
}: ScratchImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let topImage: HTMLImageElement | null = null;
    let lastPoint: { x: number; y: number } | null = null;
    let fadeFrame: number | null = null;

    function drawCover(image: HTMLImageElement) {
      const canvasRatio = width / height;
      const imageRatio = image.naturalWidth / image.naturalHeight;
      let drawW = width;
      let drawH = height;
      let dx = 0;
      let dy = 0;
      if (imageRatio > canvasRatio) {
        drawH = height;
        drawW = height * imageRatio;
        dx = (width - drawW) / 2;
      } else {
        drawW = width;
        drawH = width / imageRatio;
        dy = (height - drawH) / 2;
      }
      ctx!.drawImage(image, dx, dy, drawW, drawH);
    }

    function resize() {
      const rect = container!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.globalCompositeOperation = "source-over";
      ctx!.globalAlpha = 1;
      if (topImage) drawCover(topImage);
    }

    const image = new window.Image();
    image.src = topSrc;
    image.onload = () => {
      topImage = image;
      resize();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    function scratchAt(x: number, y: number) {
      ctx!.globalCompositeOperation = "destination-out";
      const gradient = ctx!.createRadialGradient(x, y, 0, x, y, brushSize);
      gradient.addColorStop(0, "rgba(0,0,0,1)");
      gradient.addColorStop(0.7, "rgba(0,0,0,0.85)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx!.fillStyle = gradient;
      ctx!.beginPath();
      ctx!.arc(x, y, brushSize, 0, Math.PI * 2);
      ctx!.fill();
    }

    function scratchLine(from: { x: number; y: number }, to: { x: number; y: number }) {
      const dist = Math.hypot(to.x - from.x, to.y - from.y);
      const steps = Math.max(1, Math.ceil(dist / (brushSize / 3)));
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        scratchAt(from.x + (to.x - from.x) * t, from.y + (to.y - from.y) * t);
      }
    }

    function cancelFade() {
      if (fadeFrame !== null) {
        cancelAnimationFrame(fadeFrame);
        fadeFrame = null;
      }
    }

    function handlePointerMove(event: PointerEvent) {
      cancelFade();
      const rect = canvas!.getBoundingClientRect();
      const point = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      if (lastPoint) {
        scratchLine(lastPoint, point);
      } else {
        scratchAt(point.x, point.y);
      }
      lastPoint = point;
    }

    function handlePointerLeave() {
      lastPoint = null;
      cancelFade();
      const duration = 550;
      const start = performance.now();

      function step(now: number) {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        ctx!.clearRect(0, 0, width, height);
        ctx!.globalCompositeOperation = "source-over";
        ctx!.globalAlpha = eased;
        if (topImage) drawCover(topImage);
        ctx!.globalAlpha = 1;
        fadeFrame = t < 1 ? requestAnimationFrame(step) : null;
      }

      fadeFrame = requestAnimationFrame(step);
    }

    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      cancelFade();
    };
  }, [topSrc, brushSize]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- drawn as the base layer beneath a canvas the top image is scratched into; next/image's layout model doesn't fit a canvas overlay */}
      <img src={bottomSrc} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
