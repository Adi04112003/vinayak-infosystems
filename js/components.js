/* ── NAVBAR HTML ── */
const NAVBAR_HTML = `
<nav class="navbar">
  <div class="container navbar-inner">
    <a href="index.html" class="navbar-logo">
      <div class="logo-box">VI</div>
      <div class="logo-info">
        <span>Vinayak Infosystems</span>
        <span>Lucknow · Est. 2025</span>
      </div>
    </a>
    <div class="navbar-links">
      <a href="index.html">Home</a>
      <a href="shop.html">Shop</a>
      <a href="services.html">Services</a>
      <a href="contact.html" class="nav-cta">📞 Contact Us</a>
    </div>
    <button class="hamburger" id="hamburgerBtn" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-nav" id="mobileNav">
  <a href="index.html">🏠 Home</a>
  <a href="shop.html">🛒 Shop</a>
  <a href="services.html">🔧 Services</a>
  <hr>
  <a href="contact.html">📞 Contact Us</a>
  <a href="tel:+919140676972">📱 +91 9140676972</a>
  <a href="mailto:vinayakinfo249@gmail.com">✉️ Email Us</a>
</div>
`;

/* ── TICKER HTML ── */
const TICKER_HTML = `
<div class="ticker-wrap">
  <div class="ticker-inner">
    <div class="ticker-badge">🔴 Our Brands</div>
    <div class="ticker-scroll">
      <div class="ticker-track" id="tickerTrack"></div>
    </div>
  </div>
</div>
`;

/* ── FOOTER HTML ── */
const FOOTER_HTML = `
<footer>
  <div class="footer-top">
    <div class="container footer-grid">

      <div class="footer-brand">
        <div class="footer-logo">
          <div class="logo-box">VI</div>
          <div class="logo-info">
            <span>Vinayak Infosystems</span>
            <span>Lucknow · Est. 2025</span>
          </div>
        </div>
        <p>Your trusted IT partner in Lucknow — sales, service & support for all your computer and printing needs since 2025.</p>
        <div class="footer-contact-list">
          <a href="tel:+919140676972">📱 +91 9140676972</a>
          <a href="mailto:vinayakinfo249@gmail.com">✉️ vinayakinfo249@gmail.com</a>
          <a href="https://www.google.com/maps/place/26%C2%B043'48.0%22N+80%C2%B054'03.3%22E/@26.7301696,80.8994905,17.82z/data=!4m4!3m3!8m2!3d26.7299855!4d80.9009072?hl=en&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">📍 Shop No 7 Basement Yadav Market CRPF Choraha Bijnor Uttar Pradesh</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Navigation</h4>
        <div class="footer-links">
          <a href="index.html">Home</a>
          <a href="shop.html">Shop</a>
          <a href="services.html">Services</a>
          <a href="contact.html">Contact Us</a>
        </div>
      </div>

    

     

    </div>
  </div>
  <div class="container footer-bottom">
    <span>© 2025 <strong>Vinayak Infosystems</strong>. All rights reserved.</span>
    <span>Made with ♥ in Lucknow</span>
  </div>
</footer>
`;

/* ── INJECT ON LOAD ── */
document.addEventListener('DOMContentLoaded', () => {
  const nav    = document.getElementById('navbar-placeholder');
  const ticker = document.getElementById('ticker-placeholder');
  const foot   = document.getElementById('footer-placeholder');
  if (nav)    nav.innerHTML    = NAVBAR_HTML;
  if (ticker) ticker.innerHTML = TICKER_HTML;
  if (foot)   foot.innerHTML   = FOOTER_HTML;
});