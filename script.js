/* ============================================================
   GREEN ACTION HUB — script.js
   Functions:
   1. Custom cursor
   2. Ripple click effect
   3. Nav scroll shadow
   4. Scroll reveal (.reveal → .visible)
   5. Counter animation
   6. Floating leaf particles
   7. Subscribe button handler
============================================================ */
 
/* ── 1. CUSTOM CURSOR ─────────────────────────────────────── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
 
let mx = 0, my = 0;   // current mouse position
let rx = 0, ry = 0;   // ring's smoothed position
 
// Track the real mouse position every frame
document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});
 
// Animate the cursor on every frame using requestAnimationFrame
function animateCursor() {
  // Dot snaps directly to mouse
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
 
  // Ring lags behind using linear interpolation (easing)
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
 
  requestAnimationFrame(animateCursor);
}
animateCursor();
 
// Scale cursor up when hovering interactive elements
document.querySelectorAll('a, button, .feature-card, .action-card, .stat-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(2)';
    ring.style.opacity = '1';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    ring.style.opacity = '0.5';
  });
});
 
 
/* ── 2. RIPPLE CLICK EFFECT ───────────────────────────────── */
document.addEventListener('click', e => {
  const el = e.target.closest('a, button');
  if (!el) return;
 
  const r = document.createElement('span');
  r.className = 'ripple';
 
  const size = Math.max(el.offsetWidth, el.offsetHeight);
  const rect = el.getBoundingClientRect();
 
  r.style.cssText = `
    width:  ${size}px;
    height: ${size}px;
    left:   ${e.clientX - rect.left}px;
    top:    ${e.clientY - rect.top}px;
  `;
 
  el.style.position = 'relative';
  el.style.overflow = 'hidden';
  el.appendChild(r);
 
  // Remove span after animation finishes
  setTimeout(() => r.remove(), 700);
});
 
 
/* ── 3. NAV SCROLL SHADOW ─────────────────────────────────── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  // Add .scrolled class when user has scrolled more than 40px
  nav.classList.toggle('scrolled', window.scrollY > 40);
});
 
 
/* ── 4. SCROLL REVEAL ─────────────────────────────────────── */
// Every element with class="reveal" starts invisible (via CSS)
// and becomes visible when it enters the viewport
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });
 
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
 
 
/* ── 5. COUNTER ANIMATION ─────────────────────────────────── */
function animateCounter(el) {
  const target    = parseInt(el.dataset.target);  // read data-target="12000"
  const duration  = 1800;                          // ms
  const startTime = performance.now();
 
  function update(now) {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
 
    // Cubic ease-out: starts fast, slows near the end
    const eased = 1 - Math.pow(1 - progress, 3);
 
    el.textContent = Math.round(eased * target).toLocaleString();
 
    if (progress < 1) requestAnimationFrame(update);
  }
 
  requestAnimationFrame(update);
}
 
// Only start counting when the number scrolls into view
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target); // run only once per element
    }
  });
}, { threshold: 0.5 });
 
document.querySelectorAll('.stat-num').forEach(el => counterObserver.observe(el));
 
 
/* ── 6. FLOATING LEAF PARTICLES ───────────────────────────── */
function createLeaves() {
  const colors = ['#5ab033', '#3dbfa8', '#8dc63f', '#2d7a4f'];
  const hero   = document.querySelector('.hero');
 
  for (let i = 0; i < 12; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'leaf-particle';
 
    const size = Math.random() * 12 + 6;  // random size 6–18px
 
    leaf.style.cssText = `
      left:               ${Math.random() * 100}%;
      width:              ${size}px;
      height:             ${size * 1.4}px;
      background:         ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius:      50% 0 50% 0;
      animation-duration: ${Math.random() * 15 + 10}s;
      animation-delay:    ${Math.random() * 10}s;
      opacity:            0;
    `;
 
    hero.appendChild(leaf);
  }
}
createLeaves();
 
 
/* ── 7. SUBSCRIBE HANDLER ─────────────────────────────────── */
function handleSubscribe(btn) {
  btn.textContent = '✓ Welcome to the Green Community!';
  btn.style.background = 'linear-gradient(135deg, #2d7a4f, #5ab033)';
  btn.disabled = true;
}