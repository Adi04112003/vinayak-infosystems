const NAVBAR_HTML = `
<nav class="navbar">
  <div class="container navbar-inner">
    <a href="index.html" class="navbar-logo">
      <div class="logo-box">VI</div>
      <div class="logo-info">
        <span>Vinayak Infosystems</span>
        <span>Lucknow · Est. 2007</span>
      </div>
    </a>
    <div class="navbar-links">
      <a href="index.html">Home</a>
      <a href="shop.html">Shop</a>
      <a href="services.html">Services</a>
      <a href="contact.html" class="nav-cta">📞 Contact Us</a>
    </div>
    <button class="hamburger" id="hamburgerBtn" aria-label="Toggle menu">
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
  <a href="tel:+919876540000">📱 Call: +91 98765 40000</a>
  <a href="mailto:vinayakinfo249@gmail.com">✉️ Email Us</a>
</div>
`;

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

const FOOTER_HTML = `
<footer>
  <div class="footer-top">
    <div class="container footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <div class="logo-box">VI</div>
          <div class="logo-info">
            <span style="display:block;font-family:'Rajdhani',sans-serif;font-size:18px;font-weight:700;color:#fff;">Vinayak Infosystems</span>
            <span style="display:block;font-size:10px;color:#f7941d;letter-spacing:1.5px;text-transform:uppercase;">Est. 2007 · Lucknow</span>
          </div>
        </div>
        <p>Your trusted IT partner in Lucknow — sales, service & support for all your computer and printing needs since 2007.</p>
        <div class="footer-contact-list">
          <a href="tel:+919876540000">📱 +91 98765 40000</a>
          <a href="mailto:vinayakinfo249@gmail.com">✉️ vinayakinfo249@gmail.com</a>
          <a href="https://maps.google.com/?q=26.7299719,80.9009236" target="_blank">📍 Gomti Nagar, Lucknow – 226010</a>
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
      <div class="footer-col">
        <h4>Our Services</h4>
        <div class="footer-links">
          <a href="services.html">Laptop Sales</a>
          <a href="services.html">Desktop Computers</a>
          <a href="services.html">Printers & Cartridges</a>
          <a href="services.html">Repair & Maintenance</a>
          <a href="services.html">Networking Solutions</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Visit Us</h4>
        <div class="footer-address">
          Gomti Nagar,<br>Lucknow – 226010<br>Uttar Pradesh, India<br><br>
          <strong style="color:#fff;">Mon – Sat:</strong> 9:00 AM – 8:00 PM<br>
          <strong style="color:#fff;">Sunday:</strong> <span style="color:#ef4444;">Closed</span>
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

document.addEventListener('DOMContentLoaded', () => {
  const navTarget    = document.getElementById('navbar-placeholder');
  const tickerTarget = document.getElementById('ticker-placeholder');
  const footerTarget = document.getElementById('footer-placeholder');
  if (navTarget)    navTarget.innerHTML    = NAVBAR_HTML;
  if (tickerTarget) tickerTarget.innerHTML = TICKER_HTML;
  if (footerTarget) footerTarget.innerHTML = FOOTER_HTML;
});