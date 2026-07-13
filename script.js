/* ============================================================
   Manali Hikers — interactions
   ============================================================ */

/* ---------- Data: the four-generation lineage ---------- */
const lineage = [
  {
    era: '1930s–1950s · Nomadic era',
    name: 'The great-grandfather',
    pass: 'Bara Bhangal — first crossings',
    story: 'Moved the family\'s herds between valleys with the seasons — among the first Khampa to cross the high passes into Bara Bhangal on foot, decades before any of it appeared on a trekking map.',
    link: 'Walk the Bara Bhangal Shepherds’ Trail →',
    img: 'Photos/IMG_1706.jpeg'
  },
  {
    era: '1950s–1970s · Settlement era',
    name: 'The grandfather',
    pass: 'Chanderkhani Pass · Malana',
    story: 'As nomadic movement gave way to settled village life, he kept the route knowledge of Chanderkhani and the old Malana crossings alive — passing it on rather than letting it fade with the lifestyle.',
    link: 'See the Malana & Chanderkhani route →',
    img: 'Photos/IMG_1030.jpeg'
  },
  {
    era: '1970s–1990s · Early guiding',
    name: 'Manoj’s father',
    pass: 'Hamta Pass · Shaminala, Jagatsukh',
    story: 'Settled the family at Shaminala near Jagatsukh and guided some of the earliest trekking parties to reach Manali — turning a family’s nomadic route knowledge into the first proper guided crossings of Hamta.',
    link: 'Cross Hamta Pass →',
    img: 'Photos/94462484-3a39-4c2a-9d94-ccd61cb1b56b.jpg'
  },
  {
    era: '1998–present · Manali Hikers',
    name: 'Manoj Kumar',
    pass: 'Deo Tibba · 6,001m',
    story: 'Founded Manali Hikers in 1998 and added formal ABVIMAS technical training to the family’s inherited trail knowledge. Has since summited ten peaks between 6,000 and 6,500 metres, and trains every guide to that standard.',
    link: 'Join the Deo Tibba expedition →',
    img: 'Photos/IMG_2357.jpeg'
  }
];

/* ---------- Data: curated signature routes ---------- */
const routes = [
  { name: 'Bara Bhangal Shepherds’ Trail', region: 'Himachal', diff: 'Challenging', heritage: true,
    duration: '11 days', alt: '4,878m', img: 'Photos/da4e15aa-46b5-4ff6-b1f0-dddf75415c0b.jpg' },
  { name: 'Hamta Pass Crossing', region: 'Himachal', diff: 'Moderate', heritage: true,
    duration: '5 days', alt: '4,270m', img: 'Photos/94462484-3a39-4c2a-9d94-ccd61cb1b56b.jpg' },
  { name: 'Markha Valley', region: 'Ladakh', diff: 'Moderate', heritage: false,
    duration: '8 days', alt: '5,200m', img: 'Photos/IMG_3290.jpeg' },
  { name: 'Deo Tibba Expedition', region: 'Himachal', diff: 'Technical', heritage: true,
    duration: '14 days', alt: '6,001m', img: 'Photos/IMG_4170.jpeg' },
  { name: 'Friendship Peak', region: 'Himachal', diff: 'Technical', heritage: false,
    duration: '7 days', alt: '5,289m', img: 'Photos/8bbb4edc-ab6a-42d9-8139-621772ca79cd.jpg' },
  { name: 'Kang Yatse II', region: 'Ladakh', diff: 'Technical', heritage: false,
    duration: '10 days', alt: '6,250m', img: 'Photos/4c862c1f-da63-41ff-add8-1ded0e18edad.jpg' }
];

/* ---------- Build the timeline ---------- */
const track = document.getElementById('track');
let activeGen = 3;

lineage.forEach((g, i) => {
  const el = document.createElement('div');
  el.className = 'gen' + (i === activeGen ? ' active' : '');
  el.innerHTML = `
    <div class="gen-dot"></div>
    <div class="gen-era">${g.era.split(' · ')[0]}</div>
    <div class="gen-name">${g.name}</div>
    <div class="gen-pass">${g.pass}</div>`;
  el.addEventListener('click', () => selectGen(i));
  track.appendChild(el);
});

function selectGen(i) {
  activeGen = i;
  document.querySelectorAll('.gen').forEach((el, idx) => el.classList.toggle('active', idx === i));
  const g = lineage[i];
  document.getElementById('dEra').textContent = g.era;
  document.getElementById('dName').textContent = g.name;
  document.getElementById('dPass').textContent = g.pass;
  document.getElementById('dStory').textContent = g.story;
  const link = document.getElementById('dLink');
  link.textContent = g.link;
  document.querySelector('.gen-photo').innerHTML = `<img src="${g.img}" alt="${g.name}" style="width:100%; height:100%; object-fit:cover;" />`;
}
selectGen(activeGen);

