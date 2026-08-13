"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "./CanvasScrollSequence.module.css";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  frameCount: number;
  frameBaseUrl: string;
}

export default function CanvasScrollSequence({ frameCount, frameBaseUrl }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !containerRef.current) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Set canvas dimensions
    canvas.width = 1920;
    canvas.height = 1080;

    const currentFrame = (index: number) => 
      `${frameBaseUrl}ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`;

    // Preload images
    let imagesLoaded = 0;
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        imagesLoaded++;
        if (i === 0) {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          
          try {
            const pixelData = ctx.getImageData(10, 10, 1, 1).data;
            const r = pixelData[0].toString(16).padStart(2, '0');
            const g = pixelData[1].toString(16).padStart(2, '0');
            const b = pixelData[2].toString(16).padStart(2, '0');
            const bgColor = `#${r}${g}${b}`;
            document.documentElement.style.setProperty('--color-bg-cream', bgColor);
          } catch (err) {
            console.warn("Could not extract background color from frame.", err);
          }
        }
      };
      imagesRef.current.push(img);
    }

    if (prefersReducedMotion) return;

    // Object to animate
    const animationTarget = { frame: 0 };

    const render = () => {
      const frameIndex = Math.min(frameCount - 1, Math.floor(animationTarget.frame));
      const img = imagesRef.current[frameIndex];
      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    const scrollDistance = frameCount * 30; // Total scroll distance

    // Main timeline pinned to container
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: 0.2,
        pin: true,
      }
    });

    // 1. Scrub frames (0 to 100% of the timeline)
    tl.to(animationTarget, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render,
    }, 0);

    // 2. Text 1 fades out between 10% and 30% of the scroll
    tl.to(text1Ref.current, {
      opacity: 0,
      y: -50,
      ease: "power2.inOut",
      duration: (frameCount - 1) * 0.2
    }, (frameCount - 1) * 0.1);

    // 3. Text 2 fades in between 70% and 90% of the scroll
    tl.fromTo(text2Ref.current, {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      ease: "power2.inOut",
      duration: (frameCount - 1) * 0.2
    }, (frameCount - 1) * 0.7);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [frameCount, frameBaseUrl]);

  return (
    <section className={styles.container} ref={containerRef}>
      <canvas ref={canvasRef} className={styles.canvas}></canvas>
      
      {/* Overlays */}
      <div className={styles.textOverlay}>
        <div ref={text1Ref} className={styles.textBlock}>
          <p className="signature-label">Sealed for stability</p>
          <h1 className="title" style={{ margin: "1rem 0" }}>
            Marselus <span className="text-italic">Pharmaceuticals</span>
          </h1>
        </div>
        
        <div ref={text2Ref} className={`${styles.textBlock} ${styles.absoluteCenter}`}>
          <p className="signature-label" style={{ color: "var(--color-accent-gold)" }}>Targeted Delivery</p>
          <h1 className="title" style={{ margin: "1rem 0" }}>
            Precision <span className="text-italic">Release</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
