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
    era: 'Generations past · Nomadic era',
    name: 'The Khampa ancestors',
    pass: 'Across the Himalaya, unnamed passes',
    story: 'Manoj\'s family were Khampa — Buddhist nomadic herders who moved with the seasons across the Himalaya with their cattle, and in doing so traced a great number of the trek routes still walked today.',
    link: 'Read our full story →',
    img: 'Photos/IMG_1706.jpeg'
  },
  {
    era: 'Manoj\'s father · Early guiding',
    name: 'Manoj\'s father',
    pass: 'Shaminala, near Jagatsukh',
    story: 'Rather than continue the nomadic life, he settled the family at Shaminala near Jagatsukh in the Kullu valley, and began guiding treks on the routes the family already knew — turning inherited knowledge into a livelihood.',
    link: 'See our home base →',
    img: 'Photos/94462484-3a39-4c2a-9d94-ccd61cb1b56b.jpg'
  },
  {
    era: '1998–present · Manali Hikers',
    name: 'Manoj Kumar — Founder',
    // Basic Mountaineering Course isn't named on the real site — only Advanced + MOI are confirmed —
    // so it's flagged as a draft assumption (standard ABVIMAS prerequisite) pending confirmation.
    // Years are placeholders (dummy) requested for layout — none of these dates are confirmed with Manoj.
    pass: '<span class="draft-flag-inline">Basic Mountaineering Course</span> → Advanced Mountaineering Course → Method of Instruction (MOI), ABVIMAS'
      + '<br><span class="draft-flag-inline" style="margin-top:10px; display:inline-block;">2000 → 2003 → 2006 — placeholder years, confirm with Manoj</span>',
    story: 'Grew up in that same family, trekked those same routes for years, then founded Manali Hikers in 1998. Trained through ABVIMAS — from the foundations up to Advanced and Method-of-Instruction level — and has since summited ten peaks between 6,000 and 6,500 metres, training every guide on the team to that same standard.',
    link: 'See our routes →',
    img: 'Photos/manoj-about-us-real.jpg'
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

const routeCategories = ['All', 'Trekking', 'Expeditions', 'Jeep Safari', 'Mountain Biking', 'Camps', 'Culture Tours'];
let activeRouteCategory = 'All';

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

/* ---------- Build the category filter pills ---------- */
const pillsEl = document.getElementById('routePills');
routeCategories.forEach(cat => {
  const pill = document.createElement('button');
  pill.type = 'button';
  pill.className = 'route-pill' + (cat === activeRouteCategory ? ' active' : '');
  pill.textContent = cat;
  pill.addEventListener('click', () => {
    activeRouteCategory = cat;
    document.querySelectorAll('.route-pill').forEach(p => p.classList.toggle('active', p.textContent === cat));
    renderRoutes();
  });
  pillsEl.appendChild(pill);
});

/* ---------- Build the route grid (filtered by category) ---------- */
const grid = document.getElementById('routeGrid');
function renderRoutes() {
  grid.innerHTML = '';
  const filtered = activeRouteCategory === 'All' ? routes : routes.filter(r => r.category === activeRouteCategory);
  filtered.forEach(r => {
    const card = document.createElement('a');
    card.className = 'route-card';
    card.href = '#plan';
    card.innerHTML = `
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
      </div>`;
    grid.appendChild(card);
  });
}
renderRoutes();

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
    desc: "Our home base at Shaminala, near Jagatsukh in the Kullu Valley — where the family has guided from for generations."
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