/* ---------- Build the route grid ---------- */
const grid = document.getElementById('routeGrid');
routes.forEach(r => {
  const card = document.createElement('a');
  card.className = 'route-card';
  card.href = '#plan';
  card.innerHTML = `
    <div class="route-img">
      <div class="route-badges">
        <span class="badge badge-diff">${r.diff}</span>
        ${r.heritage ? '<span class="badge badge-heritage">Heritage route</span>' : ''}
      </div>
      <img src="${r.img}" alt="${r.name}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.6s var(--ease);" />
    </div>
    <div class="route-body">
      <div class="route-region">${r.region}</div>
      <div class="route-name">${r.name}</div>
      <div class="route-meta">
        <span>⏱ ${r.duration}</span>
        <span>▲ ${r.alt}</span>
      </div>
      <div class="route-foot">
        <span class="route-price">By <em>enquiry</em></span>
        <span class="route-view">Enquire →</span>
      </div>
    </div>`;
  grid.appendChild(card);
});

/* ---------- Nav scroll state ---------- */
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Mobile drawer ---------- */
const toggle = document.getElementById('navToggle');
const drawer = document.getElementById('drawer');
toggle.addEventListener('click', () => drawer.classList.toggle('open'));
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));

/* ---------- Enquiry form (demo — no backend yet) ---------- */
const form = document.getElementById('enquiryForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  form.style.display = 'none';
  document.getElementById('formSuccess').classList.add('show');
});

/* ---------- Interactive SVG Map locations data ---------- */
const mapLocations = {
  kullu: {
    name: "Kullu Valley",
    coords: "31.9578° N, 77.1095° E",
    desc: "The fertile valley of Kullu, flanked by pine forests and apple orchards. Basecamp for low-altitude acclimatisation treks before pushing into the high trans-Himalayan passes."
  },
  manali: {
    name: "Manali Base (Shaminala)",
    coords: "32.2396° N, 77.1887° E",
    desc: "The main headquarters of Manali Hikers. Our equipment depot, logistics center, and guide headquarters are based in Shaminala near Jagatsukh."
  },
  rohtang: {
    name: "Rohtang Pass",
    coords: "32.3716° N, 77.2465° E",
    desc: "Altitude 3,978m. The legendary gateway pass connecting Kullu to the high-altitude deserts of Lahaul and Spiti Valleys. Famous for rapid weather changes and deep snow."
  },
  kaza: {
    name: "Kaza & Key Monastery",
    coords: "32.2276° N, 78.0708° E",
    desc: "Altitude 3,650m. The administrative hub of Spiti Valley. Key Monastery towers over the Spiti River nearby. Base for our Spiti jeep safaris and high-altitude climbs."
  },
  chandratal: {
    name: "Chandra Tal (Moon Lake)",
    coords: "32.4820° N, 77.6163° E",
    desc: "Altitude 4,300m. A high-altitude lake of crescent shape, sacred to local shepherds. Important camping site on our Spiti and Lahaul trekking routes."
  },
  baralacha: {
    name: "Baralacha La",
    coords: "32.7386° N, 77.4208° E",
    desc: "Altitude 4,890m. A high mountain pass along the Manali-Leh Highway, crossing the Zanskar range. It connects the Lahaul district with Ladakh."
  },
  leh: {
    name: "Leh (Ladakh)",
    coords: "34.1526° N, 77.5771° E",
    desc: "Altitude 3,500m. The high-desert capital of Ladakh, surrounded by barren peaks and ancient Buddhist monasteries. Base for our Markha Valley and Kang Yatse expeditions."
  }
};

/* ---------- SVG Map event listeners ---------- */
const pins = document.querySelectorAll('.map-pin');
const locName = document.getElementById('mapLocName');
const locDesc = document.getElementById('mapLocDesc');
const locCoords = document.getElementById('mapLocCoords');

pins.forEach(pin => {
  const updateMapInfo = () => {
    const locId = pin.getAttribute('data-loc');
    const data = mapLocations[locId];
    if (data) {
      pins.forEach(p => p.classList.remove('active'));
      pin.classList.add('active');
      locName.textContent = data.name;
      locDesc.textContent = data.desc;
      locCoords.textContent = data.coords;
    }
  };

  pin.addEventListener('mouseenter', updateMapInfo);
  pin.addEventListener('click', updateMapInfo);
});

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
