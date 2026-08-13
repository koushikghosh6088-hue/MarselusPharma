"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "./TherapyCards.module.css";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const therapies = [
  {
    id: "artemes",
    name: "ARTEMES",
    area: "Gastroenterology",
    description: "Targeted release formulas for digestive health and balance.",
    colorVar: "var(--color-product-artemes)",
  },
  {
    id: "saranya",
    name: "SARANYA",
    area: "Women's Health",
    description: "Comprehensive care supporting wellness at every life stage.",
    colorVar: "var(--color-product-saranya)",
  },
  {
    id: "immunomars",
    name: "IMMUNOMARS",
    area: "Clinical Nutrition",
    description: "Advanced nutritional support to rebuild, protect, and recover.",
    colorVar: "var(--color-product-immunomars)",
  },
  {
    id: "uv60k",
    name: "UV 60K",
    area: "Multi-indication",
    description: "High-potency essentials with precision delivery mechanisms.",
    colorVar: "var(--color-product-uv60k)",
  }
];

export default function TherapyCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion || !containerRef.current) return;

    gsap.fromTo(
      cardsRef.current,
      { 
        y: 60, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // trigger when container is 80% down the viewport
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className={styles.section} ref={containerRef} id="therapy">
      <div className={styles.header}>
        <p className="signature-label">Therapeutic Focus</p>
        <h2>Precision Across Disciplines</h2>
      </div>
      
      <div className={styles.grid}>
        {therapies.map((therapy, index) => (
          <Link 
            href={`#${therapy.id}`} 
            key={therapy.id}
            className={styles.card}
            ref={(el) => { cardsRef.current[index] = el }}
            style={{ "--hover-tint": therapy.colorVar } as React.CSSProperties}
          >
            <div className={styles.cardContent}>
              <p className={styles.area}>{therapy.area}</p>
              <h3>{therapy.name}</h3>
              <p className={styles.description}>{therapy.description}</p>
            </div>
            <div className={styles.cardIcon}>
              →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
