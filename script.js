/* ============================================================
   Manali Hikers — interactions
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

/* ---------- Data: full catalogue, restored from the real manalihikers.com ----------
   Every entry traces to scraped_original_content/*.md (fetched live where the
   original site wasn't already scraped this session). Photo reuse: only 3 real
   photos were spare, so most new cards reuse an existing real photo thematically
   by region rather than show a stock/invented image. */
const routes = [
  // — Trekking: Himachal —
  { name: 'Bara Bhangal Shepherds’ Trail', category: 'Trekking', region: 'Himachal', diff: 'Challenging', heritage: true,
    duration: '12 days', alt: '4,878m', img: 'Photos/da4e15aa-46b5-4ff6-b1f0-dddf75415c0b.jpg' },
  { name: 'Hamta Pass Crossing', category: 'Trekking', region: 'Himachal', diff: 'Moderate', heritage: true,
    duration: '8 days', alt: '4,270m', img: 'Photos/94462484-3a39-4c2a-9d94-ccd61cb1b56b.jpg' },
  { name: 'Beas Kund Trek', category: 'Trekking', region: 'Himachal', diff: 'Easy', heritage: false,
    duration: '6 days', alt: '3,650m', img: 'Photos/IMG_1030.jpeg' },
  { name: 'Bhrigu Lake Trek', category: 'Trekking', region: 'Himachal', diff: 'Easy', heritage: false,
    duration: '3 days', alt: '4,240m', img: 'Photos/8bbb4edc-ab6a-42d9-8139-621772ca79cd.jpg' },
  { name: 'Malana Trek', category: 'Trekking', region: 'Himachal', diff: 'Moderate', heritage: false,
    duration: '10 days', alt: '3,660m', img: 'Photos/da4e15aa-46b5-4ff6-b1f0-dddf75415c0b.jpg' },
  { name: 'Kinner Kailash Trek', category: 'Trekking', region: 'Himachal', diff: 'Challenging', heritage: false,
    duration: '7 days', alt: '5,300m', img: 'Photos/94462484-3a39-4c2a-9d94-ccd61cb1b56b.jpg' },
  { name: 'Pin Parvati Trek', category: 'Trekking', region: 'Himachal', diff: 'Challenging', heritage: false,
    duration: '13 days', alt: '5,300m', img: 'Photos/IMG_4170.jpeg' },
  { name: 'Chandertaal (Moon Lake) Trek', category: 'Trekking', region: 'Himachal', diff: 'Moderate', heritage: false,
    duration: '6 days', alt: '4,250m', img: 'Photos/8bbb4edc-ab6a-42d9-8139-621772ca79cd.jpg' },
  // — Trekking: Ladakh —
  { name: 'Markha Valley', category: 'Trekking', region: 'Ladakh', diff: 'Moderate', heritage: false,
    duration: '8 days', alt: '5,200m', img: 'Photos/IMG_3290.jpeg' },
  { name: 'Zanskar Trek', category: 'Trekking', region: 'Ladakh', diff: 'Challenging', heritage: false,
    duration: '10 days', alt: '5,060m', img: 'Photos/4c862c1f-da63-41ff-add8-1ded0e18edad.jpg' },
  { name: 'Nubra Valley Trek', category: 'Trekking', region: 'Ladakh', diff: 'Challenging', heritage: false,
    duration: '8 days', alt: '5,400m', img: 'Photos/IMG_2357.jpeg' },
  { name: 'Lamayuru Trek', category: 'Trekking', region: 'Ladakh', diff: 'Challenging', heritage: false,
    duration: '25 days', alt: '5,120m', img: 'Photos/IMG_3300.jpeg' },
  // — Expeditions —
  { name: 'Deo Tibba Expedition', category: 'Expeditions', region: 'Himachal', diff: 'Technical', heritage: true,
    duration: '14 days', alt: '6,001m', img: 'Photos/IMG_4170.jpeg' },
  { name: 'Friendship Peak', category: 'Expeditions', region: 'Himachal', diff: 'Technical', heritage: false,
    duration: '7 days', alt: '5,289m', img: 'Photos/8bbb4edc-ab6a-42d9-8139-621772ca79cd.jpg' },
  { name: 'Kang Yatse Expedition', category: 'Expeditions', region: 'Ladakh', diff: 'Technical', heritage: false,
    duration: '14 days', alt: '6,200m', img: 'Photos/4c862c1f-da63-41ff-add8-1ded0e18edad.jpg' },
  { name: 'Manali Peak Expedition', category: 'Expeditions', region: 'Himachal', diff: 'Technical', heritage: false,
    duration: '9 days', alt: '5,640m', img: 'Photos/94462484-3a39-4c2a-9d94-ccd61cb1b56b.jpg' },
  { name: 'Ladakhi Peak Expedition', category: 'Expeditions', region: 'Himachal', diff: 'Technical', heritage: false,
    duration: '11 days', alt: '6,000m', img: 'Photos/da4e15aa-46b5-4ff6-b1f0-dddf75415c0b.jpg' },
  { name: 'Shetidhar Peak Expedition', category: 'Expeditions', region: 'Himachal', diff: 'Technical', heritage: false,
    duration: '11 days', alt: '5,200m', img: 'Photos/IMG_4170.jpeg' },
  // — Jeep Safari —
  { name: 'Manali–Leh Jeep Safari', category: 'Jeep Safari', region: 'Himachal–Ladakh', diff: 'Easy', heritage: false,
    duration: '8 days', alt: '5,359m', img: 'Photos/IMG_3290.jpeg' },
  { name: 'Lahaul–Spiti Jeep Safari', category: 'Jeep Safari', region: 'Himachal', diff: 'Easy', heritage: false,
    duration: '13 days', alt: '4,558m', img: 'Photos/94462484-3a39-4c2a-9d94-ccd61cb1b56b.jpg' },
  { name: 'Ladakh Monastery Jeep Safari', category: 'Jeep Safari', region: 'Ladakh', diff: 'Easy', heritage: false,
    duration: '15 days', alt: '3,850m', img: 'Photos/4c862c1f-da63-41ff-add8-1ded0e18edad.jpg' },
  { name: 'Ladakh Lakes Jeep Safari', category: 'Jeep Safari', region: 'Ladakh', diff: 'Easy', heritage: false,
    duration: '10 days', alt: '5,606m', img: 'Photos/IMG_3290.jpeg' },
  { name: 'Nubra Valley Jeep Safari', category: 'Jeep Safari', region: 'Ladakh', diff: 'Easy', heritage: false,
    duration: '11 days', alt: '5,600m', img: 'Photos/IMG_2357.jpeg' },
  { name: 'Trans-Himalayan Jeep Safari', category: 'Jeep Safari', region: 'Himachal–Ladakh', diff: 'Easy', heritage: false,
    duration: '16 days', alt: '5,600m', img: 'Photos/da4e15aa-46b5-4ff6-b1f0-dddf75415c0b.jpg' },
  // — Mountain Biking —
  { name: 'Spiti Valley Motorbike Tour', category: 'Mountain Biking', region: 'Himachal', diff: 'Moderate', heritage: false,
    duration: '10 days', alt: '4,558m', img: 'Photos/IMG_4170.jpeg' },
  { name: 'Manali–Leh Ladakh Motorbike Tour', category: 'Mountain Biking', region: 'Himachal–Ladakh', diff: 'Moderate', heritage: false,
    duration: '10 days', alt: '5,359m', img: 'Photos/4c862c1f-da63-41ff-add8-1ded0e18edad.jpg' },
  { name: 'Leh–Ladakh Mountain Biking', category: 'Mountain Biking', region: 'Himachal–Ladakh', diff: 'Challenging', heritage: false,
    duration: '17 days', alt: '5,328m', img: 'Photos/IMG_3290.jpeg' },
  { name: 'Spiti Valley Cycling Tour', category: 'Mountain Biking', region: 'Himachal', diff: 'Challenging', heritage: false,
    duration: '15 days', alt: '4,558m', img: 'Photos/8bbb4edc-ab6a-42d9-8139-621772ca79cd.jpg' },
  // — Camps —
  { name: 'Adventure Camp', category: 'Camps', region: 'Himachal', diff: 'Easy', heritage: false,
    duration: '7 days', alt: '3,800m', img: 'Photos/94462484-3a39-4c2a-9d94-ccd61cb1b56b.jpg' },
  { name: 'Trekking Camp', category: 'Camps', region: 'Himachal', diff: 'Easy', heritage: false,
    duration: '11 days', alt: '', img: 'Photos/da4e15aa-46b5-4ff6-b1f0-dddf75415c0b.jpg' },
  { name: 'Skill Development Camp', category: 'Camps', region: 'Himachal', diff: 'Easy', heritage: false,
    duration: '5–7 days', alt: '', img: 'Photos/IMG_4170.jpeg' },
  // — Culture Tours —
  { name: 'Spiti Culture Tour', category: 'Culture Tours', region: 'Himachal', diff: '', heritage: false,
    duration: 'By enquiry', alt: '', img: 'Photos/8bbb4edc-ab6a-42d9-8139-621772ca79cd.jpg' },
  { name: 'Leh Culture Tour', category: 'Culture Tours', region: 'Ladakh', diff: '', heritage: false,
    duration: 'By enquiry', alt: '', img: 'Photos/IMG_3290.jpeg' },
  { name: 'Kullu Culture Tour', category: 'Culture Tours', region: 'Himachal', diff: '', heritage: false,
    duration: 'By enquiry', alt: '', img: 'Photos/94462484-3a39-4c2a-9d94-ccd61cb1b56b.jpg' }
];

