// const BRANDS = [
//   { name: 'HP',        url: 'https://www.hp.com',          emoji: '🔵' },
//   { name: 'Dell',      url: 'https://www.dell.com',        emoji: '⚫' },
//   { name: 'Lenovo',    url: 'https://www.lenovo.com',      emoji: '🔴' },
//   { name: 'Acer',      url: 'https://www.acer.com',        emoji: '🟢' },
//   { name: 'Apple',     url: 'https://www.apple.com',       emoji: '⚪' },
//   { name: 'Samsung',   url: 'https://www.samsung.com',     emoji: '🔷' },
//   { name: 'Canon',     url: 'https://www.canon.co.in',     emoji: '🟠' },
//   { name: 'Epson',     url: 'https://www.epson.co.in',     emoji: '🟦' },
//   { name: 'Asus',      url: 'https://www.asus.com',        emoji: '🟡' },
//   { name: 'Microsoft', url: 'https://www.microsoft.com',   emoji: '🪟' },
//   { name: 'Intel',     url: 'https://www.intel.com',       emoji: '🔵' },
//   { name: 'AMD',       url: 'https://www.amd.com',         emoji: '🔴' },
//   { name: 'TP-Link',   url: 'https://www.tp-link.com/in',  emoji: '🟣' },
//   { name: 'D-Link',    url: 'https://www.dlink.com/in/en', emoji: '🟤' },
// ];

// function buildTicker() {
//   const track = document.getElementById('tickerTrack');
//   if (!track) return;
//   const doubled = [...BRANDS, ...BRANDS];
//   track.innerHTML = doubled.map(b => `
//     <a class="ticker-item" href="${b.url}" target="_blank" rel="noopener noreferrer">
//       <span class="t-emoji">${b.emoji}</span>
//       <span class="t-name">${b.name}</span>
//     </a>
//     <span class="ticker-sep">·</span>
//   `).join('');
// }

// function initNav() {
//   const btn = document.getElementById('hamburgerBtn');
//   const mobileNav = document.getElementById('mobileNav');
//   if (!btn || !mobileNav) return;
//   btn.addEventListener('click', () => {
//     btn.classList.toggle('open');
//     mobileNav.classList.toggle('open');
//     document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
//   });
//   mobileNav.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', () => {
//       btn.classList.remove('open');
//       mobileNav.classList.remove('open');
//       document.body.style.overflow = '';
//     });
//   });
// }

// function setActiveNav() {
//   const page = window.location.pathname.split('/').pop() || 'index.html';
//   document.querySelectorAll('.navbar-links a, .mobile-nav a').forEach(a => {
//     const href = a.getAttribute('href') || '';
//     if (href === page || (page === '' && href === 'index.html')) {
//       a.classList.add('active');
//     }
//   });
// }

// function highlightToday() {
//   const days  = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//   const today = days[new Date().getDay()];
//   document.querySelectorAll('.hours-row').forEach(row => {
//     row.classList.remove('today');
//     const dayEl = row.querySelector('.hr-day');
//     if (dayEl && dayEl.textContent.trim() === today) row.classList.add('today');
//   });
// }

// function showToast(msg = '✅ Message sent! We\'ll get back to you soon.') {
//   let toast = document.getElementById('globalToast');
//   if (!toast) {
//     toast = document.createElement('div');
//     toast.id = 'globalToast';
//     toast.className = 'toast';
//     document.body.appendChild(toast);
//   }
//   toast.textContent = msg;
//   toast.classList.add('show');
//   setTimeout(() => toast.classList.remove('show'), 3800);
// }

// function initContactForm() {
//   const form = document.getElementById('contactForm');
//   if (!form) return;
//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     showToast('✅ Message sent! We\'ll contact you within 24 hours.');
//     form.reset();
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   buildTicker();
//   initNav();
//   setActiveNav();
//   highlightToday();
//   initContactForm();
// });

/* ── BRAND DATA ── */
const BRANDS = [
  { name:'HP',        url:'https://www.hp.com',          emoji:'🔵' },
  { name:'Dell',      url:'https://www.dell.com',        emoji:'⚫' },
  { name:'Lenovo',    url:'https://www.lenovo.com',      emoji:'🔴' },
  { name:'Acer',      url:'https://www.acer.com',        emoji:'🟢' },
  { name:'Apple',     url:'https://www.apple.com',       emoji:'⚪' },
  { name:'Samsung',   url:'https://www.samsung.com',     emoji:'🔷' },
  { name:'Canon',     url:'https://www.canon.co.in',     emoji:'🟠' },
  { name:'Epson',     url:'https://www.epson.co.in',     emoji:'🟦' },
  { name:'Asus',      url:'https://www.asus.com',        emoji:'🟡' },
  { name:'Microsoft', url:'https://www.microsoft.com',   emoji:'🪟' },
  { name:'Intel',     url:'https://www.intel.com',       emoji:'🔵' },
  { name:'AMD',       url:'https://www.amd.com',         emoji:'🔴' },
  { name:'TP-Link',   url:'https://www.tp-link.com/in',  emoji:'🟣' },
  { name:'D-Link',    url:'https://www.dlink.com/in/en', emoji:'🟤' },
];

/* ── BUILD TICKER ── */
function buildTicker() {
  const track = document.getElementById('tickerTrack');
  if (!track) return;
  [...BRANDS, ...BRANDS].forEach(b => {
    track.innerHTML += `
      <a class="ticker-item" href="${b.url}" target="_blank" rel="noopener">
        <span class="t-emoji">${b.emoji}</span>
        <span class="t-name">${b.name}</span>
      </a>
      <span class="ticker-sep">·</span>`;
  });
}

/* ── HAMBURGER ── */
function initNav() {
  const btn = document.getElementById('hamburgerBtn');
  const mob = document.getElementById('mobileNav');
  if (!btn || !mob) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    mob.classList.toggle('open');
    document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
  });

  mob.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      mob.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── ACTIVE NAV LINK ── */
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ── HIGHLIGHT TODAY ── */
function highlightToday() {
  const days  = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const today = days[new Date().getDay()];
  document.querySelectorAll('.hours-row').forEach(row => {
    row.classList.remove('today');
    const d = row.querySelector('.hr-day');
    if (d && d.textContent.trim() === today) row.classList.add('today');
  });
}

/* ── TOAST ── */
function showToast(msg) {
  let t = document.getElementById('globalToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'globalToast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg || '✅ Message sent! We\'ll contact you soon.';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

/* ── CONTACT FORM ── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    showToast('✅ Message sent! We\'ll contact you within 24 hours.');
    form.reset();
  });
}

/* ── INIT ALL ── */
document.addEventListener('DOMContentLoaded', () => {
  buildTicker();
  initNav();
  setActiveNav();
  highlightToday();
  initContactForm();
});