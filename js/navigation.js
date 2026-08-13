/* ===================================================
   MARSELUS PHARMACEUTICALS — NAVIGATION
   Sticky header, mobile menu, dropdown
   =================================================== */

import { debounce } from './utils.js';

export function initNavigation() {
  const header = document.querySelector('.nav-header');
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileOverlay = document.querySelector('.nav-mobile-overlay');
  const mobileDrawer = document.querySelector('.nav-mobile-drawer');
  const dropdowns = document.querySelectorAll('.nav-dropdown');

  if (!header) return;

  // Scroll-based header styling
  let lastScroll = 0;
  const onScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Initial check

  // Mobile menu
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.contains('active');
      toggleMobileMenu(!isOpen);
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', () => {
      toggleMobileMenu(false);
    });
  }

  function toggleMobileMenu(open) {
    if (hamburger) hamburger.classList.toggle('active', open);
    if (mobileOverlay) mobileOverlay.classList.toggle('active', open);
    if (mobileDrawer) mobileDrawer.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  // Close mobile menu on link click
  if (mobileDrawer) {
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggleMobileMenu(false);
      });
    });
  }

  // Keyboard accessibility for dropdowns
  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.nav-link');
    const menu = dropdown.querySelector('.nav-dropdown-menu');

    if (trigger && menu) {
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          dropdown.classList.toggle('open');
        }
      });

      // Close on Escape
      menu.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          dropdown.classList.remove('open');
          trigger.focus();
        }
      });

      // Close when clicking outside
      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('open');
        }
      });
    }
  });

  // Close mobile menu on resize to desktop
  window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 900) {
      toggleMobileMenu(false);
    }
  }, 150));

  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}