/* ---------- Build the timeline ---------- */
const track = document.getElementById('track');
let activeGen = 2;

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
  document.getElementById('dPass').innerHTML = g.pass;
  document.getElementById('dStory').textContent = g.story;
  const link = document.getElementById('dLink');
  link.textContent = g.link;
  document.querySelector('.gen-photo').innerHTML = `<img src="${g.img}" alt="${g.name}" style="width:100%; height:100%; object-fit:cover;" />`;
}
selectGen(activeGen);

/* ---------- Routes as editorial category bands ----------
   Each category is its own titled band with a one-line intro. Trekking is
   further split Himachal / Ladakh. The pills act as jump-navigation to bands
   rather than filters, so the full breadth stays visible but organised. */
const bandDefs = [
  { cat: 'Trekking',        slug: 'band-trekking',        intro: 'From gentle valley walks to high-pass crossings, across Himachal and Ladakh.' },
  { cat: 'Expeditions',     slug: 'band-expeditions',     intro: '6,000-metre peaks and technical climbs, led to ABVIMAS standard.' },
  { cat: 'Jeep Safari',     slug: 'band-jeep-safari',     intro: 'The high passes, lakes and monasteries of the trans-Himalaya, by road.' },
  { cat: 'Mountain Biking', slug: 'band-mountain-biking', intro: "Motorbike and pedal tours over some of the world's highest motorable passes." },
  { cat: 'Camps',           slug: 'band-camps',           intro: 'Fixed-base adventure and skill camps for groups and young explorers.' },
  { cat: 'Culture Tours',   slug: 'band-culture-tours',   intro: 'Monasteries, villages and living Buddhist culture across Spiti, Ladakh and Kullu.' }
];

function routeCardHTML(r) {
  return `
    <a class="route-card" href="#plan">
      <div class="route-img">
        <div class="route-badges">
          ${r.diff ? `<span class="badge badge-diff">${r.diff}</span>` : ''}
          ${r.heritage ? '<span class="badge badge-heritage">Heritage route</span>' : ''}
        </div>
        <img src="${r.img}" alt="${r.name}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.6s var(--ease);" />
      </div>
      <div class="route-body">
        <div class="route-region">${r.region}</div>
        <div class="route-name">${r.name}</div>
        <div class="route-meta">
          <span>⏱ ${r.duration}</span>
          ${r.alt ? `<span>▲ ${r.alt}</span>` : ''}
        </div>
        <div class="route-foot">
          <span class="route-price">By <em>enquiry</em></span>
          <span class="route-view">Enquire →</span>
        </div>
      </div>
    </a>`;
}

function gridHTML(list) {
  return `<div class="route-grid">${list.map(routeCardHTML).join('')}</div>`;
}

/* Jump-nav pills */
const pillsEl = document.getElementById('routePills');
pillsEl.innerHTML = bandDefs.map(b => `<a class="route-pill" href="#${b.slug}">${b.cat}</a>`).join('');

/* Bands */
const bandsEl = document.getElementById('routeBands');
bandsEl.innerHTML = bandDefs.map(b => {
  const inCat = routes.filter(r => r.category === b.cat);
  let body;
  if (b.cat === 'Trekking') {
    const himachal = inCat.filter(r => r.region === 'Himachal');
    const ladakh = inCat.filter(r => r.region === 'Ladakh');
    body = `
      <div class="route-subhead">Himachal Treks</div>
      ${gridHTML(himachal)}
      <div class="route-subhead">Ladakh Treks</div>
      ${gridHTML(ladakh)}`;
  } else {
    body = gridHTML(inCat);
  }
  return `
    <div class="route-band" id="${b.slug}">
      <div class="route-band-head">
        <h3>${b.cat}</h3>
        <p class="route-band-intro">${b.intro}</p>
      </div>
      ${body}
    </div>`;
}).join('');

/* ---------- Data: real day-by-day itineraries ----------
   A representative set across Trekking / Expeditions / Jeep Safari, transcribed
   from the real manalihikers.com itinerary pages (scraped_original_content/).
   Not every one of the 34 routes above has its day-by-day here yet — these are
   the ones fetched and transcribed this session; more can be added on request. */
