/* ===================================================
   MARSELUS PHARMACEUTICALS — MAIN ENTRY
   Initializes all shared modules
   =================================================== */

import { initNavigation } from './navigation.js';
import { initScrollAnimations, initCounters } from './scroll-animations.js';
import { initTabs } from './tabs.js';
import { initForms } from './forms.js';
import { initHeroScrollAnimation } from './hero-animation.js';

// Initialize mobile CTA bar
function initMobileCTA() {
  const mobileCTA = document.querySelector('.mobile-cta');
  if (!mobileCTA) return;

  let shown = false;
  window.addEventListener('scroll', () => {
    if (!shown && window.scrollY > 200) {
      mobileCTA.classList.add('visible');
      shown = true;
    }
  }, { passive: true });
}

export function initAll() {
  initNavigation();
  initScrollAnimations();
  initCounters();
  initTabs();
  initForms();
  initMobileCTA();
  initHeroScrollAnimation();
}
