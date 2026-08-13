/* ===================================================
   MARSELUS PHARMACEUTICALS — TABS
   ARIA-compliant tab pattern for UV 60K and others
   =================================================== */

export function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    const tabs = tabGroup.querySelectorAll('.tabs__tab');
    const panels = tabGroup.querySelectorAll('.tabs__panel');

    if (!tabs.length || !panels.length) return;

    tabs.forEach((tab, index) => {
      // Set ARIA attributes
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', tab.classList.contains('active') ? 'true' : 'false');
      tab.setAttribute('tabindex', tab.classList.contains('active') ? '0' : '-1');

      tab.addEventListener('click', () => {
        activateTab(tabs, panels, index);
      });

      tab.addEventListener('keydown', (e) => {
        let newIndex;
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          newIndex = (index + 1) % tabs.length;
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          newIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (e.key === 'Home') {
          e.preventDefault();
          newIndex = 0;
        } else if (e.key === 'End') {
          e.preventDefault();
          newIndex = tabs.length - 1;
        }

        if (newIndex !== undefined) {
          activateTab(tabs, panels, newIndex);
          tabs[newIndex].focus();
        }
      });
    });

    panels.forEach(panel => {
      panel.setAttribute('role', 'tabpanel');
    });
  });
}

function activateTab(tabs, panels, activeIndex) {
  tabs.forEach((tab, i) => {
    const isActive = i === activeIndex;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    tab.setAttribute('tabindex', isActive ? '0' : '-1');
  });

  panels.forEach((panel, i) => {
    panel.classList.toggle('active', i === activeIndex);
  });
}