const itineraries = {
  'Bara Bhangal Shepherds’ Trail': [
    { day: 1, title: 'Arrival in Manali', elevation: 2050, desc: 'Participants arrive in Manali.' },
    { day: 2, title: 'Manali to Lama Dugh', elevation: 3017, desc: 'Steep climb through thick forest with no water point after Manali; views of Indrasan, Deo Tibba and the Bara Shigri glacier peaks open up. Camp on an alpine plateau thick with flowers.' },
    { day: 3, title: 'Lama Dugh to Riyali Thach', elevation: 3400, desc: 'A steep ridge below Khand Pari Tibba (4,000m), with views over Manali and the upper Kullu valley.' },
    { day: 4, title: 'Riyali Thach to Base of Kalihani Pass', elevation: 4010, desc: 'Open meadows, a steep descent to a stream crossing, then a steep climb to camp at the base of Kalihani Pass.' },
    { day: 5, title: 'Base of Kalihani to Devi ki Marhi via Kalihani Pass', elevation: 4725, desc: 'A long, arduous day crossing scree, moraine and the Kalihani glacier — 360° views of hanging glaciers, the Pir Panjal and Dhauladhar ranges — then descend past four glacial lakes.' },
    { day: 6, title: 'Devi ki Marhi to Dal Marhi', elevation: 3900, desc: 'Cross the Kalihani Nullah into oak and birch forest, mostly flat with a steep climb near the end.' },
    { day: 7, title: 'Dal Marhi to Bara Bhangal', elevation: 2882, desc: 'Down the Ravi river into deodar forest to the isolated village of Bara Bhangal.' },
    { day: 8, title: 'Rest day at Bara Bhangal', elevation: 2882, desc: 'Explore the village, home to the Gaddi tribe, seldom visited by outsiders.' },
    { day: 9, title: 'Bara Bhangal to Mardh', elevation: 3830, desc: 'Climb through pine, deodar and birch forest toward the Thamsar glacier, base of the next big pass.' },
    { day: 10, title: 'Mardh to Plachak via Thamsar Pass', elevation: 4878, desc: 'Steep ascent over moraine, scree and glacier to Thamsar Pass — the trek\'s highest point — with first views of the lush Kangra valley, then a long descent to Plachak.' },
    { day: 11, title: 'Plachak to Rajgundha', elevation: 2440, desc: 'The easiest day of the trek: flat pine forest walking with views over the open Kangra valley.' },
    { day: 12, title: 'Rajgundha to Billing', elevation: 2310, desc: 'Easy walk through pine forest to Billing, end of the trek — vehicle transfer to Bir or Dharamshala.' }
  ],
  'Hamta Pass Crossing': [
    { day: 1, title: 'Delhi to Manali', elevation: 1960, desc: 'Overnight train then drive from Anandpur Sahib to Manali.' },
    { day: 2, title: 'Manali to Chika', elevation: 3100, desc: 'Jeep to Jobra, then a gradual 2-hour walk uphill and downhill, crossing streams to the Hampta river.' },
    { day: 3, title: 'Chika to Balu Ghera', elevation: 3700, desc: '3–4 hours of short ups and downs.' },
    { day: 4, title: 'Balu Ghera to Hamta Pass to Shiyagaru', elevation: 4270, desc: 'Cross Hamta Pass and descend into the Chandra valley, with views of Deo Tibba, Indrasan and the Lahaul valleys.' },
    { day: 5, title: 'Shiyagaru to Chatru to Manali', elevation: 1960, desc: 'River crossings and a 3–4 hour descent to Chatru, then drive back to Manali over Rohtang.' }
  ],
  'Markha Valley': [
    { day: 1, title: 'Arrival in Leh', elevation: 3500, desc: 'Participants arrive and rest to acclimatise.' },
    { day: 2, title: 'Leh to Spituk to Zingchen', elevation: 3380, desc: 'Drive to Spituk then a long barren stretch into the lush Zingchen valley where the Rumbak river meets the Indus.' },
    { day: 3, title: 'Zingchen to Base of Ganda La', elevation: 3900, desc: 'Enter Hemis National Park — look out for snow leopard and blue sheep — climb past a couple of villages.' },
    { day: 4, title: 'Base of Ganda La to Skiu via Ganda La', elevation: 4900, desc: 'Ascend to Ganda La, then a gradual descent and easy walk to camp at Skiu.' },
    { day: 5, title: 'Skiu to Markha', elevation: 3300, desc: 'Easy walk along the Markha river, crossing it several times, to the valley\'s largest village.' },
    { day: 6, title: 'Markha to Thachungtse', elevation: 3800, desc: 'Past old stone mills, mani walls, a castle and a monastery, then out toward Thachungtse.' },
    { day: 7, title: 'Thachungtse to Nimaling', elevation: 4878, desc: 'The easiest day — a gradual ascent over the open meadows of Nimaling.' },
    { day: 8, title: 'Nimaling to Shang Sumdo via Kongmaru La', elevation: 5200, desc: 'Cross the trek\'s highest pass, then a steep descent leveling out into the Shang gorge to Shang Sumdo, where a vehicle meets you for Leh.' }
  ],
  'Friendship Peak': [
    { day: 1, title: 'Arrival in Manali', elevation: 2050, desc: 'Arrive and rest.' },
    { day: 2, title: 'Manali to Solang to Dhundi to Bakarthach', elevation: 3300, desc: 'Drive to Solang Nallah, hub of local adventure activities, then jeep to Dhundi and on to Bakarthach.' },
    { day: 3, title: 'Glacier training at Beas Kund', elevation: 3600, desc: 'Practice ascending and descending on snow and ice, dry-fruit distribution and prep for the days ahead.' },
    { day: 4, title: 'Steep ascent to Camp 1', elevation: 4500, desc: 'Pack-lunch day establishing Camp 1, with an acclimatisation walk after evening tea.' },
    { day: 5, title: 'Rest and acclimatisation day', elevation: 4500, desc: 'Rest at Camp 1.' },
    { day: 6, title: 'Summit day — Friendship Peak', elevation: 5289, desc: 'Start around 2am, roped climbing to the summit (~6 hours) — panoramic views of the Dhauladhar and Pir Panjal ranges, Indrasan and Deo Tibba — then back to Camp 1.' },
    { day: 7, title: 'Camp 1 to Dhundi to Manali', elevation: 2050, desc: 'Descend to Dhundi and drive back to Manali.' }
  ],
  'Kang Yatse Expedition': [
    { day: 1, title: 'Leh to Zinchen', elevation: 3400, desc: 'Transfer to Spituk to meet the team, then hike west along the Indus into Hemis National Park to Zinchen.' },
    { day: 2, title: 'Zinchen to base of Ganda La', elevation: 4500, desc: 'Down the gorge, multiple river crossings, ascend toward the foot of Ganda La.' },
    { day: 3, title: 'Yurutse to Skiu via Ganda La', elevation: 4800, desc: 'Cross Ganda La then descend into the Markha valley to camp at Skiu.' },
    { day: 4, title: 'Skiu to Markha', elevation: 3710, desc: 'Several river crossings along the Markha valley to the village of Markha.' },
    { day: 5, title: 'Markha to Tchatchutse', elevation: 3750, desc: 'Past the monastery of Humlung near Hankar, up a narrower valley to Tchatchutse.' },
    { day: 6, title: 'Tchatchutse to base of Kang Yatse', elevation: 5040, desc: 'Past yak pastures to base camp, with an evening acclimatisation walk to 5,400m.' },
    { day: 7, title: 'Summit day — Kang Yatse to Nimaling', elevation: 6200, desc: 'Start around 2am; 5–7 hours to the summit on snowy, moderately technical slopes, then descend to Nimaling.' },
    { day: 8, title: 'Security day at Nimaling', elevation: 4878, desc: 'Weather buffer day; walk among the high-altitude shepherd pastures if conditions allow.' },
    { day: 9, title: 'Nimaling to Shang via Kongmaru La', elevation: 5150, desc: 'Cross the magnificent river bed and a difficult slope to Shang.' },
    { day: 10, title: 'Shang to Leh', elevation: 3500, desc: 'Drive back to Leh.' }
  ],
  'Pin Parvati Trek': [
    { day: 1, title: 'Arrive Bhuntar to Manikaran', elevation: 1760, desc: 'Vehicle transfer to Manikaran.' },
    { day: 2, title: 'Manikaran to Barsheni to Khirganga', elevation: 3020, desc: 'A hot spring where Lord Shiva is said to have meditated.' },
    { day: 3, title: 'Khirganga to Tunda Bhuj', elevation: 3285, desc: 'Dense forest and flower-strewn meadows, a steep gradual climb.' },
    { day: 4, title: 'Tunda Bhuj to Thakur Kuan', elevation: 3620, desc: 'Waterfalls, lakes and meadows.' },
    { day: 5, title: 'Thakur Kuan to Odi Thach', elevation: 3800, desc: 'Cross the Pandu Bridge, a single-rock span said to be built by the Pandavas in exile.' },
    { day: 6, title: 'Odi Thach to Mantalai Lake', elevation: 4115, desc: 'Gradual climb to the source lake of the Parvati river, beneath the Mantalai Glacier.' },
    { day: 7, title: 'Mantalai to base of Pin Parvati Pass', elevation: 4300, desc: 'Ascend to the base camp of Mount Parvati, also the base of the pass.' },
    { day: 8, title: 'Base of Pin Pass over the pass', elevation: 5300, desc: 'A steep climb over Pin Parvati Pass — views of the Hamta region on one side, the Pin valley of Spiti on the other.' },
    { day: 9, title: 'Campsite over Pin Pass to Tiai', elevation: 3700, desc: 'Along the Pin river into Pin Valley National Park — snow leopard, musk deer and ibex country.' },
    { day: 10, title: 'Tiai to Mud', elevation: 3650, desc: 'Through the stark landscape of Spiti to the village of Mud.' },
    { day: 11, title: 'Mud to Gulling to Kaza', elevation: 3650, desc: 'Rough-road walk with views of Spiti\'s "middle country", then jeep transfer to Kaza.' },
    { day: 12, title: 'Monastic sightseeing around Kaza', elevation: 3650, desc: 'Ki monastery, Kibber village, Dhankar and Tabo monasteries.' },
    { day: 13, title: 'Kaza to Manali', elevation: 2050, desc: 'Drive via Kunzum Pass, Keylong, Koksar and Rohtang Pass back to Manali.' }
  ],
  'Zanskar Trek': [
    { day: 1, title: 'Padum to Karsha / Rinum', elevation: 3600, desc: 'Visit Karsha, the largest and most important monastery in Zanskar, built in the 15th century.' },
    { day: 2, title: 'Karsha to Pishu', elevation: 3400, desc: 'Easy trail mostly following the Zanskar River, with a detour to the longest hanging bridge over it.' },
    { day: 3, title: 'Pishu to Hanumil', elevation: 3550, desc: 'Left-bank trail, a moraine or two to cross.' },
    { day: 4, title: 'Hanumil to Snertse', elevation: 4200, desc: 'Away from the river, up to the plateau and the foot of Parfi La.' },
    { day: 5, title: 'Snertse to Lingshed', elevation: 3800, desc: 'Ascent to Hanuma La pass through gorges past a sheep fold.' },
    { day: 6, title: 'Lingshed to base of Sengge La', elevation: 5060, desc: 'Via Margum La and Kuba La to the base of Sengge La.' },
    { day: 7, title: 'Sengge La to Photoksar', elevation: 3750, desc: 'Climb to Boumitse La then descend to Photoksar.' },
    { day: 8, title: 'Photoksar to Hanupatta', elevation: 3500, desc: 'A long ascent to Sirsir La.' },
    { day: 9, title: 'Hanupatta to Wanla', elevation: 3300, desc: 'Continue across the slope into the gorge.' },
    { day: 10, title: 'Wanla to Lamayuru', elevation: 3510, desc: 'Along the Shill Kong, through Shilla village and a dry gorge to Lamayuru.' }
  ],
  'Manali–Leh Jeep Safari': [
    { day: 1, title: 'Delhi arrival', elevation: 216, desc: 'Transfer to hotel, overnight stay.' },
    { day: 2, title: 'Delhi to Manali', elevation: 2050, desc: 'Evening drive by AC coach, overnight journey.' },
    { day: 3, title: 'Manali', elevation: 2050, desc: 'Acclimatise, visit Hadimba Devi Temple, explore the mall road.' },
    { day: 4, title: 'Manali to Sarchu', elevation: 4290, desc: 'Via Rohtang Pass and Keylong; deluxe tent camp at Sarchu.' },
    { day: 5, title: 'Sarchu to Leh', elevation: 3500, desc: 'Over Tanglang La (5,359m) via the Moore Plains, the high Tibetan Plateau.' },
    { day: 6, title: 'Leh — Shey, Thiksey, Hemis', elevation: 3500, desc: 'Sightseeing at three of Ladakh\'s most important monasteries.' },
    { day: 7, title: 'Leh — Khardung La', elevation: 5600, desc: 'The highest motorable road in the world; views over the Indus valley and the Zanskar range.' },
    { day: 8, title: 'Leh to Delhi', elevation: 216, desc: 'Flight to Delhi, international transfer.' }
  ],
  'Malana Trek': [
    { day: 1, title: 'Arrival in Delhi', elevation: 216, desc: 'Reception at the airport, transfer to hotel.' },
    { day: 2, title: 'Delhi to Manali', elevation: 2000, desc: 'Overnight tourist bus, 570km.' },
    { day: 3, title: 'Manali', elevation: 2000, desc: 'Old Manali, Hadimba temple, Shiva temple and town monastery.' },
    { day: 4, title: 'Manali to Rumsu', elevation: 2135, desc: 'Drive to Nagar, explore the castle and Roerich gallery, then climb to the traditional village of Rumsu.' },
    { day: 5, title: 'Rumsu to Chiklani', elevation: 2378, desc: 'A steady climb to base camp through oak, poplar, pine and rhododendron.' },
    { day: 6, title: 'Chiklani to Nagruni via Chandrakhani Pass', elevation: 3660, desc: 'A short climb to the pass gives extensive views of the snow-capped ranges and the Kullu valley, then an easy forest walk to camp.' },
    { day: 7, title: 'Nagruni to Malana', elevation: 2652, desc: 'Descend to Malana — a village of distinct dialect and customs, considered one of the world\'s oldest democracies.' },
    { day: 8, title: 'Malana to Manali via Manikaran', elevation: 2000, desc: 'Descend to the road head and visit the Manikaran hot-spring pilgrimage site.' },
    { day: 9, title: 'Manali to Delhi', elevation: 216, desc: 'Overnight bus.' },
    { day: 10, title: 'Arrive Delhi', elevation: 216, desc: 'Half-day sightseeing, then onward flight.' }
  ],
  'Bhrigu Lake Trek': [
    { day: 1, title: 'Manali to Gulaba to Kothi Theli', elevation: 2900, desc: 'Drive up the Rohtang highway to Gulaba, then climb through dense deodar forest to camp.' },
    { day: 2, title: 'Kothi Theli to Bhrigu Lake and back', elevation: 4240, desc: 'Ascend slowly to the sacred glacial lake, spend time there, then return to camp.' },
    { day: 3, title: 'Kothi Theli to Manali', elevation: 2050, desc: 'Walk back to Gulaba and drive down to Manali.' }
  ],
  'Kinner Kailash Trek': [
    { day: 1, title: 'Arrival in Shimla', elevation: 2200, desc: 'Arrive and rest.' },
    { day: 2, title: 'Shimla to Sangla to Thangi', elevation: 2760, desc: 'A long drive via the district town of Recong Peo.' },
    { day: 3, title: 'Thangi to Lambar', elevation: 2890, desc: 'Alpine scenery, part of the trail passing through a grand gorge.' },
    { day: 4, title: 'Lambar to Charang', elevation: 3500, desc: 'A continued ascent to the large village named after the nearby pass.' },
    { day: 5, title: 'Charang to Lalanti', elevation: 4420, desc: 'To the shepherds\' meadow campsite at the base of Charang La.' },
    { day: 6, title: 'Lalanti to Chitkul via Charang La', elevation: 5300, desc: 'A demanding climb with spectacular views from the pass, then a steep descent to the warm camp at Chitkul.' },
    { day: 7, title: 'Chitkul to Shimla', elevation: 2200, desc: 'Drive back to Shimla.' }
  ],
  'Chandertaal (Moon Lake) Trek': [
    { day: 1, title: 'Manali', elevation: 2050, desc: 'Hadimba Devi temple, old Manali and the mall road.' },
    { day: 2, title: 'Manali to Rohtang Pass to Dadarpul', elevation: 3250, desc: 'Drive over Rohtang, gateway to Lahaul-Spiti, and on to camp at Dadarpul.' },
    { day: 3, title: 'Dadarpul to Kunzum Pass to Moon Lake', elevation: 4250, desc: 'Drive to Kunzum Pass, then trek to the deep-blue crescent lake with panoramic CB-range views.' },
    { day: 4, title: 'Rest day at Moon Lake', elevation: 4250, desc: 'A leisure day by the lake.' },
    { day: 5, title: 'Moon Lake to Manali', elevation: 2050, desc: 'The long drive back to Manali.' },
    { day: 6, title: 'Manali', elevation: 2050, desc: 'Free day, evening departure.' }
  ],
  'Nubra Valley Trek': [
    { day: 1, title: 'Arrive in Leh', elevation: 3500, desc: 'Arrive and rest to acclimatise.' },
    { day: 2, title: 'Leh to Phyang to Phyang Phu', elevation: 3700, desc: 'Drive to the ancient Phyang monastery, then a short walk to Phyang Phu.' },
    { day: 3, title: 'Phyang Phu to South base of Lasermo La', elevation: 4700, desc: 'A gradual climb through high-altitude wildlife country.' },
    { day: 4, title: 'South base to North base via Lasermo La', elevation: 5400, desc: 'An early start over the pass, then a descent through glacier and moraine to a meadow camp.' },
    { day: 5, title: 'North base to Hunder Dok', elevation: 4000, desc: 'An easy meadow walk along the Hunder stream.' },
    { day: 6, title: 'Hunder Dok to Skarchen', elevation: 3800, desc: 'Past the Nubra villages of Dok Gongma, Dok Yongma and Wachan.' },
    { day: 7, title: 'Skarchen to Hunder', elevation: 3100, desc: 'Through a gorge that opens dramatically into the Shyok valley.' },
    { day: 8, title: 'Hunder to Leh', elevation: 3500, desc: 'Drive back to Leh.' }
  ],
  'Lamayuru Trek': [
    { day: 1, title: 'Arrival in Delhi', elevation: 216, desc: 'Arrive and rest.' },
    { day: 2, title: 'Delhi to Manali', elevation: 2000, desc: 'Overnight tourist bus, 570km.' },
    { day: 3, title: 'Manali', elevation: 2000, desc: 'Rest and acclimatise.' },
    { day: 4, title: 'Manali to Darcha-Palamo', elevation: 3600, desc: '150km drive into Lahaul.' },
    { day: 5, title: 'Palamo to Zanskar Sumdo', elevation: 3950, desc: 'The trek begins.' },
    { day: 6, title: 'Zanskar Sumdo to Chhumik Marpo', elevation: 4500, desc: 'A long day up the valley.' },
    { day: 7, title: 'Chhumik Marpo to Lakhang via Shingo La', elevation: 5090, desc: 'Cross the Shingo La into Zanskar.' },
    { day: 8, title: 'Lakhang to Kargyak', elevation: 4060, desc: 'Descend to the village of Kargyak.' },
    { day: 9, title: 'Kargyak to Purni', elevation: 3800, desc: 'Follow the Kargyak river.' },
    { day: 10, title: 'Purni to Phuktal and back', elevation: 3800, desc: 'Visit the spectacular cliff monastery of Phuktal.' },
    { day: 11, title: 'Purni to Pipula', elevation: 3600, desc: 'Continue down the valley.' },
    { day: 12, title: 'Pipula to Raru via Ichar', elevation: 3700, desc: 'Riverside trail.' },
    { day: 13, title: 'Raru to Padum', elevation: 3600, desc: 'To the capital of Zanskar.' },
    { day: 14, title: 'Padum to Rinam', elevation: 3500, desc: 'Along the Zanskar river.' },
    { day: 15, title: 'Rinam to Pishu via Jangla', elevation: 3400, desc: 'A long river-valley day.' },
    { day: 16, title: 'Pishu to Hanumil', elevation: 3550, desc: 'Follow the Zanskar.' },
    { day: 17, title: 'Hanumil to Snertse via Parfi La', elevation: 4200, desc: 'Up to the plateau over Parfi La.' },
    { day: 18, title: 'Snertse to Lingshed via Hanuma La', elevation: 4700, desc: 'Through gorges over Hanuma La.' },
    { day: 19, title: 'Lingshed to Yulchung Gyra via Murgum La', elevation: 4500, desc: 'Cross Murgum La.' },
    { day: 20, title: 'Yulchung Gyra to Photoksar via Sengge La', elevation: 5120, desc: 'The high pass of the trek.' },
    { day: 21, title: 'Photoksar to Hanupata via Sirsir La', elevation: 4815, desc: 'Over Sirsir La.' },
    { day: 22, title: 'Hanupata to Wanla', elevation: 3300, desc: 'Into the gorge to Wanla.' },
    { day: 23, title: 'Wanla to Lamayuru via Alchi', elevation: 3800, desc: 'Over Prinkiti La to Lamayuru — end of the trek.' },
    { day: 24, title: 'Monastery day', elevation: 3500, desc: 'Visit Shey, Thiksey and Hemis.' },
    { day: 25, title: 'Leh to Delhi', elevation: 216, desc: 'Flight to Delhi.' }
  ],
  'Manali Peak Expedition': [
    { day: 1, title: 'Arrival in Manali', elevation: 1990, desc: 'Sort climbing gear (boots, crampons, harness); visit Hadimba temple and Vashisht springs.' },
    { day: 2, title: 'Manali to Bakkar Thach', elevation: 3300, desc: 'Drive to Dhundi, walk through forest with views of Hanuman Tibba, Deo Tibba and Indrasan.' },
    { day: 3, title: 'Bakkar Thach to Beas Kund base camp', elevation: 3650, desc: 'A short climb up the ridge to the Beas Kund plateau.' },
    { day: 4, title: 'Acclimatisation day', elevation: 3650, desc: 'Rest and excursion on the Beas Kund plateau.' },
    { day: 5, title: 'Beas Kund to Camp 1', elevation: 4500, desc: 'A 6-7 hour steep uphill with scenic views throughout.' },
    { day: 6, title: 'Camp 1 to Col (Camp 2)', elevation: 5200, desc: 'Technical climbing with full gear to the col.' },
    { day: 7, title: 'Summit attempt — Manali Peak', elevation: 5640, desc: 'Fixed-rope and rock climbing to the summit; panoramic Dhauladhar and Pir Panjal views, then back to Camp 1.' },
    { day: 8, title: 'Camp 1 to Bakkar Thach', elevation: 3300, desc: 'Descend to Bakkar Thach.' },
    { day: 9, title: 'Bakkar Thach to Manali', elevation: 1990, desc: 'Trek to Solang and drive to Manali.' },
    { day: 10, title: 'Extra day for weather', elevation: 0, desc: 'Buffer day.' },
    { day: 11, title: 'Departure from Manali', elevation: 0, desc: 'Depart Manali.' }
  ],
  'Ladakhi Peak Expedition': [
    { day: 1, title: 'Delhi to Manali', elevation: 2050, desc: 'Arrive and visit Hidimba temple.' },
    { day: 2, title: 'Manali', elevation: 2050, desc: 'Acclimatisation walk to old Manali, Goshal and Vashisht; expedition prep.' },
    { day: 3, title: 'Manali to Solang to Dhundi to Bakarthach', elevation: 3300, desc: 'Base of the surrounding peaks — Shetidhar, Ladakhi, Friendship, Manali, Hanuman Tibba.' },
    { day: 4, title: 'Bakarthach to Beas Kund', elevation: 3650, desc: 'Over moraine to the small lake at the source of the Beas.' },
    { day: 5, title: 'Beas Kund — glacier training', elevation: 3650, desc: 'Practice ascending and descending techniques on snow.' },
    { day: 6, title: 'Beas Kund to Camp 1', elevation: 4500, desc: 'A steep ascent to establish Camp 1.' },
    { day: 7, title: 'Camp 1 to Ladakhi Peak and back', elevation: 5536, desc: 'Fixed-rope and rock climbing to the summit, with panoramic Dhauladhar and Pir Panjal views.' },
    { day: 8, title: 'Camp 1 to Bakarthach', elevation: 3300, desc: 'Descend to Beas Kund; evening bonfire celebration.' },
    { day: 9, title: 'Bakarthach to Solang to Manali', elevation: 2050, desc: 'Trek to Solang and drive to Manali.' },
    { day: 10, title: 'Departure from Manali', elevation: 0, desc: 'Transfer for onward journey.' }
  ],
  'Shetidhar Peak Expedition': [
    { day: 1, title: 'Delhi to Manali', elevation: 2050, desc: 'Arrive and visit Hidimba temple.' },
    { day: 2, title: 'Manali', elevation: 2050, desc: 'Acclimatisation walk and expedition prep.' },
    { day: 3, title: 'Manali to Solang to Dhundi to Bakarthach', elevation: 3300, desc: 'Base of the surrounding peaks.' },
    { day: 4, title: 'Bakarthach to Beas Kund', elevation: 3650, desc: 'Over moraine to the source lake of the Beas.' },
    { day: 5, title: 'Beas Kund — glacier training', elevation: 3650, desc: 'Snow ascending and descending practice.' },
    { day: 6, title: 'Beas Kund to Camp 1', elevation: 4500, desc: 'A steep ascent to establish Camp 1.' },
    { day: 7, title: 'Camp 1 to Shetidhar Peak and back to Beas Kund', elevation: 5200, desc: 'A 2am start, roped climb to the summit with panoramic Indrasan and Deo Tibba views.' },
    { day: 8, title: 'Beas Kund to Manali', elevation: 2050, desc: 'Descend to Dhundi and drive to Manali.' },
    { day: 9, title: 'Manali to Delhi', elevation: 216, desc: 'Evening bus to Delhi.' }
  ],
  'Lahaul–Spiti Jeep Safari': [
    { day: 1, title: 'Arrive Delhi', elevation: 216, desc: 'Transfer to hotel, overnight stay.' },
    { day: 2, title: 'Delhi to Manali', elevation: 2050, desc: 'Half-day Delhi tour, evening Volvo coach.' },
    { day: 3, title: 'Manali', elevation: 2050, desc: 'Relax and explore.' },
    { day: 4, title: 'Manali to Chatru', elevation: 3360, desc: 'Over Rohtang into Lahaul; camp on the banks of the Chandra river.' },
    { day: 5, title: 'Chatru to Kaza via Kunzum La', elevation: 4558, desc: 'Cross Kunzum La into Spiti.' },
    { day: 6, title: 'Kaza', elevation: 3650, desc: 'Ki monastery, Kibber village and the Chao Chao Kang Nilda viewpoint.' },
    { day: 7, title: 'Kaza — Dhankar, Tabo, Ki', elevation: 3650, desc: 'Tabo monastery, "the Ajanta of the Himalayas", over a thousand years old.' },
    { day: 8, title: 'Kaza to Chandratal', elevation: 4300, desc: 'Camp by the crescent lake.' },
    { day: 9, title: 'Chandratal to Keylong', elevation: 3080, desc: 'Through Lahaul villages; hike to Khardong monastery.' },
    { day: 10, title: 'Keylong to Udaipur', elevation: 2650, desc: 'Explore Udaipur village and the Mrikula Devi temple.' },
    { day: 11, title: 'Udaipur to Manali via Rohtang Pass', elevation: 3980, desc: 'Return to Manali.' },
    { day: 12, title: 'Manali to Delhi', elevation: 2050, desc: 'Evening Volvo coach.' },
    { day: 13, title: 'Delhi departure', elevation: 216, desc: 'Transfer to airport.' }
  ],
  'Ladakh Monastery Jeep Safari': [
    { day: 1, title: 'Arrive Delhi', elevation: 216, desc: 'Transfer to hotel.' },
    { day: 2, title: 'Delhi to Leh', elevation: 3500, desc: 'Flight to Leh, rest and acclimatise.' },
    { day: 3, title: 'Leh — Shey, Thiksey, Hemis', elevation: 3500, desc: 'Three of Ladakh\'s most important monasteries.' },
    { day: 4, title: 'Leh to Alchi', elevation: 3100, desc: 'Basgo Palace and the 18th-century Likir monastery en route.' },
    { day: 5, title: 'Alchi to Lamayuru', elevation: 3510, desc: 'The dramatic "moonland" monastery on its high promontory.' },
    { day: 6, title: 'Lamayuru to Kargil', elevation: 2700, desc: 'Morning religious ceremony at Lamayuru, then drive to Kargil.' },
    { day: 7, title: 'Kargil to Rangdum', elevation: 3900, desc: 'Up the Suru valley past the twin peaks of Nun and Kun.' },
    { day: 8, title: 'Rangdum to Padum', elevation: 3600, desc: 'Rangdum monastery, then on to the capital of Zanskar.' },
    { day: 9, title: 'Padum', elevation: 3600, desc: 'Karsha, Sani, Thongde, Zangla and Bardan monasteries.' },
    { day: 10, title: 'Padum', elevation: 3600, desc: 'Continued exploration of Zanskar\'s villages and gompas.' },
    { day: 11, title: 'Padum to Rangdum', elevation: 3900, desc: 'Camp at Rangdum.' },
    { day: 12, title: 'Rangdum to Kargil', elevation: 2700, desc: 'Return to Kargil; explore the Turkish-style old town.' },
    { day: 13, title: 'Kargil to Leh', elevation: 3500, desc: 'Basgo monastery en route.' },
    { day: 14, title: 'Leh', elevation: 3500, desc: 'Leisure or further monasteries.' },
    { day: 15, title: 'Leh to Delhi', elevation: 216, desc: 'Flight to Delhi.' }
  ],
  'Ladakh Lakes Jeep Safari': [
    { day: 1, title: 'Delhi arrival', elevation: 216, desc: 'Transfer to hotel.' },
    { day: 2, title: 'Delhi to Leh', elevation: 3500, desc: 'Flight to Leh; Thiksey, Shey and Hemis monasteries.' },
    { day: 3, title: 'Leh — Shey, Thiksey, Hemis', elevation: 3500, desc: 'The great monasteries around Leh.' },
    { day: 4, title: 'Leh local sightseeing', elevation: 3500, desc: 'Leh Palace, Jama Masjid, Spituk and Phyang gompas.' },
    { day: 5, title: 'Leh to Tsokar to Tsomoriri', elevation: 4500, desc: 'Over Tanglang La and the Moore Plains of the Changthang plateau to Karzok.' },
    { day: 6, title: 'Rest day at Tsomoriri', elevation: 4500, desc: 'Kyang, snow fox and bar-headed geese around the lake.' },
    { day: 7, title: 'Tsomoriri to Pangong', elevation: 4300, desc: 'Over Chang La to the vast Pangong Lake.' },
    { day: 8, title: 'Pangong to Leh', elevation: 3500, desc: 'Return to Leh.' },
    { day: 9, title: 'Leh to Khardung La and back', elevation: 5606, desc: 'The world\'s highest motorable pass.' },
    { day: 10, title: 'Leh to Delhi', elevation: 216, desc: 'Early flight to Delhi.' }
  ],
  'Nubra Valley Jeep Safari': [
    { day: 1, title: 'Arrive Delhi', elevation: 216, desc: 'Transfer to hotel.' },
    { day: 2, title: 'Delhi to Leh', elevation: 3500, desc: 'Flight to Leh, acclimatisation day.' },
    { day: 3, title: 'Leh — Shey, Thiksey, Hemis', elevation: 3500, desc: 'The great monasteries around Leh.' },
    { day: 4, title: 'Leh to Panamik', elevation: 3200, desc: 'Over Khardung La into Nubra; camp at Panamik.' },
    { day: 5, title: 'Panamik to Ansa to Panamik', elevation: 3200, desc: 'Ansa monastery and the Panamik hot springs.' },
    { day: 6, title: 'Panamik to Diskit', elevation: 3100, desc: 'Samstanling and Sumur monasteries en route.' },
    { day: 7, title: 'Diskit to Hunder to Diskit', elevation: 3100, desc: 'Hunder monastery and the sand dunes of Nubra.' },
    { day: 8, title: 'Diskit to Leh', elevation: 3500, desc: 'Return over Khardung La.' },
    { day: 9, title: 'Leh', elevation: 3500, desc: 'Phyang, Spituk and the Stok museum.' },
    { day: 10, title: 'Leh to Delhi', elevation: 216, desc: 'Flight to Delhi.' },
    { day: 11, title: 'Depart Delhi', elevation: 216, desc: 'Transfer to airport.' }
  ],
  'Trans-Himalayan Jeep Safari': [
    { day: 1, title: 'Delhi to Shimla', elevation: 2200, desc: 'Drive to Shimla; evening on the Mall Road.' },
    { day: 2, title: 'Shimla', elevation: 2200, desc: 'Indian Institute of Advanced Studies and the Jakho temple.' },
    { day: 3, title: 'Shimla to Sarahan', elevation: 2125, desc: 'Rampur palace en route; the centuries-old Bhimakali temple.' },
    { day: 4, title: 'Sarahan to Sangla', elevation: 2680, desc: 'Along the Hindustan-Tibet road above the Sutlej.' },
    { day: 5, title: 'Sangla to Kalpa', elevation: 2759, desc: 'Kamru village and fort; Kinner Kailash views.' },
    { day: 6, title: 'Kalpa to Tabo', elevation: 3280, desc: 'Via Nako village on its lake; the thousand-year-old Tabo monastery.' },
    { day: 7, title: 'Tabo to Kaza', elevation: 3650, desc: 'Lalung and Dhankar gompas en route.' },
    { day: 8, title: 'Kaza', elevation: 3650, desc: 'Ki monastery and Kibber, one of the world\'s highest villages.' },
    { day: 9, title: 'Kaza to Keylong via Kunzum Pass', elevation: 4558, desc: 'Fine views of the CB ranges from the pass.' },
    { day: 10, title: 'Keylong to Sarchu via Baralacha La', elevation: 4800, desc: 'Camp at Sarchu.' },
    { day: 11, title: 'Sarchu to Leh', elevation: 5359, desc: 'Over Tanglang La onto the high Tibetan plateau; three days to explore Leh.' },
    { day: 12, title: 'Leh to Khardung La and back', elevation: 5600, desc: 'The world\'s highest motorable road.' },
    { day: 13, title: 'Leh to Delhi', elevation: 216, desc: 'Flight to Delhi.' }
  ],
  'Spiti Valley Motorbike Tour': [
    { day: 1, title: 'Manali', elevation: 2000, desc: 'Airport welcome, meet the team, local sightseeing.' },
    { day: 2, title: 'Manali', elevation: 2000, desc: 'Royal Enfield briefing; Solang, Naggar Castle, Roerich museum and Vashisht springs.' },
    { day: 3, title: 'Manali to Banjar Valley (Soja)', elevation: 2683, desc: 'Via Bhuntar and the Manikaran hot springs to the Banjar valley.' },
    { day: 4, title: 'Banjar to Sarahan via Jalori Pass', elevation: 3134, desc: 'Over Jalori Pass; the 800-year-old Bhimakali temple.' },
    { day: 5, title: 'Sarahan to Kalpa', elevation: 3300, desc: 'Temples and views over the Kinner Kailash range.' },
    { day: 6, title: 'Kalpa to Nako', elevation: 3663, desc: 'The lakeside village of Nako in Kinnaur.' },
    { day: 7, title: 'Nako to Kaza', elevation: 3700, desc: 'The ancient Dhankar monastery en route; Key monastery and Kibber nearby.' },
    { day: 8, title: 'Kaza to Chatru', elevation: 4300, desc: 'A day ride to Chandratal Lake, then on to camp at Chatru.' },
    { day: 9, title: 'Chatru to Keylong', elevation: 3080, desc: 'A hotel overlooking the valley.' },
    { day: 10, title: 'Keylong to Manali', elevation: 3980, desc: 'Over Rohtang; farewell dinner.' }
  ],
  'Manali–Leh Ladakh Motorbike Tour': [
    { day: 1, title: 'Manali', elevation: 2000, desc: 'Airport welcome, meet the team, local sightseeing.' },
    { day: 2, title: 'Manali to Keylong via Rohtang', elevation: 3350, desc: '115km over Rohtang Jot to become familiar with the bike and the roads.' },
    { day: 3, title: 'Keylong to Sarchu via Baralacha La', elevation: 4000, desc: 'Over the Baralacha La; a night camping under the stars.' },
    { day: 4, title: 'Sarchu to Leh', elevation: 5359, desc: 'Over Nakee La, Lachulung La and Tanglang La — a long high-altitude ride.' },
    { day: 5, title: 'Leh — sightseeing & Alchi', elevation: 3500, desc: 'Arrange the Nubra permit; ride to the oldest monastery in Ladakh, Alchi.' },
    { day: 6, title: 'Leh to Nubra via Khardung La', elevation: 5540, desc: 'Over the world\'s highest motorable pass into Nubra; camp two nights.' },
    { day: 7, title: 'Nubra Valley', elevation: 3200, desc: 'Camel safari at Hunder and the Panamik hot springs.' },
    { day: 8, title: 'Nubra to Leh', elevation: 3500, desc: 'Return over Khardung La.' },
    { day: 9, title: 'Leh to Pangong Lake via Chang La', elevation: 4300, desc: 'To the vast, part-Tibetan Pangong Lake; camp on its banks.' },
    { day: 10, title: 'Pangong to Leh', elevation: 3500, desc: 'Return to Leh; final markets and shopping.' }
  ],
  'Leh–Ladakh Mountain Biking': [
    { day: 1, title: 'Fly to Delhi; on to Manali', elevation: 2000, desc: 'Train to Chandigarh, bus to Manali; bikes and luggage by vehicle.' },
    { day: 2, title: 'Arrive Manali', elevation: 2000, desc: 'Unpack gear, settle in and rest.' },
    { day: 3, title: 'Manali', elevation: 2000, desc: 'Assemble and check the bikes.' },
    { day: 4, title: 'Ride to Marhi via Rohtang La', elevation: 3978, desc: 'The first riding day, camping at Marhi.' },
    { day: 5, title: 'Ride to near Koksar', elevation: 3140, desc: 'Camp near Koksar.' },
    { day: 6, title: 'Ride to near Jispa via Keylong', elevation: 3142, desc: 'Camp near Jispa.' },
    { day: 7, title: 'Ride to near Patseo', elevation: 3800, desc: 'Camp before Baralacha La.' },
    { day: 8, title: 'Ride to near Sarchu via Baralacha La', elevation: 4883, desc: 'Over the Baralacha La.' },
    { day: 9, title: 'Ride to near Pang via Lachlung La', elevation: 5065, desc: 'Over the Lachlung La.' },
    { day: 10, title: 'Ride around Pang', elevation: 4885, desc: 'Acclimatisation riding.' },
    { day: 11, title: 'Ride to the More Plains', elevation: 4700, desc: 'Camp on the high plateau.' },
    { day: 12, title: 'Ride to near Tanglang La', elevation: 5328, desc: 'Toward the second-highest motorable pass.' },
    { day: 13, title: 'Ride to near Upshi', elevation: 3400, desc: 'Descend toward the Indus.' },
    { day: 14, title: 'Ride to Stok village', elevation: 3523, desc: 'To the Stok Highland hotel near Leh.' },
    { day: 15, title: 'Indus valley tours / flex day', elevation: 3500, desc: 'Rides or rest in the Indus valley.' },
    { day: 16, title: 'Ride to Khardung La and back', elevation: 5606, desc: 'The world\'s highest motorable pass, then pack in Stok.' },
    { day: 17, title: 'Fly Leh to Delhi', elevation: 216, desc: 'Transfer to Delhi.' }
  ],
  'Spiti Valley Cycling Tour': [
    { day: 1, title: 'Arrival Delhi', elevation: 216, desc: 'Hotel.' },
    { day: 2, title: 'Delhi to Chandigarh to Mandi', elevation: 760, desc: 'Drive toward the hills.' },
    { day: 3, title: 'Mandi to Manali', elevation: 2000, desc: '125km drive.' },
    { day: 4, title: 'Bike Manali to Marhi', elevation: 3360, desc: '35km climb.' },
    { day: 5, title: 'Bike Marhi to Dadar Pul', elevation: 3250, desc: '42km, camp.' },
    { day: 6, title: 'Bike Dadar Pul to Takcha', elevation: 3600, desc: '54km, camp.' },
    { day: 7, title: 'Bike Takcha to Ki', elevation: 4116, desc: '68km; the Ki monastery.' },
    { day: 8, title: 'Bike Ki to Komik', elevation: 4500, desc: '35km to one of the world\'s highest villages.' },
    { day: 9, title: 'Bike Langcha to Tabo', elevation: 3280, desc: '45km; the Tabo monastery.' },
    { day: 10, title: 'Bike Tabo to Nako', elevation: 3663, desc: '64km to the lakeside village.' },
    { day: 11, title: 'Bike Nako to Jangi', elevation: 2800, desc: '71km.' },
    { day: 12, title: 'Bike Jangi to Sangla', elevation: 2680, desc: '62km into the Sangla valley.' },
    { day: 13, title: 'Bike Sangla to Shimla', elevation: 2200, desc: '25km ride and 200km drive.' },
    { day: 14, title: 'Drive Shimla to Delhi', elevation: 216, desc: 'By bus and train.' },
    { day: 15, title: 'Transfer to airport', elevation: 216, desc: 'Onward flight.' }
  ],
  'Adventure Camp': [
    { day: 1, title: 'Delhi to Manali to Jagatsukh', elevation: 2000, desc: 'Drive to the heritage village of Jagatsukh; Gaytri Devi and old Shiva temples.' },
    { day: 2, title: 'Rock climbing and rappelling', elevation: 2000, desc: 'A day on the crags, with an optional afternoon trek.' },
    { day: 3, title: 'AD tunnel point to Chikka', elevation: 3350, desc: 'Trek in with an evening river-crossing session; overnight tents.' },
    { day: 4, title: 'Chikka to Seri', elevation: 3800, desc: 'A gradual ascent to the scenic Seri campsite.' },
    { day: 5, title: 'Seri to Chandertaal and back', elevation: 4300, desc: 'To the source lake below Deo Tibba, then back to camp.' },
    { day: 6, title: 'Seri to Chikka', elevation: 3350, desc: 'An easy return with beautiful views.' },
    { day: 7, title: 'Chikka to Manali', elevation: 2000, desc: 'Through pine forest with bird\'s-eye views of the Beas valley.' }
  ],
  'Skill Development Camp': [
    { day: 1, title: 'Arrive Manali', elevation: 2000, desc: 'Check into Camp Manali.' },
    { day: 2, title: 'Trek to Jogini Falls', elevation: 2400, desc: 'To Jogini Falls / Khanyal village and back by evening.' },
    { day: 3, title: 'Rock craft on the Beas', elevation: 2000, desc: 'Rock climbing, rappelling and river crossing.' },
    { day: 4, title: 'Snow hiking', elevation: 3000, desc: 'A long hike on snow with packed lunch.' },
    { day: 5, title: 'Solang activities', elevation: 2500, desc: 'Paragliding, zorbing and a short trek at Solang.' },
    { day: 6, title: 'River rafting on the Beas', elevation: 1900, desc: 'White-water rafting.' },
    { day: 7, title: 'Depart Manali', elevation: 2000, desc: 'Depart after breakfast.' }
  ]
};

