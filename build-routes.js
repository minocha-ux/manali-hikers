#!/usr/bin/env node
/**
 * build-routes.js
 * ----------------
 * Regenerates the route catalogue (`routes.html`), all 34 individual route
 * pages (`routes/<slug>.html`), `sitemap.xml` and `robots.txt` from the
 * single source of truth in `data.js`.
 *
 * Idempotent: safe to re-run any time data.js changes. It always rewrites
 * the full set of output files rather than patching them.
 *
 * Usage: node build-routes.js
 */

const fs = require('fs');
const path = require('path');
const { MH_ROUTES, MH_ITINERARIES } = require('./data.js');

const ROOT = __dirname;
const SITE_URL = 'https://manalihikers.com';
const ROUTES_DIR = path.join(ROOT, 'routes');

// ----------------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------------

/** Escape a string for safe interpolation into HTML text/attribute contexts. */
function esc(str) {
  if (str === undefined || str === null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Escape a string for safe interpolation inside a JSON string embedded in HTML
 * (used for JSON-LD blocks) — JSON.stringify already escapes quotes/backslashes;
 * we additionally guard against a literal "</script>" breaking out of the tag. */
function jsonLd(obj) {
  return JSON.stringify(obj, null, 2).replace(/</g, '\\u003c');
}

const CATEGORY_ORDER = [
  'Trekking',
  'Expeditions',
  'Jeep Safari',
  'Mountain Biking',
  'Camps',
  'Culture Tours',
];

const CATEGORY_SLUG = {
  'Trekking': 'band-trekking',
  'Expeditions': 'band-expeditions',
  'Jeep Safari': 'band-jeep-safari',
  'Mountain Biking': 'band-mountain-biking',
  'Camps': 'band-camps',
  'Culture Tours': 'band-culture-tours',
};

const CATEGORY_INTRO = {
  'Trekking': "From gentle valley walks to high-pass crossings, across Himachal and Ladakh.",
  'Expeditions': "6,000-metre peaks and technical climbs, led to ABVIMAS standard.",
  'Jeep Safari': "The high passes, lakes and monasteries of the trans-Himalaya, by road.",
  'Mountain Biking': "Motorbike and pedal tours over some of the world's highest motorable passes.",
  'Camps': "Fixed-base adventure and skill camps for groups and young explorers.",
  'Culture Tours': "Monasteries, villages and living Buddhist culture across Spiti, Ladakh and Kullu.",
};

// Routes that have no day-by-day itinerary in MH_ITINERARIES — render a
// graceful fallback block on their route page instead of a day list.
const NO_ITINERARY_FALLBACK =
  "A day-by-day plan for this route is built around your dates and season — get in touch and we'll share it.";

/** Build the <head> markup shared by every generated page. */
function sharedHead({ base, title, description, ogImage, canonicalPath, extraHead = '' }) {
  return `  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}" />
  <link rel="canonical" href="${SITE_URL}${canonicalPath}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:image" content="${SITE_URL}/${ogImage}" />
  <meta property="og:url" content="${SITE_URL}${canonicalPath}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="${base}styles.css?v=1.0.1" />
  <link rel="stylesheet" href="${base}route-page.css" />
${extraHead}`;
}

/** Canonical nav markup (identical across all generated pages). */
function nav(base) {
  return `  <nav class="nav" id="nav">
    <a href="${base}index.html#top" class="nav-logo" aria-label="Manali Hikers — home">
      <img src="${base}Photos/manali-hikers-logo.png" alt="Manali Hikers" class="nav-logo-img" />
    </a>
    <div class="nav-links">
      <a href="${base}index.html#story">Our Story</a>
      <div class="nav-dropdown">
        <button type="button" class="nav-drop-toggle" id="routesToggle" aria-expanded="false" aria-haspopup="true">Routes <span class="caret">▾</span></button>
        <div class="nav-drop-menu nav-mega" id="routesMenu">
          <div class="nav-mega-cats" id="navMegaCats">
            <button type="button" class="nav-cat" data-cat="Trekking">Trekking</button>
            <button type="button" class="nav-cat" data-cat="Expeditions">Expeditions</button>
            <button type="button" class="nav-cat" data-cat="Jeep Safari">Jeep Safari</button>
            <button type="button" class="nav-cat" data-cat="Mountain Biking">Mountain Biking</button>
            <button type="button" class="nav-cat" data-cat="Camps">Camps</button>
            <button type="button" class="nav-cat" data-cat="Culture Tours">Culture Tours</button>
            <a class="nav-drop-all" href="${base}routes.html">All routes →</a>
          </div>
          <div class="nav-mega-routes" id="navMegaRoutes"><!-- populated by nav.js --></div>
        </div>
      </div>
      <a href="${base}index.html#plan" class="nav-cta">Enquire</a>
    </div>
    <button class="nav-toggle" id="navToggle" aria-label="Menu"><span></span><span></span><span></span></button>
  </nav>
  <div class="mobile-drawer" id="drawer">
    <a href="${base}index.html#story">Our Story</a>
    <a href="${base}routes.html">Routes</a>
    <a href="${base}index.html#plan">Enquire</a>
  </div>`;
}

/** Canonical footer markup (identical across all generated pages). */
function footer(base) {
  return `  <footer class="footer">
    <div class="wrap">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="${base}index.html#top" class="nav-logo">Manali <span class="mark">Hikers</span></a>
          <p>Founded 1998 by Manoj Kumar, descendant of the Khampa nomads who first traced these passes. Registered with Himachal Tourism.</p>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <a href="${base}index.html#story">Our Story</a>
          <a href="${base}routes.html">Routes</a>
          <a href="${base}index.html#plan">Enquire</a>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <a href="https://wa.me/919418204521" target="_blank" rel="noopener">WhatsApp</a>
          <a href="mailto:info@manalihikers.com">info@manalihikers.com</a>
          <a href="tel:+919418204521">+91 94182 04521</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 1998–2026 Manali Hikers. Registered with Himachal Tourism.</p>
        <p class="heritage-line">A Khampa nomad legacy, passed down through generations.</p>
      </div>
    </div>
  </footer>`;
}

/** Route card markup, reused on routes.html and in the "related routes" section. */
function routeCard(route, base) {
  const { slug, name, region, duration, alt, diff, heritage, img } = route;
  const badges = [
    diff ? `<span class="badge badge-diff">${esc(diff)}</span>` : '',
    heritage ? '<span class="badge badge-heritage">Heritage route</span>' : '',
  ].join('\n      ');
  return `<div class="route-card">
  <a class="route-img" href="${base}routes/${slug}.html">
    <div class="route-badges">
      ${badges}
    </div>
    <img src="${base}${img}" alt="${esc(name)}" loading="lazy" style="width:100%;height:100%;object-fit:cover;" />
  </a>
  <div class="route-body">
    <div class="route-region">${esc(region)}</div>
    <div class="route-name">${esc(name)}</div>
    <div class="route-meta">
      <span>⏱ ${esc(duration)}</span>
      ${alt ? `<span>▲ ${esc(alt)}</span>` : ''}
    </div>
    <span class="route-price">By <em>enquiry</em></span>
    <div class="route-foot">
      <a class="route-btn route-show" href="${base}routes/${slug}.html">View route</a>
      <a class="route-btn route-enquire" href="${base}index.html#plan">Enquire →</a>
    </div>
  </div>
</div>`;
}

// ----------------------------------------------------------------------
// routes.html — the full catalogue
// ----------------------------------------------------------------------

function buildRoutesHtml() {
  const base = '';

  const pills = CATEGORY_ORDER
    .map((cat) => `      <a href="#${CATEGORY_SLUG[cat]}" class="route-pill">${esc(cat)}</a>`)
    .join('\n');

  const bands = CATEGORY_ORDER.map((cat) => {
    const routesInCat = MH_ROUTES.filter((r) => r.category === cat);
    const bandId = CATEGORY_SLUG[cat];
    const intro = CATEGORY_INTRO[cat];

    let gridMarkup;
    if (cat === 'Trekking') {
      // Special case: split into Himachal / Ladakh subheads, each own grid.
      const himachal = routesInCat.filter((r) => r.region === 'Himachal');
      const ladakh = routesInCat.filter((r) => r.region === 'Ladakh');
      const section = (label, list) => {
        if (list.length === 0) return '';
        return `      <div class="route-subhead">${esc(label)}</div>
      <div class="route-grid">
        ${list.map((r) => routeCard(r, base)).join('\n        ')}
      </div>`;
      };
      gridMarkup = [section('Himachal Treks', himachal), section('Ladakh Treks', ladakh)]
        .filter(Boolean)
        .join('\n');
    } else {
      gridMarkup = `      <div class="route-grid">
        ${routesInCat.map((r) => routeCard(r, base)).join('\n        ')}
      </div>`;
    }

    return `    <div class="route-band" id="${bandId}">
      <div class="route-band-head">
        <h3>${esc(cat)}</h3>
        <p class="route-band-intro">${esc(intro)}</p>
      </div>
${gridMarkup}
    </div>`;
  }).join('\n\n');

  const title = 'All Routes — Trekking, Expeditions, Jeep Safaris & More | Manali Hikers';
  const description = 'Every trip is planned around your dates and group — solo, private, or small-group — led by ABVIMAS-trained guides. 34 routes across Himachal and Ladakh.';
  const ogImage = MH_ROUTES[0].img;

  const head = sharedHead({
    base,
    title,
    description,
    ogImage,
    canonicalPath: '/routes.html',
  });

  return `<!doctype html>
<html lang="en">
<head>
${head}
</head>
<body>
${nav(base)}

  <header class="section-pad routes-head-wrap">
    <div class="wrap">
      <div class="routes-head">
        <span class="eyebrow">The Full Catalogue</span>
        <h1>Routes worth the altitude.</h1>
        <p>Every trip is planned around your dates and group — solo, private, or small-group — led by ABVIMAS-trained guides, with acclimatisation days built around real weather, not a fixed itinerary. Priced by conversation, not by catalogue.</p>
        <p class="routes-addon">Also arranged on request: skiing at Solang &amp; Hamta, white-water rafting on the Beas, and paragliding at Solang Valley.</p>
      </div>

      <div class="route-pills">
${pills}
      </div>

${bands}
    </div>
  </header>

${footer(base)}
  <script src="${base}data.js"></script>
  <script src="${base}nav.js"></script>
</body>
</html>
`;
}

// ----------------------------------------------------------------------
// routes/<slug>.html — individual route page
// ----------------------------------------------------------------------

function buildRoutePage(route) {
  const base = '../';
  const { slug, name, category, region, diff, heritage, duration, alt, img, season, groupSize, highPasses, overview } = route;

  const title = `${name} — ${duration}${alt ? ', ' + alt : ''} | Manali Hikers`;
  const description = overview.length > 155 ? overview.slice(0, 155).trim() + '…' : overview;

  const itinerary = MH_ITINERARIES[name];

  // ---- JSON-LD ----
  const jsonLdObj = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name,
    description: overview,
    touristType: 'Trekking',
    provider: {
      '@type': 'Organization',
      name: 'Manali Hikers',
      url: SITE_URL,
      telephone: '+91-9418204521',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      description: 'By enquiry',
    },
  };
  if (itinerary) {
    jsonLdObj.itinerary = {
      '@type': 'ItemList',
      itemListElement: itinerary.map((d, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'TouristAttraction',
          name: `Day ${d.day} — ${d.title}`,
        },
      })),
    };
  }

  const extraHead = `  <script type="application/ld+json">
${jsonLd(jsonLdObj)}
  </script>
`;

  const head = sharedHead({
    base,
    title,
    description,
    ogImage: img,
    canonicalPath: `/routes/${slug}.html`,
    extraHead,
  });

  // ---- Hero meta chips ----
  const chips = [
    `<span class="rp-chip">⏱ ${esc(duration)}</span>`,
    alt ? `<span class="rp-chip">▲ ${esc(alt)}</span>` : '',
    diff ? `<span class="rp-chip">${esc(diff)}</span>` : '',
    season ? `<span class="rp-chip">${esc(season)}</span>` : '',
    groupSize ? `<span class="rp-chip">${esc(groupSize)}</span>` : '',
    highPasses ? `<span class="rp-chip">${esc(highPasses)}</span>` : '',
    heritage ? '<span class="rp-chip rp-chip-heritage">Heritage route</span>' : '',
  ].filter(Boolean).join('\n        ');

  // ---- Itinerary block ----
  let itineraryBlock;
  if (itinerary) {
    const days = itinerary.map((d) => `        <div class="rp-day">
          <div class="rp-day-head">
            <span class="rp-day-num">Day ${d.day}</span>
            ${d.elevation ? `<span class="rp-day-elev">${d.elevation.toLocaleString('en-IN')}m</span>` : ''}
          </div>
          <h4>${esc(d.title)}</h4>
          <p>${esc(d.desc)}</p>
        </div>`).join('\n');
    itineraryBlock = `      <div class="rp-days">
${days}
      </div>`;
  } else {
    itineraryBlock = `      <div class="rp-no-itin">
        <p>${esc(NO_ITINERARY_FALLBACK)}</p>
      </div>`;
  }

  // ---- Related routes (up to 3, same category, exclude self) ----
  const related = MH_ROUTES.filter((r) => r.category === category && r.slug !== slug).slice(0, 3);
  const relatedBlock = related.length
    ? `  <section class="section-pad rp-related">
    <div class="wrap">
      <div class="route-band-head">
        <h3>More ${esc(category)}</h3>
      </div>
      <div class="route-grid">
        ${related.map((r) => routeCard(r, base)).join('\n        ')}
      </div>
    </div>
  </section>
`
    : '';

  return `<!doctype html>
<html lang="en">
<head>
${head}
</head>
<body>
${nav(base)}

  <section class="rp-hero">
    <img src="${base}${img}" alt="${esc(name)}" class="rp-hero-img" />
    <div class="rp-hero-scrim"></div>
    <nav class="rp-breadcrumb wrap" aria-label="Breadcrumb">
      <a href="${base}index.html#top">Home</a> / <a href="${base}routes.html">Routes</a> / <span>${esc(name)}</span>
    </nav>
    <div class="rp-hero-inner wrap">
      <span class="eyebrow">${esc(category)} · ${esc(region)}</span>
      <h1>${esc(name)}</h1>
      <div class="rp-chips">
        ${chips}
      </div>
    </div>
  </section>

  <section class="section-pad rp-overview">
    <div class="wrap">
      <div class="rp-overview-col">
        <span class="eyebrow">Overview</span>
        <p>${esc(overview)}</p>
      </div>
    </div>
  </section>

  <section class="section-pad rp-itinerary">
    <div class="wrap">
      <div class="route-band-head">
        <h3>Day by day</h3>
      </div>
${itineraryBlock}
    </div>
  </section>

  <section class="section-pad rp-cta">
    <div class="wrap">
      <h3>Priced by conversation, not by catalogue.</h3>
      <div class="rp-cta-actions">
        <a href="${base}index.html#plan" class="btn btn-gold">Enquire about this route →</a>
        <a href="https://wa.me/919418204521" target="_blank" rel="noopener" class="btn btn-ghost">WhatsApp us</a>
      </div>
    </div>
  </section>

${relatedBlock}
${footer(base)}
  <script src="${base}data.js"></script>
  <script src="${base}nav.js"></script>
</body>
</html>
`;
}

