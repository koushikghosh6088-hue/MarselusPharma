/* ===================================================
   MARSELUS PHARMACEUTICALS — HERO SCROLL ANIMATION
   Uses preloaded 210 frame images for buttery scrolling
   Ultra-smooth lerp inertia + dynamic HUD telemetry scroll reactivity
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

  // Draw 3D capsule centered vertically across all viewports
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

    // Centered 0.85 height scaling for rich presence and zero blank gaps
    const maxDrawHeight = canvasHeight * 0.85;
    const maxDrawWidth = canvasWidth * 0.85;

    let drawWidth = maxDrawHeight * imgRatio;
    let drawHeight = maxDrawHeight;

    if (drawWidth > maxDrawWidth) {
      drawWidth = maxDrawWidth;
      drawHeight = drawWidth / imgRatio;
    }

    // Center perfectly in viewport
    const drawX = (canvasWidth - drawWidth) / 2;
    const drawY = (canvasHeight - drawHeight) / 2;

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }

  // Dynamic HUD Telemetry animation loop reactively driven by scroll progress
  function updateTextOverlays(progress) {
    const hudCards = document.querySelectorAll('.hero-hud-card');
    const orb1 = document.querySelector('.hero-glow-orb--1');
    const orb2 = document.querySelector('.hero-glow-orb--2');
    const progressFill = document.querySelector('.hud-progress-fill');
    const isMobile = window.innerWidth < 768;

    // 1. Dynamic background orb parallax shift as user scrolls 3D video
    if (orb1) {
      orb1.style.transform = `translate(${progress * 50}px, ${progress * -30}px) scale(${1 + progress * 0.15})`;
    }
    if (orb2) {
      orb2.style.transform = `translate(${progress * -40}px, ${progress * 25}px) scale(${1 - progress * 0.12})`;
    }

    // 2. Dynamic mucosal absorption telemetry counter in Widget 3
    if (progressFill) {
      const absorptionPercentage = Math.min(99.4, Math.max(30, progress * 100)).toFixed(1);
      progressFill.style.width = `${absorptionPercentage}%`;
      const titleElem = document.querySelector('.hero-hud-card--3 .hud-title');
      if (titleElem) {
        titleElem.textContent = `${absorptionPercentage}% Mucosal Absorption`;
      }
    }

    // 3. Parallax float and dynamic illumination for HUD cards
    if (hudCards.length) {
      hudCards.forEach((card, idx) => {
        const floatY = Math.sin(progress * Math.PI * 2 + idx) * (isMobile ? 5 : 12);
        const floatX = Math.cos(progress * Math.PI * 1.5 + idx) * (isMobile ? 3 : 8);
        const scale = 1 + Math.sin(progress * Math.PI + idx * 0.5) * 0.02;

        card.style.transform = `translate3d(${floatX}px, ${floatY}px, 0) scale(${scale})`;
      });
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

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Start rendering tick loop
    requestAnimationFrame(tick);
  });
}
