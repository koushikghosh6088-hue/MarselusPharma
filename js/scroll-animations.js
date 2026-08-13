/* ===================================================
   MARSELUS PHARMACEUTICALS — SCROLL ANIMATIONS
   IntersectionObserver-based reveal system
   =================================================== */

import { prefersReducedMotion } from './utils.js';

export function initScrollAnimations() {
  if (prefersReducedMotion()) {
    // Show everything immediately if user prefers reduced motion
    document.querySelectorAll('.reveal, .reveal--left, .reveal--right, .reveal--scale').forEach(el => {
      el.classList.add('revealed');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  // Observe all reveal elements
  document.querySelectorAll('.reveal, .reveal--left, .reveal--right, .reveal--scale').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Initialize counter animations for stats
 */
export function initCounters() {
  if (prefersReducedMotion()) {
    return; // Skip animation, show final values immediately
  }

  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          const prefix = el.dataset.prefix || '';
          const duration = 1500;
          const startTime = performance.now();

          function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out quad
            const eased = 1 - (1 - progress) * (1 - progress);
            const current = Math.round(eased * target);
            el.textContent = prefix + current.toLocaleString() + suffix;
            if (progress < 1) {
              requestAnimationFrame(update);
            }
          }

          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => observer.observe(el));
}
