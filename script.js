/* ============================================================
   GREEN ACTION HUB — style.css
   Sections:
   1. CSS Variables
   2. Reset & Base
   3. Custom Cursor
   4. Navigation
   5. Hero
   6. Stats
   7. Features
   8. Actions
   9. Ticker
   10. Newsletter
   11. Footer
   12. Animations & Utilities
   13. Responsive (mobile)
============================================================ */

/* ── 1. CSS VARIABLES ─────────────────────────────────────── */
:root {
    --teal: #3dbfa8;
    --green-mid: #5ab033;
    --green-light: #8dc63f;
    --green-dark: #2d7a4f;
    --cream: #f5f7f0;
    --white: #ffffff;
    --charcoal: #1a2e1f;
    --gray: #6b7c6e;
    --leaf-shadow: 0 20px 60px rgba(45,122,79,0.18);
  }
  
  /* ── 2. RESET & BASE ──────────────────────────────────────── */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  
  html { scroll-behavior: smooth; }
  
  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--charcoal);
    overflow-x: hidden;
    cursor: none;
  }
  
  /* ── 3. CUSTOM CURSOR ─────────────────────────────────────── */
  .cursor {
    width: 12px; height: 12px;
    background: var(--green-mid);
    border-radius: 50%;
    position: fixed; top: 0; left: 0;
    pointer-events: none; z-index: 9999;
    transform: translate(-50%,-50%);
    transition: transform 0.1s ease, width 0.3s, height 0.3s, background 0.3s;
    mix-blend-mode: multiply;
  }
  .cursor-ring {
    width: 36px; height: 36px;
    border: 1.5px solid var(--green-mid);
    border-radius: 50%;
    position: fixed; top: 0; left: 0;
    pointer-events: none; z-index: 9998;
    transform: translate(-50%,-50%);
    transition: transform 0.18s ease, opacity 0.3s;
    opacity: 0.5;
  }
  
  /* ── 4. NAVIGATION ────────────────────────────────────────── */
  nav {
    position: fixed; top: 0; width: 100%; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.2rem 4rem;
    background: rgba(245,247,240,0.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(93,176,51,0.12);
    transition: box-shadow 0.3s;
  }
  nav.scrolled { box-shadow: 0 4px 30px rgba(45,122,79,0.10); }
  
  .nav-logo {
    display: flex; align-items: center; gap: 10px;
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem; font-weight: 700;
    color: var(--green-dark);
    text-decoration: none;
  }
  .nav-logo-dot {
    width: 28px; height: 28px;
    background: linear-gradient(135deg, var(--teal), var(--green-mid));
    border-radius: 50%;
    flex-shrink: 0;
  }
  .nav-links { display: flex; gap: 2.5rem; list-style: none; }
  .nav-links a {
    text-decoration: none; color: var(--gray);
    font-size: 0.875rem; font-weight: 500; letter-spacing: 0.02em;
    position: relative; transition: color 0.3s;
  }
  .nav-links a::after {
    content: '';
    position: absolute; bottom: -3px; left: 0;
    width: 0; height: 1.5px; background: var(--green-mid);
    transition: width 0.3s ease;
  }
  .nav-links a:hover { color: var(--green-dark); }
  .nav-links a:hover::after { width: 100%; }
  .nav-cta {
    background: var(--green-mid); color: white !important;
    padding: 0.5rem 1.4rem; border-radius: 100px;
    transition: background 0.3s, transform 0.2s !important;
  }
  .nav-cta::after { display: none !important; }
  .nav-cta:hover { background: var(--green-dark) !important; transform: translateY(-1px); }
  
  /* ── 5. HERO ──────────────────────────────────────────────── */
  .hero {
    min-height: 100vh;
    display: flex; align-items: center;
    padding: 8rem 4rem 4rem;
    position: relative; overflow: hidden;
  }
  .hero-bg {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 80% 60% at 70% 50%, rgba(61,191,168,0.10) 0%, transparent 70%),
                radial-gradient(ellipse 60% 80% at 20% 80%, rgba(90,176,51,0.08) 0%, transparent 70%);
  }
  .leaf-particle {
    position: absolute;
    opacity: 0;
    animation: floatLeaf linear infinite;
    pointer-events: none;
  }
  @keyframes floatLeaf {
    0%   { transform: translateY(110vh) rotate(0deg); opacity: 0; }
    10%  { opacity: 0.6; }
    90%  { opacity: 0.4; }
    100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
  }
  .hero-content { position: relative; max-width: 620px; z-index: 2; }
  .hero-tag {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(90,176,51,0.10);
    border: 1px solid rgba(90,176,51,0.25);
    padding: 0.35rem 1rem; border-radius: 100px;
    font-size: 0.78rem; font-weight: 500;
    color: var(--green-dark); letter-spacing: 0.05em;
    text-transform: uppercase; margin-bottom: 1.8rem;
    animation: fadeUp 0.8s ease both;
  }
  .hero-tag-dot {
    width: 6px; height: 6px;
    background: var(--green-mid); border-radius: 50%;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%,100% { transform: scale(1); opacity: 1; }
    50%      { transform: scale(1.5); opacity: 0.5; }
  }
  
  h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(3rem, 6vw, 5.5rem);
    font-weight: 900; line-height: 1.05;
    color: var(--charcoal); margin-bottom: 1.5rem;
    animation: fadeUp 0.8s 0.15s ease both;
  }
  h1 em {
    font-style: italic; color: var(--green-mid);
    position: relative; display: inline-block;
  }
  h1 em::after {
    content: '';
    position: absolute; bottom: 4px; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--teal), var(--green-light));
    border-radius: 2px; transform-origin: left;
    animation: underlineGrow 1s 0.8s ease both;
  }
  @keyframes underlineGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
  
  .hero-sub {
    font-size: 1.05rem; line-height: 1.75;
    color: var(--gray); max-width: 480px; margin-bottom: 2.5rem;
    animation: fadeUp 0.8s 0.3s ease both;
  }
  .hero-actions {
    display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;
    animation: fadeUp 0.8s 0.45s ease both;
  }
  
  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: linear-gradient(135deg, var(--green-mid), var(--green-dark));
    color: white; padding: 0.9rem 2rem;
    border-radius: 100px; font-size: 0.9rem; font-weight: 500;
    text-decoration: none; border: none; cursor: none;
    box-shadow: 0 8px 30px rgba(45,122,79,0.3);
    transition: transform 0.25s, box-shadow 0.25s;
    position: relative; overflow: hidden;
  }
  .btn-primary::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, var(--teal), var(--green-mid));
    opacity: 0; transition: opacity 0.3s;
  }
  .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(45,122,79,0.35); }
  .btn-primary:hover::before { opacity: 1; }
  .btn-primary span { position: relative; z-index: 1; }
  
  .btn-secondary {
    display: inline-flex; align-items: center; gap: 8px;
    color: var(--green-dark); font-size: 0.9rem; font-weight: 500;
    text-decoration: none; cursor: none; transition: gap 0.3s;
  }
  .btn-secondary:hover { gap: 14px; }
  
  .hero-visual {
    position: absolute; right: 4rem; top: 50%;
    transform: translateY(-50%);
    width: 420px; height: 420px;
    animation: fadeUp 0.8s 0.6s ease both;
  }
  .hero-ring {
    position: absolute; inset: 0; border-radius: 50%;
    border: 1.5px dashed rgba(90,176,51,0.3);
    animation: spinRing 30s linear infinite;
  }
  .hero-ring-2 {
    position: absolute; inset: 30px; border-radius: 50%;
    border: 1px dashed rgba(61,191,168,0.2);
    animation: spinRing 20s linear infinite reverse;
  }
  @keyframes spinRing { to { transform: rotate(360deg); } }
  
  .hero-circle {
    position: absolute; inset: 60px; border-radius: 50%;
    background: linear-gradient(135deg, rgba(61,191,168,0.08), rgba(90,176,51,0.12));
    border: 1px solid rgba(90,176,51,0.15);
    backdrop-filter: blur(10px);
    display: flex; align-items: center; justify-content: center;
  }
  .hero-logo-img { width: 200px; height: 200px; object-fit: contain; }
  
  /* ── 6. STATS ─────────────────────────────────────────────── */
  .stats {
    padding: 5rem 4rem;
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    background: rgba(90,176,51,0.08);
    border-top: 1px solid rgba(90,176,51,0.12);
    border-bottom: 1px solid rgba(90,176,51,0.12);
  }
  .stat-item {
    padding: 2.5rem 2rem; background: var(--cream);
    text-align: center;
    transition: background 0.3s, transform 0.3s; cursor: none;
  }
  .stat-item:hover { background: white; transform: translateY(-4px); }
  .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 3rem; font-weight: 900;
    color: var(--green-mid); display: block; margin-bottom: 0.4rem;
  }
  .stat-label { font-size: 0.85rem; color: var(--gray); font-weight: 400; }
  
  /* ── 7. FEATURES ──────────────────────────────────────────── */
  .features { padding: 7rem 4rem; }
  .section-header { margin-bottom: 4rem; }
  .section-tag {
    display: inline-block;
    font-size: 0.75rem; font-weight: 500; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--teal); margin-bottom: 1rem;
  }
  h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 900;
    line-height: 1.15; color: var(--charcoal); max-width: 520px;
  }
  h2 span { color: var(--green-mid); }
  
  .features-grid {
    display: grid; grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5px; background: rgba(90,176,51,0.1);
  }
  .feature-card {
    background: var(--cream); padding: 2.8rem 2.5rem;
    position: relative; overflow: hidden;
    cursor: none; transition: background 0.3s;
  }
  .feature-card:hover { background: white; }
  .feature-card::before {
    content: ''; position: absolute; bottom: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--teal), var(--green-light));
    transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease;
  }
  .feature-card:hover::before { transform: scaleX(1); }
  .feature-icon {
    width: 52px; height: 52px; margin-bottom: 1.5rem;
    background: linear-gradient(135deg, rgba(61,191,168,0.12), rgba(90,176,51,0.18));
    border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.4rem; transition: transform 0.3s;
  }
  .feature-card:hover .feature-icon { transform: scale(1.1) rotate(-5deg); }
  .feature-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem; font-weight: 700;
    color: var(--charcoal); margin-bottom: 0.8rem;
  }
  .feature-desc { font-size: 0.88rem; line-height: 1.7; color: var(--gray); }
  
  /* ── 8. ACTIONS ───────────────────────────────────────────── */
  .actions-section { padding: 7rem 4rem; background: white; }
  .actions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 3.5rem; }
  .action-card {
    border-radius: 20px; padding: 2.5rem;
    position: relative; overflow: hidden; cursor: none;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .action-card:hover { transform: translateY(-6px); box-shadow: var(--leaf-shadow); }
  .action-card-1 { background: linear-gradient(135deg, var(--green-dark), #1a4d30); color: white; }
  .action-card-2 { background: linear-gradient(135deg, var(--teal), #2a9d8f); color: white; }
  .action-card-3 { background: var(--cream); border: 1px solid rgba(90,176,51,0.2); }
  .action-card-4 { background: linear-gradient(135deg, var(--green-light), var(--green-mid)); color: white; }
  .action-card-num {
    font-family: 'Playfair Display', serif;
    font-size: 4rem; font-weight: 900; opacity: 0.12;
    position: absolute; top: 1rem; right: 1.5rem; line-height: 1;
  }
  .action-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem; font-weight: 700; margin-bottom: 0.8rem;
  }
  .action-card p { font-size: 0.88rem; line-height: 1.7; opacity: 0.85; }
  .action-card-3 h3 { color: var(--charcoal); }
  .action-card-3 p  { color: var(--gray); opacity: 1; }
  .action-link {
    display: inline-flex; align-items: center; gap: 6px;
    margin-top: 1.5rem; font-size: 0.82rem; font-weight: 500;
    letter-spacing: 0.04em; text-transform: uppercase;
    text-decoration: none; cursor: none; transition: gap 0.3s;
  }
  .action-link:hover { gap: 12px; }
  .action-card-1 .action-link,
  .action-card-2 .action-link,
  .action-card-4 .action-link { color: rgba(255,255,255,0.9); }
  .action-card-3 .action-link { color: var(--green-dark); }
  
  /* ── 9. TICKER ────────────────────────────────────────────── */
  .ticker { padding: 1.5rem 0; background: var(--green-dark); overflow: hidden; }
  .ticker-inner {
    display: flex; gap: 4rem;
    white-space: nowrap;
    animation: ticker 20s linear infinite;
  }
  .ticker-item {
    display: flex; align-items: center; gap: 0.75rem;
    color: rgba(255,255,255,0.85); font-size: 0.82rem; font-weight: 500;
    letter-spacing: 0.06em; text-transform: uppercase; flex-shrink: 0;
  }
  .ticker-dot { width: 4px; height: 4px; background: var(--green-light); border-radius: 50%; }
  @keyframes ticker { to { transform: translateX(-50%); } }
  
  /* ── 10. NEWSLETTER ───────────────────────────────────────── */
  .newsletter {
    padding: 7rem 4rem;
    background: linear-gradient(135deg, var(--charcoal) 0%, #0f1f14 100%);
    position: relative; overflow: hidden;
  }
  .newsletter::before {
    content: ''; position: absolute; top: -50%; right: -20%;
    width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, rgba(90,176,51,0.12) 0%, transparent 70%);
  }
  .newsletter-inner {
    position: relative; z-index: 1;
    display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center;
  }
  .newsletter h2      { color: white; }
  .newsletter h2 span { color: var(--green-light); }
  .newsletter p       { color: rgba(255,255,255,0.55); font-size: 0.92rem; line-height: 1.7; margin-top: 1.2rem; }
  
  .email-form { display: flex; flex-direction: column; gap: 1rem; }
  .email-input {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px; padding: 1rem 1.4rem;
    color: white; font-size: 0.9rem; font-family: 'DM Sans', sans-serif;
    outline: none; transition: border-color 0.3s, background 0.3s; cursor: none;
  }
  .email-input::placeholder { color: rgba(255,255,255,0.3); }
  .email-input:focus {
    border-color: rgba(90,176,51,0.5);
    background: rgba(90,176,51,0.06);
  }
  .email-btn {
    background: linear-gradient(135deg, var(--green-mid), var(--teal));
    color: white; border: none; border-radius: 12px;
    padding: 1rem 2rem; font-size: 0.9rem; font-weight: 500;
    font-family: 'DM Sans', sans-serif; cursor: none;
    transition: opacity 0.3s, transform 0.3s;
  }
  .email-btn:hover { opacity: 0.9; transform: translateY(-2px); }
  
  /* ── 11. FOOTER ───────────────────────────────────────────── */
  footer {
    padding: 3rem 4rem; background: #0b160e;
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 1rem;
  }
  footer .logo {
    font-family: 'Playfair Display', serif; font-weight: 700;
    color: rgba(255,255,255,0.8); font-size: 1.05rem;
    display: flex; align-items: center; gap: 10px;
  }
  .footer-links { display: flex; gap: 2rem; }
  .footer-links a {
    color: rgba(255,255,255,0.35); font-size: 0.8rem;
    text-decoration: none; transition: color 0.3s;
  }
  .footer-links a:hover { color: var(--green-light); }
  footer p { color: rgba(255,255,255,0.25); font-size: 0.78rem; }
  
  /* ── 12. ANIMATIONS & UTILITIES ───────────────────────────── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .reveal {
    opacity: 0; transform: translateY(32px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal.visible { opacity: 1; transform: none; }
  
  .ripple {
    position: absolute; border-radius: 50%;
    background: rgba(90,176,51,0.15);
    transform: scale(0); animation: rippleAnim 0.6s ease-out forwards;
    pointer-events: none;
  }
  @keyframes rippleAnim { to { transform: scale(4); opacity: 0; } }
  
  /* ── 13. RESPONSIVE ───────────────────────────────────────── */
  @media (max-width: 900px) {
    nav { padding: 1rem 1.5rem; }
    .nav-links { display: none; }
  
    .hero { padding: 7rem 1.5rem 3rem; flex-direction: column; }
    .hero-visual {
      position: relative; right: auto; top: auto; transform: none;
      width: 260px; height: 260px; margin: 3rem auto 0;
    }
  
    .stats { grid-template-columns: repeat(2, 1fr); }
  
    .features { padding: 5rem 1.5rem; }
    .features-grid { grid-template-columns: 1fr; }
  
    .actions-section { padding: 5rem 1.5rem; }
    .actions-grid { grid-template-columns: 1fr; }
  
    .newsletter { padding: 5rem 1.5rem; }
    .newsletter-inner { grid-template-columns: 1fr; gap: 3rem; }
  
    footer { padding: 2rem 1.5rem; flex-direction: column; text-align: center; }
    .footer-links { justify-content: center; }
  }