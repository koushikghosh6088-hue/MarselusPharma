/* ===================================================
   MARSELUS PHARMACEUTICALS — HERO SCROLL ANIMATION
   Uses preloaded 210 frame images for buttery scrolling
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

  // Resize canvas to cover viewport
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawFrame(Math.round(currentFrame));
  }

  // Draw scaled cover/contain image responsively
  function drawFrame(index) {
    const img = images[index];
    if (!img) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const imgWidth = img.naturalWidth || 1920;
    const imgHeight = img.naturalHeight || 1080;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, drawX, drawY;

    // Use contain logic with safety boundaries to fit portrait and landscape displays perfectly
    if (canvasRatio > imgRatio) {
      // Landscape (Desktops/Tablets)
      drawHeight = canvasHeight * 0.82;
      drawWidth = drawHeight * imgRatio;
      drawX = (canvasWidth - drawWidth) / 2;
      drawY = (canvasHeight - drawHeight) / 2;
    } else {
      // Portrait (Mobile)
      drawWidth = canvasWidth * 0.95;
      drawHeight = drawWidth / imgRatio;
      drawX = (canvasWidth - drawWidth) / 2;
      // Shift capsule down slightly on mobile to prevent overlapping with text slides at the top
      drawY = (canvasHeight - drawHeight) * 0.65;
    }

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }

  // Fade control for text overlays
  function updateTextOverlays(progress) {
    const slides = document.querySelectorAll('.scroll-slide');
    if (!slides.length) return;

    let activeIndex = -1;

    // Define slide active ranges
    if (progress >= 0 && progress < 0.22) {
      activeIndex = 0;
    } else if (progress >= 0.22 && progress < 0.48) {
      activeIndex = 1;
    } else if (progress >= 0.48 && progress < 0.74) {
      activeIndex = 2;
    } else if (progress >= 0.74 && progress <= 1.0) {
      activeIndex = 3;
    }

    slides.forEach((slide, idx) => {
      if (idx === activeIndex) {
        slide.classList.add('active');
        
        // Calculate fine-grained opacity inside slide based on progress
        let slideOpacity = 1;
        if (idx === 0) {
          if (progress > 0.12) {
            slideOpacity = 1 - (progress - 0.12) / 0.1; // fades out
          }
        } else if (idx === 1) {
          if (progress < 0.28) {
            slideOpacity = (progress - 0.22) / 0.06; // fades in
          } else if (progress > 0.42) {
            slideOpacity = 1 - (progress - 0.42) / 0.06; // fades out
          }
        } else if (idx === 2) {
          if (progress < 0.54) {
            slideOpacity = (progress - 0.48) / 0.06; // fades in
          } else if (progress > 0.68) {
            slideOpacity = 1 - (progress - 0.68) / 0.06; // fades out
          }
        } else if (idx === 3) {
          if (progress < 0.82) {
            slideOpacity = (progress - 0.74) / 0.08; // fades in
          }
        }
        
        slide.style.opacity = Math.max(0, Math.min(1, slideOpacity));
      } else {
        slide.classList.remove('active');
        slide.style.opacity = 0;
      }
    });
  }

  // Animation frame scrubbing loop
  function tick() {
    // Hero progress for text overlays
    const rect = container.getBoundingClientRect();
    const containerHeight = rect.height;
    const containerTop = rect.top;

    const heroScrollOffset = -containerTop;
    const maxHeroScroll = containerHeight - window.innerHeight;

    let heroProgress = heroScrollOffset / maxHeroScroll;
    heroProgress = Math.max(0, Math.min(1, heroProgress));

    targetFrame = heroProgress * (frameCount - 1);

    // Interpolation (lerp) for smooth scrubbing inertia
    currentFrame += (targetFrame - currentFrame) * 0.12;

    drawFrame(Math.round(currentFrame));
    updateTextOverlays(heroProgress);

    requestAnimationFrame(tick);
  }

  // Initialize
  preloadImages().then(() => {
    // Hide loading screen and unlock page scrolling
    if (loader) {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Start loop
    requestAnimationFrame(tick);
  });
}