// ----------------------------------------------------------------------
// sitemap.xml + robots.txt
// ----------------------------------------------------------------------

function buildSitemap() {
  const urls = [
    `${SITE_URL}/`,
    `${SITE_URL}/routes.html`,
    ...MH_ROUTES.map((r) => `${SITE_URL}/routes/${r.slug}.html`),
  ];
  const entries = urls
    .map((u) => `  <url>\n    <loc>${esc(u)}</loc>\n  </url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

function buildRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

// ----------------------------------------------------------------------
// Main
// ----------------------------------------------------------------------

function main() {
  // Ensure output dir exists.
  if (!fs.existsSync(ROUTES_DIR)) fs.mkdirSync(ROUTES_DIR, { recursive: true });

  // routes.html
  fs.writeFileSync(path.join(ROOT, 'routes.html'), buildRoutesHtml(), 'utf8');

  // routes/<slug>.html × 34
  MH_ROUTES.forEach((route) => {
    const html = buildRoutePage(route);
    fs.writeFileSync(path.join(ROUTES_DIR, `${route.slug}.html`), html, 'utf8');
  });

  // sitemap.xml + robots.txt
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), buildSitemap(), 'utf8');
  fs.writeFileSync(path.join(ROOT, 'robots.txt'), buildRobots(), 'utf8');

  console.log(`Generated routes.html`);
  console.log(`Generated ${MH_ROUTES.length} route pages in routes/`);
  console.log(`Generated sitemap.xml (${MH_ROUTES.length + 2} URLs)`);
  console.log(`Generated robots.txt`);
}

main();
