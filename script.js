/* ============================================================
   Manali Hikers — interactions (homepage only)
   Nav behaviour lives in nav.js (shared with the generated route pages).
   Route + itinerary data lives in data.js as MH_ROUTES / MH_ITINERARIES.
   ============================================================ */

/* ---------- Data: the family lineage ----------
   Only confirmed facts from the real site are used here. The original
   manalihikers.com "About Us" text names no specific ancestor, pass, or
   decade beyond "ancestors" and "my father" — so this stays a 3-step
   timeline instead of inventing names/eras for a 4th generation. */
const lineage = [
  {
    era: 'Early–mid 1900s · Nomadic era',
    name: 'The Khampa ancestors',
    pass: 'Across the Himalaya, unnamed passes',
    story: 'Manoj\'s family were Khampa — Buddhist nomadic herders who moved with the seasons across the Himalaya with their cattle, and in doing so traced a great number of the trek routes still walked today.',
    link: 'Read our full story →',
    img: 'Photos/IMG_1706.jpeg'
  },
  {
    era: '1970s–1990s · Settles at Shaminala',
    name: 'Manoj\'s father',
    pass: 'Shaminala, near Jagatsukh',
    story: 'Rather than continue the nomadic life, he settled the family at Shaminala near Jagatsukh in the Kullu valley, and began guiding treks on the routes the family already knew — turning inherited knowledge into a livelihood.',
    link: 'See our home base →',
    img: 'Photos/94462484-3a39-4c2a-9d94-ccd61cb1b56b.jpg'
  },
  {
    era: '1998–present · Manali Hikers',
    name: 'Manoj Kumar — Founder',
    // ABVIMAS course years are assumed/approximate (kept flagged) — confirm the real dates with Manoj.
    pass: 'Basic Mountaineering Course (1994) · Advanced (1996) · Method of Instruction (1997), ABVIMAS <span class="draft-flag-inline">dates approximate</span>',
    story: 'Grew up in that same family, trekked those same routes for years, then founded Manali Hikers in 1998. Trained through ABVIMAS — from the foundations up to Advanced and Method-of-Instruction level — and has since summited ten peaks between 6,000 and 6,500 metres, training every guide on the team to that same standard.',
    link: 'See our routes →',
    img: 'Photos/7722dc55-3566-4a48-9e9a-e6fb7f49c5db.jpg'
  }
];

/* ---------- Build the timeline ---------- */
const track = document.getElementById('track');
let activeGen = 2;

if (track) {
  lineage.forEach((g, i) => {
    const el = document.createElement('div');
    el.className = 'gen' + (i === activeGen ? ' active' : '');
    el.innerHTML = `
      <div class="gen-dot"></div>
      <div class="gen-era">${g.era.split(' · ')[0]}</div>
      <div class="gen-name">${g.name}</div>`;
    el.addEventListener('click', () => selectGen(i));
    track.appendChild(el);
  });
}

function selectGen(i) {
  activeGen = i;
  document.querySelectorAll('.gen').forEach((el, idx) => el.classList.toggle('active', idx === i));
  const g = lineage[i];
  const dEra = document.getElementById('dEra');
  const dName = document.getElementById('dName');
  const dPass = document.getElementById('dPass');
  const dStory = document.getElementById('dStory');
  const link = document.getElementById('dLink');
  const photo = document.querySelector('.gen-photo');
  if (dEra) dEra.textContent = g.era;
  if (dName) dName.textContent = g.name;
  if (dPass) dPass.innerHTML = g.pass;
  if (dStory) dStory.textContent = g.story;
  if (link) link.textContent = g.link;
  if (photo) photo.innerHTML = `<img src="${g.img}" alt="${g.name}" style="width:100%; height:100%; object-fit:cover;" />`;
}
if (track) selectGen(activeGen);

/* ---------- Signature Routes — 6 featured cards ----------
   Full catalogue lives on routes.html; each card here links out to its own
   generated route page rather than opening a modal. */
const FEATURED_SLUGS = [
  'bara-bhangal-shepherds-trail',
  'hamta-pass-crossing',
  'markha-valley',
  'deo-tibba-expedition',
  'friendship-peak',
  'kang-yatse-expedition'
];

function featuredRouteCardHTML(r) {
  return `
    <div class="route-card">
      <a class="route-img" href="routes/${r.slug}.html">
        <div class="route-badges">
          ${r.diff ? `<span class="badge badge-diff">${r.diff}</span>` : ''}
          ${r.heritage ? '<span class="badge badge-heritage">Heritage route</span>' : ''}
        </div>
        <img src="${r.img}" alt="${r.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;transition:transform 0.6s var(--ease);" />
      </a>
      <div class="route-body">
        <div class="route-region">${r.region}</div>
        <div class="route-name">${r.name}</div>
        <div class="route-meta"><span>⏱ ${r.duration}</span>${r.alt ? `<span>▲ ${r.alt}</span>` : ''}</div>
        <span class="route-price">By <em>enquiry</em></span>
        <div class="route-foot">
          <a class="route-btn route-show" href="routes/${r.slug}.html">View route</a>
          <a class="route-btn route-enquire" href="#plan">Enquire →</a>
        </div>
      </div>
    </div>`;
}

const featuredEl = document.getElementById('featuredRoutes');
if (featuredEl && typeof MH_ROUTES !== 'undefined') {
  const byslug = Object.fromEntries(MH_ROUTES.map(r => [r.slug, r]));
  const featured = FEATURED_SLUGS.map(slug => byslug[slug]).filter(Boolean);
  featuredEl.innerHTML = featured.map(featuredRouteCardHTML).join('');
}

/* ---------- Enquiry form (demo — no backend yet) ---------- */
const form = document.getElementById('enquiryForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    const success = document.getElementById('formSuccess');
    if (success) success.classList.add('show');
  });
}

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
