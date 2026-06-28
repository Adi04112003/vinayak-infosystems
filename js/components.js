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
const WHATSAPP_BUTTON_HTML = `
<a class="whatsapp-float" href="https://wa.me/919140676972" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
  <span class="whatsapp-tooltip" role="tooltip">Chat with us</span>
  <span class="whatsapp-icon-wrap">
    <svg class="whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16.04 4C9.42 4 4.04 9.34 4.04 15.91c0 2.1.56 4.15 1.62 5.95L4 28l6.32-1.64a12.1 12.1 0 0 0 5.72 1.45C22.66 27.81 28 22.47 28 15.91S22.66 4 16.04 4zm0 21.78c-1.82 0-3.6-.49-5.14-1.42l-.37-.22-3.75.97 1-3.64-.24-.38a9.7 9.7 0 0 1-1.48-5.18c0-5.45 4.48-9.88 9.98-9.88 5.49 0 9.96 4.43 9.96 9.88 0 5.44-4.47 9.87-9.96 9.87zm5.47-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.29-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.75-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.19-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.46s1.07 2.86 1.22 3.05c.15.2 2.1 3.18 5.08 4.46.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.13-.27-.2-.57-.35z"/>
    </svg>
  </span>
  <span class="whatsapp-copy">
    <span>Chat with us</span>
    <strong>WhatsApp</strong>
  </span>
</a>
`;

document.addEventListener('DOMContentLoaded', () => {
  const nav    = document.getElementById('navbar-placeholder');
  const ticker = document.getElementById('ticker-placeholder');
  const foot   = document.getElementById('footer-placeholder');
  if (nav)    nav.innerHTML    = NAVBAR_HTML;
  if (ticker) ticker.innerHTML = TICKER_HTML;
  if (foot)   foot.innerHTML   = FOOTER_HTML;
  if (!document.querySelector('.whatsapp-float')) {
    document.body.insertAdjacentHTML('beforeend', WHATSAPP_BUTTON_HTML);
  }
});
