/* ============================================================
   Manali Hikers — shared nav behaviour
   Used by index.html AND every generated route page. Must be safe on
   ANY page: every lookup is guarded so a missing element never throws.
   ============================================================ */

/* ---------- Nav scroll state ---------- */
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ---------- Mobile drawer ---------- */
(function () {
  const toggle = document.getElementById('navToggle');
  const drawer = document.getElementById('drawer');
  if (!toggle || !drawer) return;
  toggle.addEventListener('click', () => drawer.classList.toggle('open'));
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));
})();

/* ---------- Routes dropdown (click, not hover) ---------- */
(function () {
  const toggle = document.getElementById('routesToggle');
  const menu = document.getElementById('routesMenu');
  if (!toggle || !menu) return;

  function openMenu() {
    menu.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function isOpen() {
    return menu.classList.contains('open');
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    isOpen() ? closeMenu() : openMenu();
  });

  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  document.addEventListener('click', (e) => {
    if (isOpen() && !menu.contains(e.target) && e.target !== toggle) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) closeMenu();
  });
})();

/* ---------- Routes mega-menu: live route list per category ----------
   Categories on the left; hovering/selecting one lists its routes on the
   right, each linking to its own route page. Data comes from MH_ROUTES
   (data.js), loaded before this script on every page. ---------- */
(function () {
  const catsEl = document.getElementById('navMegaCats');
  const routesEl = document.getElementById('navMegaRoutes');
  if (!catsEl || !routesEl || typeof MH_ROUTES === 'undefined') return;

  const base = location.pathname.includes('/routes/') ? '../' : '';
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const byCat = {};
  MH_ROUTES.forEach((r) => { (byCat[r.category] = byCat[r.category] || []).push(r); });

  const cats = Array.from(catsEl.querySelectorAll('.nav-cat'));
  function render(cat) {
    cats.forEach((c) => c.classList.toggle('active', c.dataset.cat === cat));
    const list = byCat[cat] || [];
    routesEl.innerHTML = list.map((r) =>
      `<a class="nav-mega-route" href="${base}routes/${r.slug}.html">` +
        `<span class="nav-mega-route-name">${esc(r.name)}</span>` +
        `<span class="nav-mega-route-meta">${esc(r.duration)}${r.alt ? ' · ' + esc(r.alt) : ''}</span>` +
      `</a>`
    ).join('');
  }
  cats.forEach((c) => {
    c.addEventListener('mouseenter', () => render(c.dataset.cat));
    c.addEventListener('focus', () => render(c.dataset.cat));
    c.addEventListener('click', () => render(c.dataset.cat));
  });
  if (cats.length) render(cats[0].dataset.cat);
})();