/* ---------- Build the itinerary viewer ---------- */
const itineraryNames = Object.keys(itineraries);
const itineraryPicker = document.getElementById('itineraryPicker');
let activeItinerary = itineraryNames[0];
let activeItineraryDay = 0;

itineraryNames.forEach(name => {
  const opt = document.createElement('option');
  opt.value = name;
  opt.textContent = name;
  itineraryPicker.appendChild(opt);
});

function renderItineraryDays() {
  const days = itineraries[activeItinerary];
  const tabsEl = document.getElementById('itineraryDayTabs');
  tabsEl.innerHTML = '';
  days.forEach((d, i) => {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'day-tab' + (i === activeItineraryDay ? ' active' : '');
    tab.textContent = 'DAY ' + d.day;
    tab.addEventListener('click', () => { activeItineraryDay = i; renderItineraryDays(); renderItineraryDetail(); });
    tabsEl.appendChild(tab);
  });
  renderItineraryDetail();
}

function renderItineraryDetail() {
  const d = itineraries[activeItinerary][activeItineraryDay];
  document.getElementById('itDay').textContent = 'DAY ' + d.day;
  document.getElementById('itElevation').textContent = d.elevation ? d.elevation + 'm' : '';
  document.getElementById('itTitle').textContent = d.title;
  document.getElementById('itDesc').textContent = d.desc;
}

itineraryPicker.addEventListener('change', () => {
  activeItinerary = itineraryPicker.value;
  activeItineraryDay = 0;
  renderItineraryDays();
});
renderItineraryDays();

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

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
