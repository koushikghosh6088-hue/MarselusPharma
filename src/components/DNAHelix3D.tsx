"use client";

import React, { useEffect, useRef, useState } from "react";

interface TelemetryNode {
  label: string;
  value: string;
  sub: string;
  color: string;
}

const TELEMETRY_NODES: TelemetryNode[] = [
  { label: "COLONIC TARGETING", value: "pH > 6.8", sub: "Site-Specific Dissolution", color: "#10b981" },
  { label: "PHYSIOLOGICAL RATIO", value: "40:1", sub: "Myo/D-Chiro Inositol", color: "#d6438c" },
  { label: "IMMUNONUTRITION", value: "15g L-Glutamine", sub: "Mucosal Barrier Repair", color: "#e08a2e" },
  { label: "VITAMIN D3 CARE", value: "60,000 IU", sub: "Rapid Clinical Correction", color: "#2488a6" },
];

export default function DNAHelix3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeNode, setActiveNode] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let rotationAngle = 0;
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;
    let targetRotationSpeed = 0.015;
    let currentRotationSpeed = 0.015;
    let tiltAngleX = 0.35;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMouseX;
      const deltaY = e.clientY - previousMouseY;

      rotationAngle += deltaX * 0.01;
      tiltAngleX += deltaY * 0.005;
      tiltAngleX = Math.max(-0.6, Math.min(0.8, tiltAngleX));

      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMouseX = e.touches[0].clientX;
        previousMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMouseX;
      const deltaY = e.touches[0].clientY - previousMouseY;

      rotationAngle += deltaX * 0.01;
      tiltAngleX += deltaY * 0.005;

      previousMouseX = e.touches[0].clientX;
      previousMouseY = e.touches[0].clientY;
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    const numBasePairs = 24;
    const strandRadius = 75;
    const verticalSpacing = 16;
    const totalHeight = numBasePairs * verticalSpacing;

    const render = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const startY = centerY - totalHeight / 2;

      if (!isDragging) {
        currentRotationSpeed += (targetRotationSpeed - currentRotationSpeed) * 0.05;
        rotationAngle += currentRotationSpeed;
      }

      interface Point3D {
        x1: number;
        y1: number;
        z1: number;
        x2: number;
        y2: number;
        z2: number;
        angle: number;
        pairIndex: number;
        color: string;
      }

      const points: Point3D[] = [];

      for (let i = 0; i < numBasePairs; i++) {
        const y = startY + i * verticalSpacing;
        const angle = rotationAngle + i * 0.35;

        const x1_raw = Math.cos(angle) * strandRadius;
        const z1_raw = Math.sin(angle) * strandRadius;

        const x2_raw = Math.cos(angle + Math.PI) * strandRadius;
        const z2_raw = Math.sin(angle + Math.PI) * strandRadius;

        const y1_tilted = (y - centerY) * Math.cos(tiltAngleX) - z1_raw * Math.sin(tiltAngleX) + centerY;
        const z1_tilted = (y - centerY) * Math.sin(tiltAngleX) + z1_raw * Math.cos(tiltAngleX);

        const y2_tilted = (y - centerY) * Math.cos(tiltAngleX) - z2_raw * Math.sin(tiltAngleX) + centerY;
        const z2_tilted = (y - centerY) * Math.sin(tiltAngleX) + z2_raw * Math.cos(tiltAngleX);

        const nodeColors = ["#10b981", "#3b82f6", "#d6438c", "#e08a2e", "#2488a6", "#d9a441"];
        const color = nodeColors[i % nodeColors.length];

        points.push({
          x1: centerX + x1_raw,
          y1: y1_tilted,
          z1: z1_tilted,
          x2: centerX + x2_raw,
          y2: y2_tilted,
          z2: z2_tilted,
          angle,
          pairIndex: i,
          color,
        });
      }

      points.sort((a, b) => (a.z1 + a.z2) / 2 - (b.z1 + b.z2) / 2);

      points.forEach((pt) => {
        const avgZ = (pt.z1 + pt.z2) / 2;
        const scale1 = (pt.z1 + 180) / 360 + 0.5;
        const scale2 = (pt.z2 + 180) / 360 + 0.5;
        const alpha = Math.min(1, Math.max(0.25, (avgZ + 150) / 300));

        ctx.beginPath();
        ctx.moveTo(pt.x1, pt.y1);
        ctx.lineTo(pt.x2, pt.y2);
        ctx.strokeStyle = `rgba(217, 164, 65, ${alpha * 0.55})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        const midX = (pt.x1 + pt.x2) / 2;
        const midY = (pt.y1 + pt.y2) / 2;
        ctx.beginPath();
        ctx.arc(midX, midY, 3 * scale1, 0, Math.PI * 2);
        ctx.fillStyle = pt.color;
        ctx.shadowColor = pt.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        const radius1 = 6.5 * scale1;
        ctx.beginPath();
        ctx.arc(pt.x1, pt.y1, radius1, 0, Math.PI * 2);
        const grad1 = ctx.createRadialGradient(pt.x1 - radius1 * 0.3, pt.y1 - radius1 * 0.3, 1, pt.x1, pt.y1, radius1);
        grad1.addColorStop(0, "#ffffff");
        grad1.addColorStop(0.4, pt.color);
        grad1.addColorStop(1, "#0a2e22");
        ctx.fillStyle = grad1;
        ctx.shadowColor = pt.color;
        ctx.shadowBlur = 12 * scale1;
        ctx.fill();
        ctx.shadowBlur = 0;

        const radius2 = 6.5 * scale2;
        ctx.beginPath();
        ctx.arc(pt.x2, pt.y2, radius2, 0, Math.PI * 2);
        const grad2 = ctx.createRadialGradient(pt.x2 - radius2 * 0.3, pt.y2 - radius2 * 0.3, 1, pt.x2, pt.y2, radius2);
        grad2.addColorStop(0, "#ffffff");
        grad2.addColorStop(0.4, "#d9a441");
        grad2.addColorStop(1, "#196780");
        ctx.fillStyle = grad2;
        ctx.shadowColor = "#d9a441";
        ctx.shadowBlur = 12 * scale2;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % TELEMETRY_NODES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isHovered]);

  const currentNode = TELEMETRY_NODES[activeNode];

  return (
    <div
      className="dna-helix-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        width: "100%",
        height: "460px",
        borderRadius: "24px",
        background: "linear-gradient(145deg, rgba(8, 30, 24, 0.96) 0%, rgba(15, 55, 70, 0.98) 60%, rgba(6, 22, 28, 0.96) 100%)",
        border: "1.5px solid rgba(217, 164, 65, 0.45)",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35), 0 0 30px rgba(16, 185, 129, 0.15) inset",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          cursor: "grab",
        }}
      />

      <div style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255, 255, 255, 0.08)", padding: "6px 14px", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.15)" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px #10b981" }}></span>
          <span style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: "#ffffff", textTransform: "uppercase" }}>
            INTERACTIVE 3D DNA MODEL
          </span>
        </div>

        <span style={{ fontSize: "10px", fontWeight: "800", color: "#fbbf24", letterSpacing: "0.1em" }}>
          DRAG TO ROTATE ↻
        </span>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          background: "rgba(12, 40, 32, 0.88)",
          backdropFilter: "blur(16px)",
          border: `1.5px solid ${currentNode.color}`,
          borderRadius: "18px",
          padding: "14px 18px",
          boxShadow: `0 10px 30px rgba(0, 0, 0, 0.4), 0 0 20px ${currentNode.color}33`,
          transition: "all 0.4s ease",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
          <span style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: currentNode.color, textTransform: "uppercase" }}>
            {currentNode.label}
          </span>
          <div style={{ display: "flex", gap: "6px" }}>
            {TELEMETRY_NODES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveNode(idx)}
                style={{
                  width: idx === activeNode ? "18px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: idx === activeNode ? currentNode.color : "rgba(255, 255, 255, 0.3)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div style={{ fontSize: "1.35rem", fontWeight: "900", fontFamily: "var(--font-heading)", color: "#ffffff" }}>
            {currentNode.value}
          </div>
          <div style={{ fontSize: "0.78rem", fontWeight: "700", color: "rgba(255, 255, 255, 0.85)" }}>
            {currentNode.sub}
          </div>
        </div>
      </div>
    </div>
  );
}
