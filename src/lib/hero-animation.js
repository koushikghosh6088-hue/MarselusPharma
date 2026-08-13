/* ===================================================
   MARSELUS PHARMACEUTICALS — HERO SCROLL ANIMATION
   Uses preloaded 210 frame images for buttery scrolling
   High DPI crisp canvas + smooth overlapping text slides
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

  // Format frame filenames
  function getFramePath(index) {
    return `/frames/ezgif-frame-${String(index).padStart(3, '0')}.jpg`;
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

  // High DPI Retina Canvas scaling for ultra-crisp quality
  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    drawFrame(Math.round(currentFrame));
  }

  // Draw scaled cover/contain image with high smoothing
  function drawFrame(index) {
    const img = images[index];
    if (!img) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const imgWidth = img.naturalWidth || 1920;
    const imgHeight = img.naturalHeight || 1080;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, drawX, drawY;

    if (canvasRatio > imgRatio) {
      // Desktop
      drawHeight = canvasHeight * 0.88;
      drawWidth = drawHeight * imgRatio;
      drawX = (canvasWidth - drawWidth) / 2;
      drawY = (canvasHeight - drawHeight) / 2;
    } else {
      // Mobile
      drawWidth = canvasWidth * 0.95;
      drawHeight = drawWidth / imgRatio;
      drawX = (canvasWidth - drawWidth) / 2;
      drawY = (canvasHeight - drawHeight) * 0.65;
    }

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }

  // Overlapping smooth opacity fade for text overlays
  function updateTextOverlays(progress) {
    const slides = document.querySelectorAll('.scroll-slide');
    if (!slides.length) return;

    // Slide ranges (with smooth cross-fading overlaps)
    const ranges = [
      { start: 0.00, end: 0.25, fadeInStart: 0.00, fadeInEnd: 0.00, fadeOutStart: 0.18, fadeOutEnd: 0.25 },
      { start: 0.20, end: 0.50, fadeInStart: 0.20, fadeInEnd: 0.27, fadeOutStart: 0.43, fadeOutEnd: 0.50 },
      { start: 0.45, end: 0.75, fadeInStart: 0.45, fadeInEnd: 0.52, fadeOutStart: 0.68, fadeOutEnd: 0.75 },
      { start: 0.70, end: 1.00, fadeInStart: 0.70, fadeInEnd: 0.78, fadeOutStart: 0.98, fadeOutEnd: 1.00 }
    ];

    slides.forEach((slide, idx) => {
      const range = ranges[idx];
      if (!range) return;

      if (progress >= range.start && progress <= range.end) {
        slide.classList.add('active');

        let opacity = 1;
        // Fade in
        if (progress < range.fadeInEnd) {
          opacity = (progress - range.fadeInStart) / (range.fadeInEnd - range.fadeInStart);
        }
        // Fade out
        else if (progress > range.fadeOutStart) {
          opacity = 1 - (progress - range.fadeOutStart) / (range.fadeOutEnd - range.fadeOutStart);
        }

        opacity = Math.max(0, Math.min(1, opacity));
        slide.style.opacity = opacity;
        slide.style.pointerEvents = opacity > 0.3 ? 'auto' : 'none';
      } else {
        slide.classList.remove('active');
        slide.style.opacity = 0;
        slide.style.pointerEvents = 'none';
      }
    });
  }

  // Animation frame scrubbing loop
  function tick() {
    const rect = container.getBoundingClientRect();
    const containerHeight = rect.height;
    const containerTop = rect.top;

    const heroScrollOffset = -containerTop;
    const maxHeroScroll = containerHeight - window.innerHeight;

    let heroProgress = heroScrollOffset / maxHeroScroll;
    heroProgress = Math.max(0, Math.min(1, heroProgress));

    targetFrame = heroProgress * (frameCount - 1);

    // Smooth inertia interpolation
    currentFrame += (targetFrame - currentFrame) * 0.14;

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
