/* ===================================================
   MARSELUS PHARMACEUTICALS — HERO SCROLL ANIMATION
   Uses preloaded 210 frame images for buttery scrolling
   Ultra-crisp 4K unzoomed framing for PC & mobile
   =================================================== */

export function initHeroScrollAnimation() {
  const container = document.getElementById('hero-scroll-container');
  const canvas = document.getElementById('hero-canvas');
  if (!container || !canvas) return;

  const ctx = canvas.getContext('2d');
  const loader = document.getElementById('loader-screen');
  const loaderBar = document.querySelector('.loader-bar-fill');
  const loaderPercent = document.getElementById('loader-percent');

  const frameCount = 210;
  const images = [];
  let loadedCount = 0;
  let sampledBgColor = '#f0f2f5';

  // Format frame filenames
  function getFramePath(index) {
    return `/frames/ezgif-frame-${String(index).padStart(3, '0')}.jpg`;
  }

  // Sample exact background color from top corner of frame 0
  function sampleFrameColor(img) {
    try {
      const sampleCanvas = document.createElement('canvas');
      sampleCanvas.width = 1;
      sampleCanvas.height = 1;
      const sampleCtx = sampleCanvas.getContext('2d');
      sampleCtx.drawImage(img, 10, 10, 1, 1, 0, 0, 1, 1);
      const [r, g, b] = sampleCtx.getImageData(0, 0, 1, 1).data;
      sampledBgColor = `rgb(${r}, ${g}, ${b})`;

      // Apply sampled background color to hero container and sticky elements
      container.style.backgroundColor = sampledBgColor;
      const sticky = document.querySelector('.hero-scroll-sticky');
      if (sticky) sticky.style.backgroundColor = sampledBgColor;
    } catch (e) {
      sampledBgColor = '#f0f2f5';
    }
  }

  // Preload all 210 images
  function preloadImages() {
    return new Promise((resolve) => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = getFramePath(i);
        img.onload = () => {
          loadedCount++;
          const percent = Math.round((loadedCount / frameCount) * 100);
          if (loaderPercent) loaderPercent.textContent = percent + '%';
          if (loaderBar) loaderBar.style.width = percent + '%';

          if (i === 1) {
            sampleFrameColor(img);
          }

          if (loadedCount === frameCount) {
            resolve();
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === frameCount) {
            resolve();
          }
        };
        images.push(img);
      }
    });
  }

  let currentFrame = 0;
  let targetFrame = 0;

  // High DPI Retina Canvas scaling for 4K crispness
  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    drawFrame(Math.round(currentFrame));
  }

  // Draw 3D capsule frame un-stretched and crisp
  function drawFrame(index) {
    const img = images[index];
    if (!img) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Fill canvas with exact sampled frame background color
    ctx.fillStyle = sampledBgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const imgWidth = img.naturalWidth || 1920;
    const imgHeight = img.naturalHeight || 1080;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const imgRatio = imgWidth / imgHeight;
    const isMobile = window.innerWidth < 768;

    let drawWidth, drawHeight, drawX, drawY;

    if (isMobile) {
      // Mobile: Centered 0.80 height scale
      const maxDrawHeight = canvasHeight * 0.80;
      const maxDrawWidth = canvasWidth * 0.88;

      drawHeight = maxDrawHeight;
      drawWidth = drawHeight * imgRatio;

      if (drawWidth > maxDrawWidth) {
        drawWidth = maxDrawWidth;
        drawHeight = drawWidth / imgRatio;
      }

      drawX = (canvasWidth - drawWidth) / 2;
      drawY = (canvasHeight - drawHeight) / 2;
    } else {
      // PC Desktop: Ultra-crisp un-stretched 0.54 scale, positioned in center-right
      const maxDrawHeight = canvasHeight * 0.54;
      const maxDrawWidth = canvasWidth * 0.44;

      drawHeight = maxDrawHeight;
      drawWidth = drawHeight * imgRatio;

      if (drawWidth > maxDrawWidth) {
        drawWidth = maxDrawWidth;
        drawHeight = drawWidth / imgRatio;
      }

      // Position in center-right area so left headline never overlaps
      drawX = canvasWidth * 0.36;
      drawY = (canvasHeight - drawHeight) / 2 + 10;
    }

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }

  // Dynamic Sequential Popup Slide activation loop reactively driven by scroll progress
  function updateTextOverlays(progress) {
    const orb1 = document.querySelector('.hero-glow-orb--1');
    const orb2 = document.querySelector('.hero-glow-orb--2');

    // 1. Dynamic background orb parallax shift as user scrolls 3D video
    if (orb1) {
      orb1.style.transform = `translate(${progress * 40}px, ${progress * -25}px) scale(${1 + progress * 0.12})`;
    }
    if (orb2) {
      orb2.style.transform = `translate(${progress * -30}px, ${progress * 20}px) scale(${1 - progress * 0.1})`;
    }

    // 2. Sequential Popup Slide Card Activation (One by one popup as user scrolls)
    let activeIndex = 1;
    if (progress < 0.25) activeIndex = 1;
    else if (progress < 0.50) activeIndex = 2;
    else if (progress < 0.75) activeIndex = 3;
    else activeIndex = 4;

    for (let i = 1; i <= 4; i++) {
      const popupCard = document.getElementById(`hero-popup-${i}`);
      if (popupCard) {
        if (i === activeIndex) {
          popupCard.classList.add('popup-active');
        } else {
          popupCard.classList.remove('popup-active');
        }
      }
    }

    // 3. Update active slide intra-progress fill bar (0% to 100%)
    const slideRange = 0.25;
    const slideProgress = (progress % slideRange) / slideRange;
    for (let i = 1; i <= 4; i++) {
      const fillBar = document.getElementById(`popup-fill-${i}`);
      if (fillBar) {
        if (i === activeIndex) {
          fillBar.style.width = `${Math.min(100, Math.max(5, slideProgress * 100))}%`;
        } else if (i < activeIndex) {
          fillBar.style.width = '100%';
        } else {
          fillBar.style.width = '0%';
        }
      }
    }
  }

  // Animation frame scrubbing loop with silky 60fps lerp inertia
  function tick() {
    const rect = container.getBoundingClientRect();
    const containerHeight = rect.height;
    const containerTop = rect.top;

    const heroScrollOffset = -containerTop;
    const maxHeroScroll = containerHeight - window.innerHeight;

    let heroProgress = heroScrollOffset / maxHeroScroll;
    heroProgress = Math.max(0, Math.min(1, heroProgress));

    targetFrame = heroProgress * (frameCount - 1);

    // Silky smooth inertia interpolation (0.09 factor)
    currentFrame += (targetFrame - currentFrame) * 0.09;

    drawFrame(Math.round(currentFrame));
    updateTextOverlays(heroProgress);

    requestAnimationFrame(tick);
  }

  // Initialize
  preloadImages().then(() => {
    // Hide loading screen
    if (loader) {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }

    // Add manual tap-to-flip click listeners to HUD cards
    document.querySelectorAll('.hero-hud-card').forEach((card) => {
      card.addEventListener('click', () => {
        card.classList.toggle('hero-hud-card--open');
        card.classList.toggle('hero-hud-card--closed');
      });
    });

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Start rendering tick loop
    requestAnimationFrame(tick);
  });
}
