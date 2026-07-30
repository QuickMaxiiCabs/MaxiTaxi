const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 1;

function initLenis() {
  if (isTouchDevice || typeof Lenis === 'undefined') return;

  const lenis = new Lenis({
    duration: 1.35,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    direction: 'vertical',
    gestureDirection: 'vertical',
    smoothTouch: false,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

function initGSAP() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.section, .service-card, .gallery-item, .trust-item, .area-pill').forEach((element) => {
    gsap.fromTo(element, {
      opacity: 0,
      y: 40,
      scale: 0.98,
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      ease: 'power3.out',
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      }
    });
  });

  gsap.fromTo('.hero-image img', {
    scale: 1.08,
    y: 0,
  }, {
    scale: 1,
    y: -35,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });

  gsap.to('.hero-image', {
    rotationY: 4,
    rotationX: 2,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });
}

function initCursor() {
  if (isTouchDevice) return;

  const dot = document.querySelector('.custom-cursor-dot');
  const ring = document.querySelector('.custom-cursor-ring');
  const elements = document.querySelectorAll('a, button, .btn, .gallery-item, .service-card, .area-pill');

  if (!dot || !ring) return;

  document.documentElement.classList.add('custom-cursor-enabled');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let dotScale = 1;
  let ringScale = 1;

  const render = () => {
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(${dotScale})`;
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${ringScale})`;
    requestAnimationFrame(render);
  };

  render();

  window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  elements.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      dotScale = 1.3;
      ringScale = 1.2;
      dot.classList.add('cursor-active');
      ring.classList.add('cursor-active');
    });
    item.addEventListener('mouseleave', () => {
      dotScale = 1;
      ringScale = 1;
      dot.classList.remove('cursor-active');
      ring.classList.remove('cursor-active');
    });
  });

  const hasGsap = typeof gsap !== 'undefined';

  if (hasGsap) {
    document.querySelectorAll('.hero-image').forEach((card) => {
      card.addEventListener('mousemove', (event) => {
        const bounds = card.getBoundingClientRect();
        const relX = (event.clientX - bounds.left) / bounds.width;
        const relY = (event.clientY - bounds.top) / bounds.height;
        gsap.to(card, {
          rotationY: (relX - 0.5) * 12,
          rotationX: (0.5 - relY) * 10,
          duration: 0.4,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.6,
          ease: 'power3.out',
        });
      });
    });
  }
}

function initAccessibility() {
  document.querySelectorAll('a, button').forEach((link) => {
    link.addEventListener('focus', () => {
      link.style.outline = '2px solid rgba(249,178,51,0.85)';
      link.style.outlineOffset = '3px';
    });
    link.addEventListener('blur', () => {
      link.style.outline = 'none';
    });
  });
}

function initPage() {
  initLenis();
  initGSAP();
  initCursor();
  initAccessibility();
}

function initReviewToggle() {
  const button = document.getElementById('reviewsToggle');
  const extra = document.getElementById('extraReviews');

  if (!button || !extra) return;

  button.addEventListener('click', () => {
    const isHidden = extra.classList.toggle('hidden');
    button.textContent = isHidden ? 'Show more reviews' : 'Show fewer reviews';
    button.setAttribute('aria-expanded', String(!isHidden));
  });
}

function openActionLink(url) {
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  anchor.style.display = 'none';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

function initWheel(wheelId, hiddenInputId) {
  const wheel = document.getElementById(wheelId);
  const hiddenInput = document.getElementById(hiddenInputId);
  if (!wheel || !hiddenInput) return;

  const items = Array.from(wheel.querySelectorAll('.time-wheel-item'));
  const setActive = (item) => {
    items.forEach((button) => button.classList.toggle('active', button === item));
    hiddenInput.value = item.dataset.value || hiddenInput.value;
    item.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };

  items.forEach((item) => {
    item.addEventListener('click', () => setActive(item));
  });

  const initialActive = items.find((item) => item.classList.contains('active')) || items[0];
  if (initialActive) {
    setActive(initialActive);
  }

  wheel.addEventListener('wheel', (event) => {
    event.preventDefault();
    wheel.scrollBy({ top: event.deltaY, behavior: 'smooth' });
  });

  wheel.addEventListener('keydown', (event) => {
    const currentIndex = items.findIndex((item) => item.classList.contains('active'));
    if (currentIndex === -1) return;
    if (event.key === 'ArrowDown' && currentIndex < items.length - 1) {
      setActive(items[currentIndex + 1]);
      event.preventDefault();
    } else if (event.key === 'ArrowUp' && currentIndex > 0) {
      setActive(items[currentIndex - 1]);
      event.preventDefault();
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initPage();
  initReviewToggle();
  initWheel('timeWheel', 'booking-time');
  initWheel('periodWheel', 'booking-period');
});
