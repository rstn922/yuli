/**
 * Spatial Feed — Ultra-Smooth 60/120fps iPhone 18 Pro Max 3D Carousel
 * + 16 Real Photos from D:\local send\yuli
 * + 16 Unique Subject-Aware Editorial Collage Blueprints + Adaptive Halftone Glitch Engine
 */

(() => {
  'use strict';

  // Client brand masthead (still kept as KARINA per instruction — 1-line edit whenever ready!)
  const CLIENT_BRAND_NAME = 'YULI';

  const FALLBACK_IMAGES = Array.from({ length: 19 }, (_, i) => `assets/yuli-${String(i + 1).padStart(2, '0')}.jpg`);
  const IMAGES =
    Array.isArray(window.EDITORIAL_POST_IMAGES) && window.EDITORIAL_POST_IMAGES.length > 0
      ? window.EDITORIAL_POST_IMAGES
      : FALLBACK_IMAGES;

  /* =========================================================================
     1. All 16 Real Photos with Exact Subject Face Coordinates & Mood Palettes
        (Exact faceX / faceY measured from each 3:4 photo so crops & halftone
         always highlight her face cleanly without ever blocking her!)
     ========================================================================= */
  const POSTS = [
    {
      id: 0,
      file: 'InDown_2.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Graduation · Stone Steps',
      caption: 'A milestone wrapped in beaded champagne and grace.',
      tag: '01 / GRAD',
      image: IMAGES[0],
      face: { x: 48, y: 34 },
      zoomBox: 2.35,
      scene: 'indoor-bright',
      mood1: 'rgba(226, 178, 166, 0.34)',
      mood2: 'rgba(218, 206, 190, 0.26)',
      liked: true,
      saved: false,
    },
    {
      id: 1,
      file: 'InDown_1.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Grand Corridor · Suite',
      caption: 'Walking into a new chapter down warm wooden halls.',
      tag: '02 / HALL',
      image: IMAGES[1],
      face: { x: 50, y: 47 },
      zoomBox: 2.6,
      scene: 'indoor-moody',
      mood1: 'rgba(214, 166, 144, 0.32)',
      mood2: 'rgba(186, 198, 218, 0.24)',
      liked: false,
      saved: true,
    },
    {
      id: 2,
      file: 'InDown_2_1.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Savanna · Yellow Jeep',
      caption: 'Quiet mountain air above golden open fields.',
      tag: '03 / JEEP',
      image: IMAGES[2],
      face: { x: 47, y: 53 },
      zoomBox: 2.45,
      scene: 'outdoor-bright',
      mood1: 'rgba(234, 204, 134, 0.32)',
      mood2: 'rgba(174, 202, 232, 0.28)',
      liked: false,
      saved: false,
    },
    {
      id: 3,
      file: 'InDown_3.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Evening Gallery · Wing',
      caption: 'Soft sconce light catching every pearl detail.',
      tag: '04 / POISE',
      image: IMAGES[3],
      face: { x: 54, y: 34 },
      zoomBox: 2.45,
      scene: 'indoor-moody',
      mood1: 'rgba(224, 174, 158, 0.32)',
      mood2: 'rgba(214, 198, 186, 0.25)',
      liked: false,
      saved: false,
    },
    {
      id: 4,
      file: 'InDown_4.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Corridor · Editorial',
      caption: 'Poised in low amber light and architectural lines.',
      tag: '05 / FRAME',
      image: IMAGES[4],
      face: { x: 54, y: 39 },
      zoomBox: 2.45,
      scene: 'indoor-moody',
      mood1: 'rgba(210, 168, 148, 0.34)',
      mood2: 'rgba(188, 194, 212, 0.24)',
      liked: false,
      saved: true,
    },
    {
      id: 5,
      file: 'InDown_1_1.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Highland · Golden Hour',
      caption: 'Backlit by alpine sun and soft mountain haze.',
      tag: '06 / SOLAR',
      image: IMAGES[5],
      face: { x: 44, y: 54 },
      zoomBox: 2.05,
      scene: 'outdoor-backlit',
      mood1: 'rgba(240, 198, 166, 0.34)',
      mood2: 'rgba(196, 212, 234, 0.26)',
      liked: false,
      saved: false,
    },
    {
      id: 6,
      file: 'InDown_7.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Sky Lounge · Midnight',
      caption: 'Velvet calm beside city lights after dusk.',
      tag: '07 / DUSK',
      image: IMAGES[6],
      face: { x: 60, y: 38 },
      zoomBox: 2.45,
      scene: 'indoor-dark',
      mood1: 'rgba(188, 196, 224, 0.32)',
      mood2: 'rgba(222, 180, 172, 0.24)',
      liked: false,
      saved: false,
    },
    {
      id: 7,
      file: 'InDown_9.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Terrace · Star Flare',
      caption: 'Illuminated by crimson-gold flash in the night air.',
      tag: '08 / FLARE',
      image: IMAGES[7],
      face: { x: 51, y: 50 },
      zoomBox: 2.35,
      scene: 'indoor-dark',
      mood1: 'rgba(236, 134, 124, 0.34)',
      mood2: 'rgba(234, 184, 144, 0.26)',
      liked: true,
      saved: true,
    },
    {
      id: 8,
      file: 'InDown_4_1.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Bromo Trail · Roof Rack',
      caption: 'Above the horizon under an endless cobalt sky.',
      tag: '09 / TRAIL',
      image: IMAGES[8],
      face: { x: 48, y: 37 },
      zoomBox: 2.65,
      scene: 'outdoor-bright',
      mood1: 'rgba(156, 198, 238, 0.34)',
      mood2: 'rgba(236, 206, 126, 0.26)',
      liked: false,
      saved: false,
    },
    {
      id: 9,
      file: 'InDown_5.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Hallway · Dutch Angle',
      caption: 'Tilted perspective and effortless movement.',
      tag: '10 / STRUT',
      image: IMAGES[9],
      face: { x: 49, y: 42 },
      zoomBox: 2.6,
      scene: 'indoor-moody',
      mood1: 'rgba(218, 172, 152, 0.32)',
      mood2: 'rgba(194, 204, 222, 0.24)',
      liked: false,
      saved: false,
    },
    {
      id: 10,
      file: 'InDown_8.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Heritage Suite · Canvas',
      caption: 'Timeless heritage meeting modern couture.',
      tag: '11 / SUITE',
      image: IMAGES[10],
      face: { x: 54, y: 37 },
      zoomBox: 2.45,
      scene: 'indoor-bright',
      mood1: 'rgba(228, 196, 162, 0.34)',
      mood2: 'rgba(214, 174, 166, 0.24)',
      liked: false,
      saved: false,
    },
    {
      id: 11,
      file: 'InDown_3_1.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Valley · Open Sky',
      caption: 'Breathing in the stillness of wide mountain skies.',
      tag: '12 / AIR',
      image: IMAGES[11],
      face: { x: 49, y: 74 },
      zoomBox: 2.4,
      scene: 'outdoor-backlit',
      mood1: 'rgba(188, 210, 236, 0.34)',
      mood2: 'rgba(232, 216, 204, 0.26)',
      liked: false,
      saved: true,
    },
    {
      id: 12,
      file: 'InDown_10.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Salon · Oil Painting',
      caption: 'Seated quietly inside a living portrait frame.',
      tag: '13 / SALON',
      image: IMAGES[12],
      face: { x: 65, y: 42 },
      zoomBox: 2.45,
      scene: 'indoor-bright',
      mood1: 'rgba(226, 194, 164, 0.34)',
      mood2: 'rgba(202, 184, 174, 0.24)',
      liked: false,
      saved: false,
    },
    {
      id: 13,
      file: 'InDown_6.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Courtyard · Night Glow',
      caption: 'Warm amber spotlight across quiet evening stone.',
      tag: '14 / AMBER',
      image: IMAGES[13],
      face: { x: 52, y: 55 },
      zoomBox: 2.55,
      scene: 'indoor-dark',
      mood1: 'rgba(234, 156, 126, 0.34)',
      mood2: 'rgba(208, 184, 176, 0.24)',
      liked: false,
      saved: false,
    },
    {
      id: 14,
      file: 'InDown_5_1.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Meadow · First Light',
      caption: 'Shielding the sunrise with quiet confidence.',
      tag: '15 / DAWN',
      image: IMAGES[14],
      face: { x: 49, y: 59 },
      zoomBox: 2.25,
      scene: 'outdoor-backlit',
      mood1: 'rgba(236, 192, 174, 0.34)',
      mood2: 'rgba(190, 212, 236, 0.26)',
      liked: false,
      saved: false,
    },
    {
      id: 15,
      file: 'InDown_11.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Corridor · Warm Lamp',
      caption: 'Soft golden stillness before the final curtain.',
      tag: '16 / GLOW',
      image: IMAGES[15],
      face: { x: 56, y: 44 },
      zoomBox: 2.45,
      scene: 'indoor-moody',
      mood1: 'rgba(230, 192, 158, 0.34)',
      mood2: 'rgba(218, 174, 178, 0.24)',
      liked: false,
      saved: false,
    },
    {
      id: 16,
      file: 'yuli-17.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Wisuda · UNIMED 2026',
      caption: 'Proudly holding the moment it all became real.',
      tag: '17 / UNIMED',
      image: IMAGES[16],
      face: { x: 50, y: 35 },
      zoomBox: 2.4,
      scene: 'indoor-bright',
      mood1: 'rgba(226, 178, 166, 0.34)',
      mood2: 'rgba(186, 198, 218, 0.24)',
      liked: true,
      saved: false,
    },
    {
      id: 17,
      file: 'yuli-18.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Wisuda · Grand Hall',
      caption: 'Years of effort, one proud smile.',
      tag: '18 / PROUD',
      image: IMAGES[17],
      face: { x: 65, y: 43 },
      zoomBox: 2.4,
      scene: 'indoor-bright',
      mood1: 'rgba(214, 166, 144, 0.32)',
      mood2: 'rgba(190, 212, 236, 0.26)',
      liked: false,
      saved: true,
    },
    {
      id: 18,
      file: 'yuli-19.jpg',
      author: 'Yulie Aisyah Binrany, S.Pd',
      location: 'Wisuda · FEB UNIMED',
      caption: 'Graceful, grateful, graduated.',
      tag: '19 / GRACE',
      image: IMAGES[18],
      face: { x: 56, y: 38 },
      zoomBox: 2.4,
      scene: 'indoor-bright',
      mood1: 'rgba(236, 192, 174, 0.34)',
      mood2: 'rgba(218, 206, 190, 0.26)',
      liked: false,
      saved: false,
    },
  ];

  const TOTAL = POSTS.length;

  /* =========================================================================
     2. 16 COMPLETELY UNIQUE, PHOTO-ADAPTIVE EDITORIAL COLLAGE BLUEPRINTS
        - Every single one of the 16 photos has its OWN distinct arrangement!
        - Boxes stay thoughtfully clear of her face in the base photo
        - Every box dynamically pulls ANOTHER post's real photo & zooms cleanly
          onto that source post's exact face/subject focal point!
     ========================================================================= */
  const EDITORIAL_THEMES = [
    { title: 'ephemeral',    line1: 'And if YULI said to do it', line2: 'Then you do it, honey',      stamp: '@YULI.01_____', serial: '01289502026' },
    { title: 'reverie',      line1: 'Walking through warm amber',  line2: 'Echoes of a golden evening',  stamp: '@HALL.02_____', serial: '02410702026' },
    { title: 'wanderlust',   line1: 'Highland wind and dust',      line2: 'Where open horizons begin',   stamp: '@JEEP.03_____', serial: '03921402026' },
    { title: 'radiance',     line1: 'Soft light on delicate lace', line2: 'Held gently in still frames', stamp: '@POISE.04____', serial: '04182202026' },
    { title: 'silhouette',   line1: 'Shadows lean along the hall', line2: 'Quiet poise in sharp focus',  stamp: '@FRAME.05____', serial: '05639002026' },
    { title: 'solstice',     line1: 'Sunlit crest behind the haze',line2: 'Golden warmth across the sky',stamp: '@SOLAR.06____', serial: '06741102026' },
    { title: 'nocturne',     line1: 'City glass after midnight',   line2: 'Calm grace in velvet dark',   stamp: '@DUSK.07_____', serial: '07852902026' },
    { title: 'starlight',    line1: 'Crimson flare cuts the night',line2: 'A flash frozen in memory',    stamp: '@FLARE.08____', serial: '08364102026' },
    { title: 'altitude',     line1: 'Above the quiet savanna',     line2: 'Beneath endless cobalt blue', stamp: '@TRAIL.09____', serial: '09521802026' },
    { title: 'kinetic',      line1: 'Tilted halls and crisp stride',line2: 'Captured mid-motion',        stamp: '@STRUT.10____', serial: '10473302026' },
    { title: 'heritage',     line1: 'Oil canvas and woven silk',   line2: 'Classic beauty reimagined',   stamp: '@SUITE.11____', serial: '11904402026' },
    { title: 'ethereal',     line1: 'Wide open mountain silence',  line2: 'Breathing in soft daylight',  stamp: '@AIR.12______', serial: '12651702026' },
    { title: 'timeless',     line1: 'Framed beside old masters',   line2: 'Poetic grace in every line',  stamp: '@SALON.13____', serial: '13782002026' },
    { title: 'afterglow',    line1: 'Warm lamps on evening stone', line2: 'Soft luster after sundown',   stamp: '@AMBER.14____', serial: '14290502026' },
    { title: 'daybreak',     line1: 'First light across the ridge',line2: 'Unbothered and luminous',     stamp: '@DAWN.15_____', serial: '15813402026' },
    { title: 'luminescence', line1: 'Warm glow along the wall',    line2: 'Final frame in soft gold',    stamp: '@GLOW.16_____', serial: '16942802026' },
  ];

  /**
   * 16 distinct compositional templates tailored to each photo's actual subject position!
   * Box definitions use `srcOffset` (pulls different neighboring/contrast posts!) and `zoomMode`:
   *  - 'face'  : tight editorial portrait closeup of that source post's face
   *  - 'upper' : mid-portrait / fashion framing of that source post
   *  - 'full'  : full-scene editorial slice of that source post
   */
  const LAYOUT_TEMPLATES = [
    // #0 (InDown_2 — face at 48%, 34%): Flagship KARINA Asymmetric Surround (clear of top-center face!)
    {
      stampPos: { left: '53%', top: '45.5%', fromX: '80px', fromY: '-40px' },
      boxes: [
        { srcOffset: 5,  left: '4%',   top: '21%', width: '25%', height: '11%',  zoomMode: 'face',  tone: 'rose', z: 16, fromX: '-165px', fromY: '-90px', fromRot: '-8deg',  delay: 0.16 },
        { srcOffset: 2,  left: '3.5%', top: '34%', width: '19%', height: '14%',  zoomMode: 'upper', tone: 'noir', z: 15, fromX: '-190px', fromY: '25px',  fromRot: '-10deg', delay: 0.25 },
        { srcOffset: 7,  left: '56%',  top: '48%', width: '39%', height: '18%',  zoomMode: 'face',  tone: 'rose', z: 18, fromX: '210px',  fromY: '-25px', fromRot: '6deg',   delay: 0.22 },
        { srcOffset: 10, left: '63%',  top: '74%', width: '17%', height: '22%',  zoomMode: 'upper', tone: 'rose', z: 15, fromX: '80px',   fromY: '180px', fromRot: '9deg',   delay: 0.36 },
        { srcOffset: 14, left: '75%',  top: '67%', width: '16.5%', height: '18%', zoomMode: 'face', tone: 'noir', z: 19, fromX: '175px',  fromY: '135px', fromRot: '-7deg',  delay: 0.44 },
        { srcOffset: 3,  left: '3%',   top: '87%', width: '46%', height: '10.5%', zoomMode: 'face', tone: 'rose', z: 17, fromX: '-135px', fromY: '150px', fromRot: '-4deg',  delay: 0.32 },
      ],
      stars: [
        { type: 'burst12',  left: '2.5%', top: '18%',  size: '13.5cqw', fromX: '-110px', fromY: '-90px', fromRot: '-55deg', delay: 0.22 },
        { type: 'diamond4', left: '78%',  top: '86%',  size: '13cqw',   fromX: '115px',  fromY: '115px', fromRot: '45deg',  delay: 0.42 },
      ],
      pixels: [
        { left: '84%', top: '24%', fromX: '110px', fromY: '-55px', delay: 0.30 },
        { left: '12%', top: '50%', fromX: '-100px', fromY: '35px', delay: 0.38 },
      ],
      barcode: { left: '93.2%', top: '77%', height: '19.5%', fromX: '90px', fromY: '45px', delay: 0.46 },
      typo: { left: '3%', top: '72.5%', align: 'left', fromX: '-120px', fromY: '60px', delay: 0.28 },
    },

    // #1 (InDown_1 — face at 50%, 47%): Twin-Wing Corridor Balance (frames her center corridor!)
    {
      stampPos: { left: '5%', top: '19.5%', fromX: '-85px', fromY: '-35px' },
      boxes: [
        { srcOffset: 15, left: '4.5%', top: '22%', width: '25%', height: '27%', zoomMode: 'upper', tone: 'rose', z: 16, fromX: '-190px', fromY: '-70px', fromRot: '-9deg', delay: 0.16 },
        { srcOffset: 6,  left: '17%',  top: '44%', width: '20%', height: '15%', zoomMode: 'face',  tone: 'noir', z: 19, fromX: '-155px', fromY: '95px',  fromRot: '9deg',  delay: 0.26 },
        { srcOffset: 2,  left: '62%',  top: '20%', width: '33%', height: '14%', zoomMode: 'upper', tone: 'rose', z: 17, fromX: '195px',  fromY: '-85px', fromRot: '6deg',  delay: 0.20 },
        { srcOffset: 8,  left: '68%',  top: '56%', width: '27%', height: '19%', zoomMode: 'full',  tone: 'noir', z: 17, fromX: '185px',  fromY: '65px',  fromRot: '-7deg', delay: 0.34 },
        { srcOffset: 4,  left: '7%',   top: '80%', width: '40%', height: '14%', zoomMode: 'face',  tone: 'rose', z: 18, fromX: '-145px', fromY: '150px', fromRot: '-5deg', delay: 0.40 },
      ],
      stars: [
        { type: 'diamond4', left: '82%', top: '36%', size: '12.5cqw', fromX: '120px', fromY: '-40px', fromRot: '55deg', delay: 0.30 },
        { type: 'burst12',  left: '3%',  top: '68%', size: '14cqw',   fromX: '-120px', fromY: '85px', fromRot: '-60deg', delay: 0.38 },
      ],
      pixels: [
        { left: '34%', top: '22%', fromX: '-55px', fromY: '-90px', delay: 0.30 },
        { left: '84%', top: '78%', fromX: '110px', fromY: '60px',  delay: 0.42 },
      ],
      barcode: { left: '1.8%', top: '52%', height: '18%', fromX: '-90px', fromY: '15px', delay: 0.44 },
      typo: { left: '53%', top: '79%', align: 'right', fromX: '130px', fromY: '90px', delay: 0.32 },
    },

    // #2 (InDown_2_1 — Yellow Jeep, face at 47%, 53%, huge clean sky at top!): Sky-Anchored Magazine Spread
    {
      stampPos: { left: '53%', top: '18.5%', fromX: '95px', fromY: '-45px' },
      boxes: [
        { srcOffset: 3,  left: '52%',  top: '21%', width: '43%', height: '17%', zoomMode: 'face',  tone: 'rose', z: 17, fromX: '200px',  fromY: '-95px', fromRot: '7deg',   delay: 0.16 },
        { srcOffset: 13, left: '5%',   top: '20%', width: '21%', height: '17%', zoomMode: 'face',  tone: 'noir', z: 16, fromX: '-170px', fromY: '-105px',fromRot: '-10deg', delay: 0.22 },
        { srcOffset: 11, left: '72%',  top: '43%', width: '23%', height: '27%', zoomMode: 'upper', tone: 'rose', z: 18, fromX: '190px',  fromY: '35px',  fromRot: '8deg',   delay: 0.30 },
        { srcOffset: 1,  left: '4.5%', top: '76%', width: '35%', height: '18%', zoomMode: 'upper', tone: 'noir', z: 17, fromX: '-160px', fromY: '145px', fromRot: '-6deg',  delay: 0.36 },
        { srcOffset: 6,  left: '49%',  top: '84%', width: '44%', height: '11.5%',zoomMode: 'face', tone: 'rose', z: 19, fromX: '145px',  fromY: '160px', fromRot: '4deg',   delay: 0.42 },
      ],
      stars: [
        { type: 'diamond4', left: '29%', top: '21%', size: '11.5cqw', fromX: '-80px', fromY: '-110px', fromRot: '-45deg', delay: 0.26 },
        { type: 'burst12',  left: '59%', top: '69%', size: '13.5cqw', fromX: '120px', fromY: '80px',   fromRot: '65deg',  delay: 0.40 },
      ],
      pixels: [
        { left: '41%', top: '26%', fromX: '15px',  fromY: '-100px', delay: 0.32 },
        { left: '8%',  top: '42%', fromX: '-110px',fromY: '20px',   delay: 0.36 },
      ],
      barcode: { left: '93.2%', top: '72%', height: '20%', fromX: '90px', fromY: '55px', delay: 0.46 },
      typo: { left: '6%', top: '38%', align: 'left', fromX: '-130px', fromY: '45px', delay: 0.30 },
    },

    // #3 (InDown_3 — face at 54%, 34%): Left-Diagonal Staircase Collage
    {
      stampPos: { left: '5%', top: '42.5%', fromX: '-90px', fromY: '0px' },
      boxes: [
        { srcOffset: 5,  left: '5%',   top: '21%', width: '31%', height: '15%', zoomMode: 'face',  tone: 'rose', z: 17, fromX: '-190px', fromY: '-90px', fromRot: '-7deg', delay: 0.16 },
        { srcOffset: 10, left: '4.5%', top: '45%', width: '28%', height: '27%', zoomMode: 'upper', tone: 'noir', z: 18, fromX: '-205px', fromY: '40px',  fromRot: '-9deg', delay: 0.24 },
        { srcOffset: 14, left: '68%',  top: '46%', width: '27%', height: '16%', zoomMode: 'face',  tone: 'rose', z: 17, fromX: '195px',  fromY: '15px',  fromRot: '8deg',  delay: 0.30 },
        { srcOffset: 12, left: '53%',  top: '72%', width: '21%', height: '17%', zoomMode: 'face',  tone: 'noir', z: 16, fromX: '65px',   fromY: '175px', fromRot: '-8deg', delay: 0.36 },
        { srcOffset: 0,  left: '67%',  top: '78%', width: '24%', height: '17%', zoomMode: 'face',  tone: 'rose', z: 20, fromX: '175px',  fromY: '145px', fromRot: '7deg',  delay: 0.44 },
      ],
      stars: [
        { type: 'burst12',  left: '79%', top: '22%', size: '13.5cqw', fromX: '115px', fromY: '-95px', fromRot: '60deg',  delay: 0.28 },
        { type: 'diamond4', left: '36%', top: '76%', size: '12cqw',   fromX: '-45px', fromY: '125px', fromRot: '-45deg', delay: 0.40 },
      ],
      pixels: [
        { left: '72%', top: '37%', fromX: '95px',  fromY: '-30px', delay: 0.32 },
        { left: '10%', top: '86%', fromX: '-100px',fromY: '95px',  delay: 0.42 },
      ],
      barcode: { left: '93%', top: '66%', height: '21%', fromX: '90px', fromY: '65px', delay: 0.46 },
      typo: { left: '5%', top: '74.5%', align: 'left', fromX: '-125px', fromY: '75px', delay: 0.32 },
    },

    // #4 (InDown_4 — crouching fashion pose, face at 54%, 39% looking left): Right-Column Architectural Split
    {
      stampPos: { left: '61%', top: '19%', fromX: '95px', fromY: '-45px' },
      boxes: [
        { srcOffset: 3,  left: '66%',  top: '21.5%', width: '28%', height: '29%', zoomMode: 'upper', tone: 'rose', z: 16, fromX: '195px',  fromY: '-85px', fromRot: '9deg',   delay: 0.16 },
        { srcOffset: 11, left: '4%',   top: '22%',   width: '32%', height: '13%', zoomMode: 'face',  tone: 'noir', z: 17, fromX: '-190px', fromY: '-90px', fromRot: '-6deg',  delay: 0.22 },
        { srcOffset: 8,  left: '5%',   top: '71%',   width: '22%', height: '23%', zoomMode: 'full',  tone: 'noir', z: 15, fromX: '-145px', fromY: '165px', fromRot: '-10deg', delay: 0.32 },
        { srcOffset: 1,  left: '22%',  top: '78%',   width: '23%', height: '17%', zoomMode: 'face',  tone: 'rose', z: 19, fromX: '-45px',  fromY: '185px', fromRot: '8deg',   delay: 0.40 },
        { srcOffset: 9,  left: '70%',  top: '63%',   width: '24%', height: '30%', zoomMode: 'upper', tone: 'noir', z: 17, fromX: '185px',  fromY: '125px', fromRot: '-7deg',  delay: 0.38 },
      ],
      stars: [
        { type: 'diamond4', left: '44%', top: '57%', size: '11.5cqw', fromX: '-60px', fromY: '85px',  fromRot: '45deg',  delay: 0.30 },
        { type: 'burst12',  left: '54%', top: '82%', size: '14cqw',   fromX: '90px',  fromY: '130px', fromRot: '-60deg', delay: 0.44 },
      ],
      pixels: [
        { left: '53%', top: '23%', fromX: '65px',  fromY: '-90px', delay: 0.28 },
        { left: '12%', top: '56%', fromX: '-95px', fromY: '35px',  delay: 0.36 },
      ],
      barcode: { left: '2.2%', top: '39%', height: '21%', fromX: '-90px', fromY: '-25px', delay: 0.44 },
      typo: { left: '10%', top: '42%', align: 'left', fromX: '-120px', fromY: '-40px', delay: 0.24 },
    },

    // #5 (InDown_1_1 — backlit meadow portrait, face at 44%, 54%, bright sky top): Crown & Lower Mosaic
    {
      stampPos: { left: '46%', top: '18.5%', fromX: '60px', fromY: '-55px' },
      boxes: [
        { srcOffset: 2,  left: '45%',  top: '21%', width: '49%', height: '13%', zoomMode: 'face',  tone: 'noir', z: 17, fromX: '190px',  fromY: '-100px', fromRot: '5deg',   delay: 0.16 },
        { srcOffset: 15, left: '4.5%', top: '21%', width: '23%', height: '17%', zoomMode: 'face',  tone: 'rose', z: 16, fromX: '-175px', fromY: '-95px',  fromRot: '-10deg', delay: 0.22 },
        { srcOffset: 7,  left: '70%',  top: '42%', width: '25%', height: '21%', zoomMode: 'face',  tone: 'rose', z: 18, fromX: '195px',  fromY: '10px',   fromRot: '8deg',   delay: 0.30 },
        { srcOffset: 10, left: '5%',   top: '72%', width: '23%', height: '23%', zoomMode: 'upper', tone: 'noir', z: 17, fromX: '-155px', fromY: '165px',  fromRot: '-8deg',  delay: 0.36 },
        { srcOffset: 12, left: '49%',  top: '80%', width: '45%', height: '15%', zoomMode: 'face',  tone: 'rose', z: 19, fromX: '165px',  fromY: '150px',  fromRot: '6deg',   delay: 0.42 },
      ],
      stars: [
        { type: 'burst12',  left: '82%', top: '34%', size: '13cqw',   fromX: '120px', fromY: '-35px', fromRot: '65deg',  delay: 0.30 },
        { type: 'diamond4', left: '31%', top: '83%', size: '11.5cqw', fromX: '-45px', fromY: '130px', fromRot: '-45deg', delay: 0.42 },
      ],
      pixels: [
        { left: '29%', top: '21%', fromX: '-50px', fromY: '-95px', delay: 0.32 },
        { left: '84%', top: '65%', fromX: '110px', fromY: '60px',  delay: 0.38 },
      ],
      barcode: { left: '2%', top: '42%', height: '22%', fromX: '-85px', fromY: '30px', delay: 0.46 },
      typo: { left: '52%', top: '66%', align: 'right', fromX: '110px', fromY: '80px', delay: 0.34 },
    },

    // #6 (InDown_7 — seated right-center, face at 60%, 38%): Left-Heavy Editorial Spine
    {
      stampPos: { left: '5%', top: '19%', fromX: '-90px', fromY: '-45px' },
      boxes: [
        { srcOffset: 1,  left: '4.5%', top: '21.5%', width: '36%', height: '15%', zoomMode: 'face',  tone: 'noir', z: 17, fromX: '-195px', fromY: '-90px', fromRot: '-6deg',  delay: 0.16 },
        { srcOffset: 8,  left: '4.5%', top: '45%',   width: '20%', height: '24%', zoomMode: 'full',  tone: 'rose', z: 16, fromX: '-180px', fromY: '30px',  fromRot: '-10deg', delay: 0.24 },
        { srcOffset: 14, left: '18%',  top: '55%',   width: '19%', height: '20%', zoomMode: 'face',  tone: 'noir', z: 19, fromX: '-120px', fromY: '130px', fromRot: '8deg',   delay: 0.32 },
        { srcOffset: 3,  left: '74%',  top: '56%',   width: '22%', height: '19%', zoomMode: 'face',  tone: 'rose', z: 18, fromX: '200px',  fromY: '20px',  fromRot: '9deg',   delay: 0.28 },
        { srcOffset: 0,  left: '42%',  top: '83.5%', width: '52%', height: '12%', zoomMode: 'face',  tone: 'rose', z: 18, fromX: '150px',  fromY: '155px', fromRot: '4deg',   delay: 0.40 },
      ],
      stars: [
        { type: 'diamond4', left: '84%', top: '20%', size: '12cqw',   fromX: '115px',  fromY: '-105px', fromRot: '45deg',  delay: 0.28 },
        { type: 'burst12',  left: '9%',  top: '81%', size: '14cqw',   fromX: '-115px', fromY: '125px',  fromRot: '-65deg', delay: 0.42 },
      ],
      pixels: [
        { left: '43%', top: '22%', fromX: '30px', fromY: '-95px', delay: 0.30 },
        { left: '46%', top: '71%', fromX: '20px', fromY: '105px', delay: 0.38 },
      ],
      barcode: { left: '93%', top: '34%', height: '20%', fromX: '90px', fromY: '-20px', delay: 0.44 },
      typo: { left: '4%', top: '38.5%', align: 'left', fromX: '-125px', fromY: '-25px', delay: 0.24 },
    },

    // #7 (InDown_9 — dramatic star flare night portrait, face at 51%, 50%): Four-Corner Starlight Frame
    {
      stampPos: { left: '58%', top: '19%', fromX: '85px', fromY: '-45px' },
      boxes: [
        { srcOffset: 5,  left: '5%',   top: '21%', width: '28%', height: '18%', zoomMode: 'face',  tone: 'rose', z: 17, fromX: '-185px', fromY: '-95px', fromRot: '-8deg',  delay: 0.16 },
        { srcOffset: 12, left: '60%',  top: '21.5%',width: '34%', height: '14%',zoomMode: 'face',  tone: 'noir', z: 16, fromX: '195px',  fromY: '-90px', fromRot: '7deg',   delay: 0.22 },
        { srcOffset: 2,  left: '4.5%', top: '65%', width: '25%', height: '27%', zoomMode: 'full',  tone: 'noir', z: 18, fromX: '-190px', fromY: '120px', fromRot: '-9deg',  delay: 0.30 },
        { srcOffset: 15, left: '70%',  top: '62%', width: '24%', height: '22%', zoomMode: 'upper', tone: 'rose', z: 17, fromX: '185px',  fromY: '95px',  fromRot: '9deg',   delay: 0.36 },
        { srcOffset: 10, left: '34%',  top: '84%', width: '38%', height: '11.5%',zoomMode: 'face', tone: 'rose', z: 19, fromX: '10px',   fromY: '170px', fromRot: '-4deg',  delay: 0.42 },
      ],
      stars: [
        { type: 'burst12',  left: '37%', top: '20%', size: '13.5cqw', fromX: '-25px', fromY: '-115px', fromRot: '-50deg', delay: 0.26 },
        { type: 'diamond4', left: '80%', top: '85%', size: '12.5cqw', fromX: '120px', fromY: '120px',  fromRot: '50deg',  delay: 0.44 },
      ],
      pixels: [
        { left: '84%', top: '42%', fromX: '110px', fromY: '0px',  delay: 0.32 },
        { left: '12%', top: '46%', fromX: '-105px',fromY: '15px', delay: 0.38 },
      ],
      barcode: { left: '2%', top: '42%', height: '20%', fromX: '-90px', fromY: '0px', delay: 0.46 },
      typo: { left: '33%', top: '67%', align: 'left', fromX: '80px', fromY: '80px', delay: 0.32 },
    },

    // #8 (InDown_4_1 — on yellow Jeep roof, face at 48%, 37%): Wide Panoramic Horizon Collage
    {
      stampPos: { left: '5%', top: '19%', fromX: '-85px', fromY: '-45px' },
      boxes: [
        { srcOffset: 1,  left: '5%',   top: '21.5%', width: '24%', height: '25%', zoomMode: 'upper', tone: 'rose', z: 16, fromX: '-190px', fromY: '-85px', fromRot: '-9deg', delay: 0.16 },
        { srcOffset: 7,  left: '67%',  top: '21%',   width: '28%', height: '16%', zoomMode: 'face',  tone: 'rose', z: 17, fromX: '195px',  fromY: '-85px', fromRot: '7deg',  delay: 0.22 },
        { srcOffset: 13, left: '72%',  top: '42%',   width: '23%', height: '22%', zoomMode: 'face',  tone: 'noir', z: 18, fromX: '195px',  fromY: '30px',  fromRot: '-8deg', delay: 0.28 },
        { srcOffset: 4,  left: '5%',   top: '78%',   width: '44%', height: '15%', zoomMode: 'face',  tone: 'noir', z: 17, fromX: '-155px', fromY: '155px', fromRot: '-5deg', delay: 0.36 },
        { srcOffset: 11, left: '57%',  top: '81%',   width: '32%', height: '14%', zoomMode: 'face',  tone: 'rose', z: 19, fromX: '145px',  fromY: '165px', fromRot: '5deg',  delay: 0.42 },
      ],
      stars: [
        { type: 'diamond4', left: '34%', top: '21%', size: '11.5cqw', fromX: '-45px', fromY: '-110px', fromRot: '45deg',  delay: 0.28 },
        { type: 'burst12',  left: '48%', top: '69%', size: '13.5cqw', fromX: '20px',  fromY: '115px',  fromRot: '-60deg', delay: 0.40 },
      ],
      pixels: [
        { left: '7%',  top: '50%', fromX: '-100px', fromY: '20px',  delay: 0.32 },
        { left: '84%', top: '67%', fromX: '110px',  fromY: '60px',  delay: 0.42 },
      ],
      barcode: { left: '93%', top: '72%', height: '21%', fromX: '90px', fromY: '55px', delay: 0.46 },
      typo: { left: '5%', top: '61%', align: 'left', fromX: '-125px', fromY: '45px', delay: 0.30 },
    },

    // #9 (InDown_5 — dutch-angle hallway strut, face at 49%, 42%): Asymmetric Kinetic Diptych
    {
      stampPos: { left: '54%', top: '42.5%', fromX: '85px', fromY: '-30px' },
      boxes: [
        { srcOffset: 2,  left: '4%',   top: '20.5%', width: '36%', height: '13%', zoomMode: 'upper', tone: 'noir', z: 16, fromX: '-185px', fromY: '-95px', fromRot: '-6deg',  delay: 0.16 },
        { srcOffset: 14, left: '69%',  top: '20.5%', width: '25%', height: '18%', zoomMode: 'face',  tone: 'rose', z: 17, fromX: '195px',  fromY: '-90px', fromRot: '8deg',   delay: 0.22 },
        { srcOffset: 6,  left: '58%',  top: '45%',   width: '37%', height: '17%', zoomMode: 'face',  tone: 'rose', z: 18, fromX: '205px',  fromY: '10px',  fromRot: '6deg',   delay: 0.28 },
        { srcOffset: 0,  left: '4.5%', top: '61%',   width: '21%', height: '27%', zoomMode: 'upper', tone: 'rose', z: 16, fromX: '-180px', fromY: '110px', fromRot: '-9deg',  delay: 0.34 },
        { srcOffset: 12, left: '20%',  top: '73%',   width: '21%', height: '20%', zoomMode: 'face',  tone: 'noir', z: 19, fromX: '-90px',  fromY: '170px', fromRot: '8deg',   delay: 0.42 },
      ],
      stars: [
        { type: 'burst12',  left: '45%', top: '20%', size: '13cqw',   fromX: '10px',  fromY: '-115px', fromRot: '-55deg', delay: 0.26 },
        { type: 'diamond4', left: '80%', top: '83%', size: '12.5cqw', fromX: '120px', fromY: '120px',  fromRot: '45deg',  delay: 0.44 },
      ],
      pixels: [
        { left: '8%',  top: '38%', fromX: '-105px', fromY: '0px',   delay: 0.32 },
        { left: '64%', top: '66%', fromX: '85px',   fromY: '80px',  delay: 0.40 },
      ],
      barcode: { left: '93%', top: '64%', height: '20%', fromX: '90px', fromY: '40px', delay: 0.46 },
      typo: { left: '52%', top: '76%', align: 'right', fromX: '120px', fromY: '90px', delay: 0.34 },
    },

    // #10 (InDown_8 — standing beside vintage painting, face at 54%, 37%): Gallery Salon Split
    {
      stampPos: { left: '5%', top: '19%', fromX: '-85px', fromY: '-45px' },
      boxes: [
        { srcOffset: 5,  left: '4.5%', top: '21.5%', width: '32%', height: '16%', zoomMode: 'face',  tone: 'rose', z: 17, fromX: '-190px', fromY: '-90px', fromRot: '-7deg', delay: 0.16 },
        { srcOffset: 8,  left: '72%',  top: '21%',   width: '23%', height: '24%', zoomMode: 'full',  tone: 'noir', z: 16, fromX: '195px',  fromY: '-85px', fromRot: '9deg',  delay: 0.22 },
        { srcOffset: 15, left: '4.5%', top: '47%',   width: '24%', height: '20%', zoomMode: 'face',  tone: 'noir', z: 18, fromX: '-195px', fromY: '35px',  fromRot: '-8deg', delay: 0.30 },
        { srcOffset: 3,  left: '67%',  top: '62%',   width: '28%', height: '15%', zoomMode: 'face',  tone: 'rose', z: 18, fromX: '195px',  fromY: '65px',  fromRot: '6deg',  delay: 0.36 },
        { srcOffset: 7,  left: '38%',  top: '83%',   width: '54%', height: '12%', zoomMode: 'face',  tone: 'rose', z: 19, fromX: '135px',  fromY: '165px', fromRot: '4deg',  delay: 0.42 },
      ],
      stars: [
        { type: 'diamond4', left: '39%', top: '20.5%', size: '11.5cqw', fromX: '-35px', fromY: '-110px', fromRot: '-45deg', delay: 0.28 },
        { type: 'burst12',  left: '14%', top: '81%',   size: '14cqw',   fromX: '-115px', fromY: '125px', fromRot: '65deg',  delay: 0.42 },
      ],
      pixels: [
        { left: '78%', top: '48%', fromX: '110px', fromY: '15px',  delay: 0.34 },
        { left: '8%',  top: '71%', fromX: '-100px', fromY: '65px', delay: 0.40 },
      ],
      barcode: { left: '2%', top: '71%', height: '21%', fromX: '-90px', fromY: '60px', delay: 0.46 },
      typo: { left: '11%', top: '70%', align: 'left', fromX: '-120px', fromY: '65px', delay: 0.30 },
    },

    // #11 (InDown_3_1 — face LOW at 49%, 74%, huge airy sky above!): Sky-Cascade Upper Gallery!
    {
      stampPos: { left: '5%', top: '18.8%', fromX: '-85px', fromY: '-45px' },
      boxes: [
        { srcOffset: 0,  left: '4.5%', top: '21%',   width: '32%', height: '24%', zoomMode: 'upper', tone: 'rose', z: 17, fromX: '-195px', fromY: '-95px', fromRot: '-8deg', delay: 0.16 },
        { srcOffset: 7,  left: '32%',  top: '28%',   width: '27%', height: '19%', zoomMode: 'face',  tone: 'noir', z: 19, fromX: '-25px',  fromY: '-125px',fromRot: '6deg',  delay: 0.24 },
        { srcOffset: 2,  left: '64%',  top: '21%',   width: '31%', height: '21%', zoomMode: 'full',  tone: 'rose', z: 16, fromX: '195px',  fromY: '-90px', fromRot: '8deg',  delay: 0.22 },
        { srcOffset: 13, left: '70%',  top: '48%',   width: '25%', height: '23%', zoomMode: 'face',  tone: 'noir', z: 18, fromX: '195px',  fromY: '45px',  fromRot: '-7deg', delay: 0.32 },
        { srcOffset: 4,  left: '4.5%', top: '69%',   width: '26%', height: '22%', zoomMode: 'face',  tone: 'rose', z: 17, fromX: '-185px', fromY: '130px', fromRot: '-9deg', delay: 0.38 },
      ],
      stars: [
        { type: 'burst12',  left: '56%', top: '48%', size: '13.5cqw', fromX: '75px',  fromY: '-45px', fromRot: '60deg',  delay: 0.30 },
        { type: 'diamond4', left: '78%', top: '76%', size: '12.5cqw', fromX: '120px', fromY: '110px', fromRot: '-45deg', delay: 0.42 },
      ],
      pixels: [
        { left: '42%', top: '20%', fromX: '15px',  fromY: '-95px', delay: 0.28 },
        { left: '14%', top: '50%', fromX: '-105px',fromY: '20px',  delay: 0.36 },
      ],
      barcode: { left: '93%', top: '74%', height: '20%', fromX: '90px', fromY: '60px', delay: 0.46 },
      typo: { left: '4.5%', top: '51%', align: 'left', fromX: '-125px', fromY: '25px', delay: 0.28 },
    },

    // #12 (InDown_10 — seated on right, face at 65%, 42%): Left-Editorial Collage Over Painting
    {
      stampPos: { left: '4.5%', top: '19%', fromX: '-85px', fromY: '-45px' },
      boxes: [
        { srcOffset: 1,  left: '4.5%', top: '21.5%', width: '40%', height: '14.5%', zoomMode: 'face',  tone: 'rose', z: 17, fromX: '-195px', fromY: '-90px', fromRot: '-6deg',  delay: 0.16 },
        { srcOffset: 8,  left: '4.5%', top: '43%',   width: '26%', height: '26%',   zoomMode: 'full',  tone: 'noir', z: 16, fromX: '-190px', fromY: '30px',  fromRot: '-9deg',  delay: 0.24 },
        { srcOffset: 5,  left: '23%',  top: '57%',   width: '22%', height: '18%',   zoomMode: 'face',  tone: 'rose', z: 19, fromX: '-105px', fromY: '120px', fromRot: '8deg',   delay: 0.32 },
        { srcOffset: 15, left: '72%',  top: '67%',   width: '23%', height: '24%',   zoomMode: 'upper', tone: 'noir', z: 17, fromX: '190px',  fromY: '120px', fromRot: '8deg',   delay: 0.38 },
        { srcOffset: 3,  left: '8%',   top: '84%',   width: '46%', height: '11.5%', zoomMode: 'face',  tone: 'rose', z: 18, fromX: '-140px', fromY: '160px', fromRot: '-4deg',  delay: 0.42 },
      ],
      stars: [
        { type: 'diamond4', left: '48%', top: '21%', size: '12cqw',   fromX: '15px',  fromY: '-110px', fromRot: '45deg',  delay: 0.28 },
        { type: 'burst12',  left: '56%', top: '79%', size: '14cqw',   fromX: '80px',  fromY: '125px',  fromRot: '-60deg', delay: 0.44 },
      ],
      pixels: [
        { left: '84%', top: '23%', fromX: '110px', fromY: '-80px', delay: 0.30 },
        { left: '34%', top: '41%', fromX: '-45px', fromY: '-15px', delay: 0.36 },
      ],
      barcode: { left: '93%', top: '25%', height: '21%', fromX: '90px', fromY: '-55px', delay: 0.46 },
      typo: { left: '54%', top: '22%', align: 'right', fromX: '125px', fromY: '-75px', delay: 0.24 },
    },

    // #13 (InDown_6 — evening courtyard, face at 52%, 55%): Upper Crown & Bottom Ribbon
    {
      stampPos: { left: '55%', top: '18.8%', fromX: '90px', fromY: '-45px' },
      boxes: [
        { srcOffset: 0,  left: '5%',   top: '21%',   width: '27%', height: '21%',   zoomMode: 'face',  tone: 'rose', z: 17, fromX: '-190px', fromY: '-90px', fromRot: '-8deg', delay: 0.16 },
        { srcOffset: 2,  left: '53%',  top: '21%',   width: '41%', height: '15%',   zoomMode: 'upper', tone: 'noir', z: 16, fromX: '195px',  fromY: '-90px', fromRot: '6deg',  delay: 0.22 },
        { srcOffset: 11, left: '72%',  top: '44%',   width: '23%', height: '24%',   zoomMode: 'face',  tone: 'rose', z: 18, fromX: '195px',  fromY: '25px',  fromRot: '8deg',  delay: 0.30 },
        { srcOffset: 9,  left: '4.5%', top: '64%',   width: '24%', height: '27%',   zoomMode: 'upper', tone: 'noir', z: 17, fromX: '-185px', fromY: '125px', fromRot: '-9deg', delay: 0.36 },
        { srcOffset: 14, left: '42%',  top: '84%',   width: '48%', height: '11.5%', zoomMode: 'face',  tone: 'rose', z: 19, fromX: '120px',  fromY: '165px', fromRot: '4deg',  delay: 0.42 },
      ],
      stars: [
        { type: 'burst12',  left: '35%', top: '21%', size: '13.5cqw', fromX: '-35px', fromY: '-110px', fromRot: '-55deg', delay: 0.26 },
        { type: 'diamond4', left: '78%', top: '71%', size: '12cqw',   fromX: '115px', fromY: '95px',   fromRot: '45deg',  delay: 0.42 },
      ],
      pixels: [
        { left: '9%',  top: '48%', fromX: '-100px', fromY: '15px', delay: 0.32 },
        { left: '84%', top: '37%', fromX: '110px',  fromY: '-20px',delay: 0.38 },
      ],
      barcode: { left: '93%', top: '74%', height: '20%', fromX: '90px', fromY: '55px', delay: 0.46 },
      typo: { left: '34%', top: '70%', align: 'left', fromX: '0px', fromY: '115px', delay: 0.32 },
    },

    // #14 (InDown_5_1 — sunrise ridge, face at 49%, 59%, huge bright sky top): Sunburst Upper Mosaic
    {
      stampPos: { left: '5%', top: '18.8%', fromX: '-85px', fromY: '-45px' },
      boxes: [
        { srcOffset: 7,  left: '4.5%', top: '21.5%', width: '43%', height: '14%',  zoomMode: 'face',  tone: 'rose', z: 17, fromX: '-195px', fromY: '-90px', fromRot: '-6deg', delay: 0.16 },
        { srcOffset: 10, left: '66%',  top: '21%',   width: '28%', height: '25%',  zoomMode: 'upper', tone: 'noir', z: 16, fromX: '195px',  fromY: '-90px', fromRot: '9deg',  delay: 0.22 },
        { srcOffset: 1,  left: '4.5%', top: '43%',   width: '22%', height: '21%',  zoomMode: 'face',  tone: 'noir', z: 18, fromX: '-185px', fromY: '20px',  fromRot: '-8deg', delay: 0.28 },
        { srcOffset: 6,  left: '73%',  top: '57%',   width: '22%', height: '22%',  zoomMode: 'face',  tone: 'rose', z: 18, fromX: '195px',  fromY: '75px',  fromRot: '8deg',  delay: 0.36 },
        { srcOffset: 0,  left: '8%',   top: '83%',   width: '47%', height: '12.5%',zoomMode: 'face',  tone: 'rose', z: 19, fromX: '-145px', fromY: '160px', fromRot: '-4deg', delay: 0.42 },
      ],
      stars: [
        { type: 'diamond4', left: '51%', top: '21%', size: '12cqw',   fromX: '15px',  fromY: '-110px', fromRot: '45deg',  delay: 0.28 },
        { type: 'burst12',  left: '60%', top: '80%', size: '14cqw',   fromX: '85px',  fromY: '125px',  fromRot: '-60deg', delay: 0.42 },
      ],
      pixels: [
        { left: '34%', top: '38%', fromX: '-45px', fromY: '-25px', delay: 0.32 },
        { left: '84%', top: '48%', fromX: '110px', fromY: '15px',  delay: 0.38 },
      ],
      barcode: { left: '2%', top: '69%', height: '21%', fromX: '-90px', fromY: '55px', delay: 0.46 },
      typo: { left: '58%', top: '81%', align: 'right', fromX: '125px', fromY: '90px', delay: 0.32 },
    },

    // #15 (InDown_11 — leaning softly by glowing lamp, face at 56%, 44%): Finale Diagonal Framed Spread
    {
      stampPos: { left: '5%', top: '44.5%', fromX: '-90px', fromY: '0px' },
      boxes: [
        { srcOffset: 2,  left: '4.5%', top: '21%',   width: '30%', height: '19%',   zoomMode: 'upper', tone: 'noir', z: 16, fromX: '-190px', fromY: '-90px', fromRot: '-8deg', delay: 0.16 },
        { srcOffset: 5,  left: '64%',  top: '20.5%', width: '31%', height: '14%',   zoomMode: 'face',  tone: 'rose', z: 17, fromX: '195px',  fromY: '-90px', fromRot: '6deg',  delay: 0.22 },
        { srcOffset: 0,  left: '4.5%', top: '47%',   width: '26%', height: '27%',   zoomMode: 'face',  tone: 'rose', z: 18, fromX: '-200px', fromY: '45px',  fromRot: '-9deg', delay: 0.28 },
        { srcOffset: 8,  left: '74%',  top: '54%',   width: '21%', height: '24%',   zoomMode: 'full',  tone: 'noir', z: 17, fromX: '190px',  fromY: '60px',  fromRot: '8deg',  delay: 0.36 },
        { srcOffset: 7,  left: '37%',  top: '84%',   width: '54%', height: '11.5%', zoomMode: 'face',  tone: 'rose', z: 19, fromX: '135px',  fromY: '165px', fromRot: '4deg',  delay: 0.42 },
      ],
      stars: [
        { type: 'burst12',  left: '38%', top: '20%', size: '13.5cqw', fromX: '-35px', fromY: '-110px', fromRot: '-55deg', delay: 0.26 },
        { type: 'diamond4', left: '14%', top: '81%', size: '12.5cqw', fromX: '-110px',fromY: '125px',  fromRot: '45deg',  delay: 0.42 },
      ],
      pixels: [
        { left: '84%', top: '38%', fromX: '110px', fromY: '-20px', delay: 0.32 },
        { left: '34%', top: '69%', fromX: '-45px', fromY: '75px',  delay: 0.38 },
      ],
      barcode: { left: '93%', top: '76%', height: '19%', fromX: '90px', fromY: '55px', delay: 0.46 },
      typo: { left: '34%', top: '71%', align: 'left', fromX: '-60px', fromY: '95px', delay: 0.32 },
    },
  ];

  // Dynamically generate subject-aligned blush patch & organic ink contours around each photo's exact face!
  function getPostBlueprint(postIndex) {
    const post = POSTS[postIndex];
    const theme = EDITORIAL_THEMES[postIndex % EDITORIAL_THEMES.length];
    const tpl = LAYOUT_TEMPLATES[postIndex % LAYOUT_TEMPLATES.length];
    const fx = post.face.x;
    const fy = post.face.y;

    // Position rose halftone cheek blush gently offset beside her actual face
    const blushLeft = clamp(fx + (postIndex % 2 === 0 ? -18 : 4), 6, 68);
    const blushTop = clamp(fy + 3, 18, 70);

    // Organic hand-drawn ink contour arcs framing her actual face position (viewBox 400x533 for 3:4)
    const cx = Math.round((fx / 100) * 400);
    const cy = Math.round((fy / 100) * 533);
    const rX = 96;
    const rY = 128;
    const inkContours = `
      <path d="M${cx - rX} ${cy - 40} C${cx - rX - 38} ${cy + 12} ${cx - rX - 32} ${cy + 86} ${cx - rX + 8} ${cy + rY}" fill="none" stroke="#151518" stroke-width="1.25" opacity="0.62"/>
      <path d="M${cx + rX} ${cy - 44} C${cx + rX + 38} ${cy + 10} ${cx + rX + 34} ${cy + 84} ${cx + rX - 10} ${cy + rY}" fill="none" stroke="#151518" stroke-width="1.25" opacity="0.60"/>
      <path d="M${cx - 28} ${cy - 92} C${cx + 42} ${cy - 68} ${cx + 56} ${cy + 6} ${cx + 12} ${cy + 42}" fill="none" stroke="#151518" stroke-width="1.15" opacity="0.52"/>
    `;

    // Resolve each cutout box's source photo from OTHER posts & auto-focus onto that photo's face/subject!
    const boxes = tpl.boxes.map((b) => {
      const srcIdx = mod(postIndex + b.srcOffset, TOTAL);
      const safeSrcIdx = srcIdx === postIndex ? mod(postIndex + 1, TOTAL) : srcIdx;
      const srcPost = POSTS[safeSrcIdx];

      let cropZoom = 1.25;
      let cropX = srcPost.face.x;
      let cropY = srcPost.face.y;
      if (b.zoomMode === 'face') {
        cropZoom = srcPost.zoomBox || 2.3;
      } else if (b.zoomMode === 'upper') {
        cropZoom = 1.48;
        cropY = clamp(srcPost.face.y + 6, 15, 82);
      } else {
        cropZoom = 1.12;
        cropX = 50;
        cropY = clamp(srcPost.face.y + 8, 25, 75);
      }

      return {
        ...b,
        sourcePost: safeSrcIdx,
        cropPos: `${cropX}% ${cropY}%`,
        cropOrigin: `${cropX}% ${cropY}%`,
        cropZoom,
      };
    });

    return {
      theme,
      blushPatch: { left: `${blushLeft}%`, top: `${blushTop}%`, width: '24%', height: '21%' },
      inkContours,
      masthead: { top: '-1.2%', fromX: '0px', fromY: '-95px', delay: 0.08 },
      stamp: { text: theme.stamp, ...tpl.stampPos, delay: 0.30 },
      boxes,
      stars: tpl.stars,
      pixels: tpl.pixels,
      barcode: { ...tpl.barcode, serial: theme.serial },
      typo: { ...tpl.typo, title: theme.title, line1: theme.line1, line2: theme.line2 },
    };
  }

  /* =========================================================================
     3. DOM References
     ========================================================================= */
  const rootStyle = document.documentElement.style;
  const appShell = document.getElementById('appShell');
  const stageEl = document.getElementById('carouselStage');
  const trackEl = document.getElementById('cardsTrack');
  const slideCounterEl = document.getElementById('slideCounter');
  const dockDotsEl = document.getElementById('dockDots');
  const activeCaptionAuthorEl = document.getElementById('activeCaptionAuthor');
  const activeCaptionTextEl = document.getElementById('activeCaptionText');
  const gestureHintEl = document.getElementById('gestureHint');
  const replayBtn = document.getElementById('replayBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const mobilePrevBtn = document.getElementById('mobilePrevBtn');
  const mobileNextBtn = document.getElementById('mobileNextBtn');
  const modePerspectiveBtn = document.getElementById('modePerspective');
  const modeFlatBtn = document.getElementById('modeFlat');
  const storiesBar = document.getElementById('storiesBar');

  const editorialModal = document.getElementById('editorialModal');
  const editorialBackdrop = document.getElementById('editorialBackdrop');
  const editorialCloseBtn = document.getElementById('editorialCloseBtn');
  const editorialBadge = document.getElementById('editorialBadge');
  const editorialPoster = document.getElementById('editorialPoster');
  const posterFaceStage = document.getElementById('posterFaceStage');
  const faceOriginalImg = document.getElementById('faceOriginalImg');
  const faceHalftoneCanvas = document.getElementById('faceHalftoneCanvas');
  const faceBlushPatch = document.getElementById('faceBlushPatch');
  const faceInkContours = document.getElementById('faceInkContours');
  const glitchLayerR = document.getElementById('glitchLayerR');
  const glitchLayerC = document.getElementById('glitchLayerC');
  const posterCollageLayer = document.getElementById('posterCollageLayer');

  /* =========================================================================
     4. State & Responsive Geometry Metrics
     ========================================================================= */
  const state = {
    position: 0,
    targetPosition: 0,
    velocity: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    dragStartPos: 0,
    dragLockedAxis: null,
    dragSamples: [],
    lastActiveIndex: -1,

    mode: 'perspective',
    perspectiveBlend: 1,
    targetPerspectiveBlend: 1,

    isEntering: true,
    entranceStartTime: 0,
    entranceDuration: 1080,

    rafId: null,
    lastFrameTime: 0,

    modalOpen: false,
    modalClosing: false,
    modalPostIndex: 0,
    modalSourceRect: null,
    modalTimers: [],

    metrics: {
      isMobile: false,
      cardW: 216,
      cardH: 352,
      bezel: 6,
      topZone: 72,
      botZone: 74,
      wingAngleDeg: 26,
      perspectivePx: 980,
      dragPixelsPerCard: 250,
    },
  };

  const ENTRANCE_VECTORS = {
    '-3': { dx: -340, dy: 85, dz: -110, rotZ: -14, scale: 0.80, delay: 200 },
    '-2': { dx: -255, dy: -155, dz: -85, rotZ: -12, scale: 0.82, delay: 150 },
    '-1': { dx: -185, dy: 170, dz: -65, rotZ: 9, scale: 0.85, delay: 95 },
    '0':  { dx: 0,    dy: -140, dz: -55, rotZ: 0,  scale: 0.88, delay: 50  },
    '1':  { dx: 185,  dy: -165, dz: -65, rotZ: -9, scale: 0.85, delay: 95 },
    '2':  { dx: 255,  dy: 165, dz: -85, rotZ: 12, scale: 0.82, delay: 150 },
    '3':  { dx: 340,  dy: -85, dz: -110, rotZ: 14, scale: 0.80, delay: 200 },
  };

  /* =========================================================================
     5. Helper Math + High-Speed 256-Sample 3D Wing LUT
     ========================================================================= */
  const clamp = (val, min, max) => (val < min ? min : val > max ? max : val);
  const lerp = (a, b, t) => a + (b - a) * t;
  const smoothstep = (t) => {
    const x = clamp(t, 0, 1);
    return x * x * (3 - 2 * x);
  };
  const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
  const easeOutQuint = (t) => 1 - Math.pow(1 - clamp(t, 0, 1), 5);
  const mod = (n, m) => ((n % m) + m) % m;
  const toEven = (n) => Math.round(n / 2) * 2;

  function getWrappedOffset(cardIndex, currentPos) {
    let diff = cardIndex - currentPos;
    const half = TOTAL / 2;
    diff = ((diff + half) % TOTAL + TOTAL) % TOTAL - half;
    return diff;
  }

  const LUT_SIZE = 256;
  const LUT_MAX_D = 3.6;
  const lut3DX = new Float32Array(LUT_SIZE + 1);
  const lut3DZ = new Float32Array(LUT_SIZE + 1);
  const lut3DRot = new Float32Array(LUT_SIZE + 1);
  const lutFlatX = new Float32Array(LUT_SIZE + 1);

  function rebuildPoseLUT() {
    const { cardW, wingAngleDeg, bezel, isMobile } = state.metrics;
    const bezelClearance = bezel + (isMobile ? 8 : 9);
    const outerGap3D = isMobile ? 11 : 9;
    const outerGapFlat = isMobile ? 12 : 18;
    const maxAngleRad = (wingAngleDeg * Math.PI) / 180;

    let x3D = 0;
    let z3D = 0;
    let xFlat = 0;
    const du = LUT_MAX_D / LUT_SIZE;

    lut3DX[0] = 0;
    lut3DZ[0] = 0;
    lut3DRot[0] = 0;
    lutFlatX[0] = 0;

    for (let i = 1; i <= LUT_SIZE; i++) {
      const uMid = (i - 0.5) * du;
      const uEnd = i * du;
      const gapWeight = smoothstep((uMid - 0.5) / 0.5);

      const step3D = cardW + lerp(bezelClearance * 1.4, outerGap3D, gapWeight);
      const stepFlat = cardW + lerp(bezelClearance * 1.45, outerGapFlat, gapWeight);

      const theta = maxAngleRad * smoothstep(uMid / 0.86);
      x3D += step3D * Math.cos(theta) * du;
      z3D += step3D * Math.sin(theta) * du;
      xFlat += stepFlat * du;

      lut3DX[i] = x3D;
      lut3DZ[i] = z3D;
      lut3DRot[i] = wingAngleDeg * smoothstep(uEnd / 0.86);
      lutFlatX[i] = xFlat;
    }
  }

  function sampleCardPose(d, pBlend) {
    const sign = d < 0 ? -1 : 1;
    const absD = Math.abs(d);
    const fIdx = clamp((absD / LUT_MAX_D) * LUT_SIZE, 0, LUT_SIZE - 0.0001);
    const idx = fIdx | 0;
    const frac = fIdx - idx;

    const x3D = lerp(lut3DX[idx], lut3DX[idx + 1], frac);
    const z3D = lerp(lut3DZ[idx], lut3DZ[idx + 1], frac);
    const rot3D = lerp(lut3DRot[idx], lut3DRot[idx + 1], frac);
    const xFlat = lerp(lutFlatX[idx], lutFlatX[idx + 1], frac);

    const x = sign * lerp(xFlat, x3D, pBlend);
    const z = z3D * pBlend;
    const rotY = -sign * rot3D * pBlend;
    const scale = lerp(1, 0.96, smoothstep(absD / 1.2) * (1 - pBlend));

    const maxVisible = state.metrics.isMobile ? 1.55 : 2.15;
    let opacity = 1;
    if (absD > maxVisible) {
      opacity = clamp(1 - (absD - maxVisible) / 0.55, 0, 1);
    }

    return { x, z, rotY, scale, opacity };
  }

  /* =========================================================================
     6. Auto-Adaptive Luminance Pop-Art Halftone Engine (Works on Dark & Bright Photos!)
     ========================================================================= */
  const halftoneCache = new Map();
  const halftonePending = new Set();
  const HALFTONE_W = 510;
  const HALFTONE_H = 680; // Exact 3:4 match!

  function buildHalftoneOffscreen(postIndex, onReady) {
    const post = POSTS[postIndex];
    const cacheKey = `yuli-${postIndex}`;

    if (halftoneCache.has(cacheKey)) {
      if (onReady) onReady(halftoneCache.get(cacheKey));
      return;
    }
    if (halftonePending.has(cacheKey)) return;
    halftonePending.add(cacheKey);

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      halftonePending.delete(cacheKey);
      const W = HALFTONE_W;
      const H = HALFTONE_H;
      const outCanvas = document.createElement('canvas');
      outCanvas.width = W;
      outCanvas.height = H;
      const oCtx = outCanvas.getContext('2d');

      try {
        const sampleCanvas = document.createElement('canvas');
        sampleCanvas.width = W;
        sampleCanvas.height = H;
        const sCtx = sampleCanvas.getContext('2d');
        sCtx.drawImage(img, 0, 0, W, H);
        const pixelData = sCtx.getImageData(0, 0, W, H).data;

        // 1. Fast histogram scan to auto-normalize dark indoor & bright outdoor shots!
        const hist = new Uint32Array(256);
        const totalSamples = (W * H) >> 2;
        for (let i = 0; i < pixelData.length; i += 16) {
          const l = (0.299 * pixelData[i] + 0.587 * pixelData[i + 1] + 0.114 * pixelData[i + 2]) | 0;
          hist[l]++;
        }
        let acc = 0, pLow = 12, pHigh = 235;
        for (let i = 0; i < 256; i++) {
          acc += hist[i];
          if (acc >= totalSamples * 0.07) { pLow = i; break; }
        }
        acc = 0;
        for (let i = 255; i >= 0; i--) {
          acc += hist[i];
          if (acc >= totalSamples * 0.06) { pHigh = i; break; }
        }
        const span = Math.max(48, pHigh - pLow);

        // 2. Crisp pure white print paper base
        oCtx.fillStyle = '#ffffff';
        oCtx.fillRect(0, 0, W, H);

        // 2b. Subtle photographic monochrome tonal under-layer (keeps eyes, brows & smile 100% recognizable!)
        oCtx.save();
        oCtx.globalAlpha = 0.28;
        oCtx.filter = 'grayscale(1) contrast(1.22) brightness(1.12)';
        oCtx.drawImage(img, 0, 0, W, H);
        oCtx.restore();

        // Subject focal point for balanced studio halftone clarity across indoor & outdoor shots
        const subX = (post.face.x / 100) * W;
        const subY = (post.face.y / 100) * H;
        const isDarkScene = post.scene === 'indoor-dark' || post.scene === 'indoor-moody';
        const isBacklit = post.scene === 'outdoor-backlit';

        // Crisp magazine-grade fine halftone screen (3.3px pitch preserves sharp facial features!)
        const step = 3.3;
        const cosA = Math.SQRT1_2;
        const sinA = Math.SQRT1_2;
        const cx = W * 0.5;
        const cy = H * 0.5;
        const diag = Math.ceil(Math.hypot(W, H) * 0.54);

        oCtx.fillStyle = '#141418';
        oCtx.beginPath();
        const accentDots = [];

        for (let gy = -diag; gy <= diag; gy += step) {
          for (let gx = -diag; gx <= diag; gx += step) {
            const px = (cx + gx * cosA - gy * sinA) | 0;
            const py = (cy + gx * sinA + gy * cosA) | 0;
            if (px < 0 || px >= W || py < 0 || py >= H) continue;

            const idx = (py * W + px) * 4;
            const r = pixelData[idx];
            const g = pixelData[idx + 1];
            const b = pixelData[idx + 2];

            const rawLum = 0.299 * r + 0.587 * g + 0.114 * b;
            let lum = clamp((rawLum - pLow) / span, 0, 1);

            const dSub = Math.hypot((px - subX) / (W * 0.55), (py - subY) / (H * 0.52));

            if (isDarkScene) {
              // Keep her face & eyes crisp with full midtone dot range; lift outer dark corners softly
              const inFace = clamp(1 - dSub * 1.4, 0, 1);
              const faceLum = clamp(rawLum / 255, 0, 1);
              const bgLift = clamp((dSub - 0.55) * 0.45, 0, 0.36);
              lum = lerp(Math.pow(lum, 0.78) + bgLift, clamp((faceLum - 0.5) * 1.32 + 0.52, 0.04, 0.94), inFace);
            } else if (isBacklit) {
              // Preserve crisp facial detail against bright mountain backlight
              const inFace = clamp(1 - dSub * 1.35, 0, 1);
              lum = lerp(Math.pow(lum, 1.12), clamp((lum - 0.45) * 1.28 + 0.48, 0.05, 0.92), inFace);
            } else {
              lum = clamp((lum - 0.5) * 1.24 + 0.52, 0.03, 0.96);
            }

            if (lum > 0.95) continue;

            const darkness = 1 - lum;
            const radius = Math.pow(darkness, 0.84) * (step * 0.62);
            if (radius < 0.28) continue;

            if (r - b > 34 && r > 120 && dSub < 0.48) {
              accentDots.push(px, py, radius);
            } else {
              oCtx.moveTo(px + radius, py);
              oCtx.arc(px, py, radius, 0, Math.PI * 2);
            }
          }
        }
        oCtx.fill();

        if (accentDots.length > 0) {
          oCtx.fillStyle = '#5a222d';
          oCtx.beginPath();
          for (let i = 0; i < accentDots.length; i += 3) {
            oCtx.moveTo(accentDots[i] + accentDots[i + 2], accentDots[i + 1]);
            oCtx.arc(accentDots[i], accentDots[i + 1], accentDots[i + 2], 0, Math.PI * 2);
          }
          oCtx.fill();
        }
      } catch (_) {
        oCtx.fillStyle = '#ffffff';
        oCtx.fillRect(0, 0, W, H);
        oCtx.filter = 'grayscale(1) contrast(1.7) brightness(1.08)';
        oCtx.drawImage(img, 0, 0, W, H);
        oCtx.filter = 'none';
      }

      halftoneCache.set(cacheKey, outCanvas);
      if (onReady) onReady(outCanvas);
    };
    img.src = post.image;
  }

  function renderHalftoneToCanvas(postIndex) {
    faceHalftoneCanvas.width = HALFTONE_W;
    faceHalftoneCanvas.height = HALFTONE_H;
    const ctx = faceHalftoneCanvas.getContext('2d');
    buildHalftoneOffscreen(postIndex, (cachedCanvas) => {
      if (state.modalOpen && state.modalPostIndex === postIndex) {
        ctx.clearRect(0, 0, HALFTONE_W, HALFTONE_H);
        ctx.drawImage(cachedCanvas, 0, 0);
      }
    });
  }

  // Silently pre-cache halftone portraits near the active slide when browser is idle
  const prewarmQueue = [0, 1, 15, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  function scheduleHalftonePrewarm(qIdx = 0) {
    if (qIdx >= prewarmQueue.length) return;
    const idleFn = window.requestIdleCallback || ((cb) => setTimeout(cb, 260));
    idleFn(() => {
      if (!state.isDragging && !state.isEntering && !state.modalOpen) {
        buildHalftoneOffscreen(prewarmQueue[qIdx]);
        scheduleHalftonePrewarm(qIdx + 1);
      } else {
        setTimeout(() => scheduleHalftonePrewarm(qIdx), 450);
      }
    });
  }

  /* =========================================================================
     7. Build Editorial Collage Elements from Post-Specific Blueprint
     ========================================================================= */
  const STAR_SVGS = {
    burst12: `
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <polygon points="50,2 57,31 74,7 64,34 93,23 68,43 98,50 68,57 93,77 64,66 74,93 57,69 50,98 43,69 26,93 36,66 7,77 32,57 2,50 32,43 7,23 36,34 26,7 43,31"/>
      </svg>
    `,
    diamond4: `
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <path d="M50 2 C55 34 66 45 98 50 C66 55 55 66 50 98 C45 66 34 55 2 50 C34 45 45 34 50 2 Z"/>
      </svg>
    `,
  };

  function buildCollageForPost(postIndex) {
    const bp = getPostBlueprint(postIndex);
    const frag = document.createDocumentFragment();

    faceBlushPatch.style.left = bp.blushPatch.left;
    faceBlushPatch.style.top = bp.blushPatch.top;
    faceBlushPatch.style.width = bp.blushPatch.width;
    faceBlushPatch.style.height = bp.blushPatch.height;
    faceInkContours.setAttribute('viewBox', '0 0 400 533');
    faceInkContours.innerHTML = '';

    const applyMotionVars = (el, { fromX = '0px', fromY = '0px', fromRot = '0deg', restRot = '0deg', delay = 0.2, enterDur = 0.94, exitDur = 0.54 }) => {
      el.style.setProperty('--from-x', fromX);
      el.style.setProperty('--from-y', fromY);
      el.style.setProperty('--from-rot', fromRot);
      el.style.setProperty('--rest-rot', restRot);
      el.style.setProperty('--enter-delay', `${delay.toFixed(2)}s`);
      const exitDelay = Math.max(0, 0.22 - delay * 0.35);
      el.style.setProperty('--exit-delay', `${exitDelay.toFixed(2)}s`);
      el.style.setProperty('--enter-dur', `${enterDur.toFixed(2)}s`);
      el.style.setProperty('--exit-dur', `${exitDur.toFixed(2)}s`);
    };

    const masthead = document.createElement('div');
    masthead.className = 'collage-el collage-masthead';
    masthead.textContent = CLIENT_BRAND_NAME;
    masthead.style.top = bp.masthead.top;
    applyMotionVars(masthead, { fromX: bp.masthead.fromX, fromY: bp.masthead.fromY, delay: bp.masthead.delay, enterDur: 0.88, exitDur: 0.48 });
    frag.appendChild(masthead);

    bp.stars.forEach((st) => {
      const starEl = document.createElement('div');
      starEl.className = 'collage-el collage-star';
      starEl.style.left = st.left;
      starEl.style.top = st.top;
      starEl.style.width = st.size;
      starEl.style.height = st.size;
      starEl.style.zIndex = '12';
      starEl.innerHTML = STAR_SVGS[st.type] || STAR_SVGS.diamond4;
      applyMotionVars(starEl, { fromX: st.fromX, fromY: st.fromY, fromRot: st.fromRot, delay: st.delay, enterDur: 1.02, exitDur: 0.54 });
      frag.appendChild(starEl);
    });

    bp.boxes.forEach((box) => {
      const sourcePost = POSTS[mod(box.sourcePost, TOTAL)];
      const boxEl = document.createElement('div');
      boxEl.className = `collage-el collage-photo-box tone-${box.tone || 'rose'}`;
      boxEl.style.left = box.left;
      boxEl.style.top = box.top;
      boxEl.style.width = box.width;
      boxEl.style.height = box.height;
      boxEl.style.zIndex = String(box.z || 16);

      const img = document.createElement('img');
      img.src = sourcePost.image;
      img.decoding = 'async';
      img.alt = `Detail dari ${sourcePost.author}`;
      img.style.setProperty('--crop-pos', box.cropPos);
      img.style.setProperty('--crop-zoom', String(box.cropZoom));
      img.style.setProperty('--crop-origin', box.cropOrigin);
      boxEl.appendChild(img);

      applyMotionVars(boxEl, { fromX: box.fromX, fromY: box.fromY, fromRot: box.fromRot || '0deg', delay: box.delay, enterDur: 1.0, exitDur: 0.56 });
      frag.appendChild(boxEl);
    });

    if (bp.stamp) {
      const stampEl = document.createElement('div');
      stampEl.className = 'collage-el collage-stamp-tag';
      stampEl.textContent = bp.stamp.text;
      stampEl.style.left = bp.stamp.left;
      stampEl.style.top = bp.stamp.top;
      stampEl.style.zIndex = '24';
      applyMotionVars(stampEl, { fromX: bp.stamp.fromX, fromY: bp.stamp.fromY, delay: bp.stamp.delay, enterDur: 0.84, exitDur: 0.46 });
      frag.appendChild(stampEl);
    }

    bp.pixels.forEach((px) => {
      const pxEl = document.createElement('div');
      pxEl.className = 'collage-el collage-pixels';
      pxEl.style.left = px.left;
      pxEl.style.top = px.top;
      pxEl.style.zIndex = '22';
      pxEl.innerHTML = '<span class="px-dark"></span><span class="px-rose"></span>';
      applyMotionVars(pxEl, { fromX: px.fromX, fromY: px.fromY, fromRot: '18deg', delay: px.delay, enterDur: 0.92, exitDur: 0.5 });
      frag.appendChild(pxEl);
    });

    if (bp.barcode) {
      const bcEl = document.createElement('div');
      bcEl.className = 'collage-el collage-barcode';
      bcEl.style.left = bp.barcode.left;
      bcEl.style.top = bp.barcode.top;
      bcEl.style.height = bp.barcode.height;
      bcEl.style.zIndex = '21';
      bcEl.innerHTML = `<span class="barcode-bars"></span><span class="barcode-serial">${bp.barcode.serial}</span>`;
      applyMotionVars(bcEl, { fromX: bp.barcode.fromX, fromY: bp.barcode.fromY, delay: bp.barcode.delay, enterDur: 0.96, exitDur: 0.5 });
      frag.appendChild(bcEl);
    }

    if (bp.typo) {
      const typoEl = document.createElement('div');
      typoEl.className = `collage-el collage-typography ${bp.typo.align === 'right' ? 'align-right' : ''}`;
      typoEl.style.left = bp.typo.left;
      typoEl.style.top = bp.typo.top;
      typoEl.style.zIndex = '25';
      typoEl.innerHTML = `
        <div class="collage-typo-title">${bp.typo.title}</div>
        <div class="collage-typo-sub">${bp.typo.line1}<br/>${bp.typo.line2}</div>
      `;
      applyMotionVars(typoEl, { fromX: bp.typo.fromX, fromY: bp.typo.fromY, delay: bp.typo.delay, enterDur: 0.98, exitDur: 0.52 });
      frag.appendChild(typoEl);
    }

    posterCollageLayer.innerHTML = '';
    posterCollageLayer.appendChild(frag);
    return bp;
  }

  /* =========================================================================
     8. Open & Close Editorial Collage Modal
     ========================================================================= */
  function clearModalTimers() {
    while (state.modalTimers.length) clearTimeout(state.modalTimers.pop());
  }

  function triggerFaceGlitch(switchToHalftone) {
    posterFaceStage.classList.remove('is-glitching');
    void posterFaceStage.offsetWidth;
    posterFaceStage.classList.add('is-glitching');

    state.modalTimers.push(
      setTimeout(() => {
        posterFaceStage.classList.toggle('is-halftone', switchToHalftone);
      }, 115)
    );
    state.modalTimers.push(
      setTimeout(() => {
        posterFaceStage.classList.remove('is-glitching');
      }, 315)
    );
  }

  function openEditorialModal(postIndex, sourceMediaEl) {
    if (state.modalOpen || state.modalClosing) return;
    clearModalTimers();

    state.modalOpen = true;
    state.modalClosing = false;
    state.modalPostIndex = postIndex;

    const post = POSTS[postIndex];
    const bp = buildCollageForPost(postIndex);
    const numStr = String(postIndex + 1).padStart(2, '0');
    const totStr = String(TOTAL).padStart(2, '0');
    editorialBadge.textContent = `ISSUE ${numStr} / ${totStr} · ${bp.theme.title.toUpperCase()}`;

    faceOriginalImg.src = post.image;
    glitchLayerR.style.backgroundImage = `url("${post.image}")`;
    glitchLayerC.style.backgroundImage = `url("${post.image}")`;

    posterFaceStage.classList.remove('is-halftone', 'is-glitching');
    editorialPoster.classList.remove('is-collage-in', 'is-collage-out');

    renderHalftoneToCanvas(postIndex);

    const sourceRect = sourceMediaEl ? sourceMediaEl.getBoundingClientRect() : null;
    state.modalSourceRect = sourceRect;

    editorialModal.setAttribute('aria-hidden', 'false');
    editorialModal.classList.remove('is-closing');
    editorialModal.classList.add('is-visible');
    appShell.classList.add('is-modal-open');

    editorialPoster.style.transition = 'none';
    editorialPoster.style.transform = 'none';
    const targetRect = editorialPoster.getBoundingClientRect();

    if (sourceRect && targetRect.width > 0) {
      const dx = sourceRect.left + sourceRect.width / 2 - (targetRect.left + targetRect.width / 2);
      const dy = sourceRect.top + sourceRect.height / 2 - (targetRect.top + targetRect.height / 2);
      const sx = sourceRect.width / targetRect.width;
      const sy = sourceRect.height / targetRect.height;
      editorialPoster.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(${sx}, ${sy})`;
      editorialPoster.style.borderRadius = '8px';
    } else {
      editorialPoster.style.transform = 'scale(0.84)';
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        editorialModal.classList.add('is-active');
        editorialPoster.style.transition = 'transform 0.52s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.48s ease';
        editorialPoster.style.transform = 'translate3d(0, 0, 0) scale(1)';
        editorialPoster.style.borderRadius = '2px';
      });
    });

    state.modalTimers.push(setTimeout(() => triggerFaceGlitch(true), 240));
    state.modalTimers.push(setTimeout(() => editorialPoster.classList.add('is-collage-in'), 330));
  }

  function closeEditorialModal() {
    if (!state.modalOpen || state.modalClosing) return;
    clearModalTimers();
    state.modalClosing = true;

    editorialPoster.classList.remove('is-collage-in');
    editorialPoster.classList.add('is-collage-out');
    // Restore the feed scale now so the destination rect is final when measured.
    appShell.classList.remove('is-modal-open');

    state.modalTimers.push(setTimeout(() => triggerFaceGlitch(false), 165));

    state.modalTimers.push(
      setTimeout(() => {
        editorialModal.classList.add('is-closing');

        const activeCardMedia = cardNodes[state.modalPostIndex]?.querySelector('.card-media');
        const destRect = activeCardMedia ? activeCardMedia.getBoundingClientRect() : state.modalSourceRect;
        const currRect = editorialPoster.getBoundingClientRect();

        if (destRect && currRect.width > 0) {
          const dx = destRect.left + destRect.width / 2 - (currRect.left + currRect.width / 2);
          const dy = destRect.top + destRect.height / 2 - (currRect.top + currRect.height / 2);
          const sx = destRect.width / currRect.width;
          const sy = destRect.height / currRect.height;
          editorialPoster.style.transition = 'transform 0.46s cubic-bezier(0.22, 1, 0.36, 1), border-radius 0.46s ease, opacity 0.16s ease 0.32s';
          editorialPoster.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(${sx}, ${sy})`;
          editorialPoster.style.borderRadius = '8px';
          editorialPoster.style.opacity = '0';
        } else {
          editorialPoster.style.transition = 'transform 0.36s ease, opacity 0.3s ease';
          editorialPoster.style.transform = 'scale(0.86)';
          editorialPoster.style.opacity = '0';
        }
      }, 500)
    );

    state.modalTimers.push(
      setTimeout(() => {
        // Hide instantly (no fade) so the poster can't flash back to full size while resetting.
        editorialModal.style.transition = 'none';
        editorialModal.classList.remove('is-visible', 'is-active', 'is-closing');
        editorialModal.setAttribute('aria-hidden', 'true');
        void editorialModal.offsetWidth;
        editorialPoster.classList.remove('is-collage-in', 'is-collage-out');
        posterFaceStage.classList.remove('is-halftone', 'is-glitching');
        editorialPoster.style.transition = 'none';
        editorialPoster.style.transform = '';
        editorialPoster.style.borderRadius = '';
        editorialPoster.style.opacity = '';
        void editorialPoster.offsetWidth;
        editorialModal.style.transition = '';
        editorialPoster.style.transition = '';
        state.modalOpen = false;
        state.modalClosing = false;
      }, 990)
    );
  }

  /* =========================================================================
     9. Responsive Exact 3:4 Photo Box Sizing (Desktop & Mobile Native Fit!)
     ========================================================================= */
  const CARD_CHROME_H = 64; // 34px header + 30px action bar -> leaves EXACT 3:4 photo area!

  function updateResponsiveMetrics() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const isMobile = vw < 768;

    // Fit total phone height cleanly inside viewport while keeping exact 3:4 photo aspect ratio!
    const availStageH = vh - (isMobile ? 185 : 178);
    // Total phoneH = (4/3)*cardW + 64 + 0.65*cardW + 12 ≈ 1.983*cardW + 76
    const maxByHeight = (availStageH - 96) / 1.98;

    let rawCardW;
    if (isMobile) {
      rawCardW = clamp(Math.min(vw * 0.56, maxByHeight), 168, 224);
    } else {
      rawCardW = clamp(Math.min(vw * 0.16, maxByHeight), 174, 232);
    }

    const cardW = toEven(rawCardW);
    const mediaH = toEven((cardW * 4) / 3); // Exact 3:4 match to every photo in D:\local send\yuli!
    const cardH = mediaH + CARD_CHROME_H;
    const bezel = isMobile ? 5 : 6;
    const topZone = toEven(clamp(cardW * 0.325, 64, 76));
    const botZone = toEven(clamp(cardW * 0.335, 66, 78));
    const phoneRadius = Math.round(cardW * 0.165);
    const screenRadius = Math.max(22, phoneRadius - bezel + 1);
    const cardYOffset = (topZone - botZone) / 2;

    state.metrics = {
      isMobile,
      cardW,
      cardH,
      bezel,
      topZone,
      botZone,
      wingAngleDeg: isMobile ? 20 : 25,
      perspectivePx: isMobile ? Math.round(cardW * 3.95) : Math.round(cardW * 4.45),
      dragPixelsPerCard: isMobile ? cardW * 1.05 : cardW * 1.18,
    };

    rootStyle.setProperty('--card-w', `${cardW}px`);
    rootStyle.setProperty('--card-h', `${cardH}px`);
    rootStyle.setProperty('--bezel', `${bezel}px`);
    rootStyle.setProperty('--top-zone', `${topZone}px`);
    rootStyle.setProperty('--bot-zone', `${botZone}px`);
    rootStyle.setProperty('--phone-radius', `${phoneRadius}px`);
    rootStyle.setProperty('--screen-radius', `${screenRadius}px`);
    rootStyle.setProperty('--stage-perspective', `${state.metrics.perspectivePx}px`);
    rootStyle.setProperty('--card-y-offset', `${cardYOffset}px`);

    if (gestureHintEl) {
      gestureHintEl.textContent = isMobile
        ? 'Usap kiri / kanan · Tap 2× suka · Ketuk Dynamic Island untuk musik'
        : 'Geser · Tap 2× suka · Klik foto untuk kolase · Dynamic Island untuk musik';
    }

    rebuildPoseLUT();
    scheduleRender();
  }

  /* =========================================================================
     10. Build All 16 Post Cards, Story Avatars & Pagination Dots
     ========================================================================= */
  const cardNodes = [];
  const cardCache = [];
  const dotNodes = [];

  function hydrateStoryAvatars() {
    const avatars = storiesBar.querySelectorAll('.story-avatar');
    const storySources = [0, 2, 5, 7, 10];
    avatars.forEach((el, i) => {
      const p = POSTS[storySources[i % storySources.length]];
      el.style.backgroundImage = `url("${p.image}")`;
      el.style.backgroundPosition = `${p.face.x}% ${p.face.y}%`;
    });
  }

  function buildUI() {
    trackEl.innerHTML = '';
    dockDotsEl.innerHTML = '';
    cardNodes.length = 0;
    cardCache.length = 0;
    dotNodes.length = 0;

    hydrateStoryAvatars();

    POSTS.forEach((post, index) => {
      const card = document.createElement('article');
      card.className = 'ig-card';
      card.dataset.index = String(index);
      card.setAttribute('aria-label', `Postingan ${index + 1} oleh ${post.author}: ${post.caption}`);

      card.innerHTML = `
        <div class="card-header">
          <div class="card-author">
            <span class="card-avatar" style="background-image: url('${post.image}'); background-position: ${post.face.x}% ${post.face.y}%"></span>
            <div class="card-meta">
              <span class="card-username">${post.author}</span>
              <span class="card-location">${post.location}</span>
            </div>
          </div>
          <div class="card-dots-menu" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
        </div>

        <div class="card-media" role="button" tabindex="0" aria-label="Buka efek editorial untuk ${post.author}">
          <img class="post-photo" src="${post.image}" decoding="async" alt="${post.caption}" style="object-position: center center" draggable="false" />
          <span class="card-tag">${post.tag}</span>
          <span class="card-editorial-cue" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
            Editorial
          </span>
          <span class="heart-burst" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </span>
        </div>

        <div class="card-actions">
          <div class="actions-left">
            <button type="button" class="action-btn like-btn ${post.liked ? 'is-liked' : ''}" aria-label="Suka" aria-pressed="${post.liked}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20.5s-7.5-4.8-9.2-9.2C1.6 8.2 3.7 5 6.9 5c1.9 0 3.5 1 4.4 2.4h1.4C13.6 6 15.2 5 17.1 5c3.2 0 5.3 3.2 4.1 6.3-1.7 4.4-9.2 9.2-9.2 9.2Z"/>
              </svg>
            </button>
            <button type="button" class="action-btn comment-btn" aria-label="Komentar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/>
              </svg>
            </button>
            <button type="button" class="action-btn share-btn" aria-label="Bagikan">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4 20-7Z"/>
              </svg>
            </button>
          </div>

          <div class="card-mini-dots" aria-hidden="true">
            <span class="${index % 4 === 0 ? 'is-on' : ''}"></span>
            <span class="${index % 4 === 1 ? 'is-on' : ''}"></span>
            <span class="${index % 4 === 2 ? 'is-on' : ''}"></span>
            <span class="${index % 4 === 3 ? 'is-on' : ''}"></span>
          </div>

          <div class="actions-right">
            <button type="button" class="action-btn bookmark-btn ${post.saved ? 'is-saved' : ''}" aria-label="Simpan" aria-pressed="${post.saved}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                <path d="m19 21-7-4.8L5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z"/>
              </svg>
            </button>
          </div>
        </div>
      `;

      const likeBtn = card.querySelector('.like-btn');
      const bookmarkBtn = card.querySelector('.bookmark-btn');
      const mediaEl = card.querySelector('.card-media');
      const burstEl = card.querySelector('.heart-burst');

      const triggerHeartBurst = (tiltDeg = 0) => {
        burstEl.style.setProperty('--heart-tilt', `${tiltDeg}deg`);
        burstEl.classList.remove('is-popping');
        void burstEl.offsetWidth;
        burstEl.classList.add('is-popping');
      };

      const bounceLikeBtn = () => {
        likeBtn.classList.remove('is-bouncing');
        void likeBtn.offsetWidth;
        likeBtn.classList.add('is-bouncing');
      };

      likeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        post.liked = !post.liked;
        likeBtn.classList.toggle('is-liked', post.liked);
        likeBtn.setAttribute('aria-pressed', String(post.liked));
        if (post.liked) {
          bounceLikeBtn();
          triggerHeartBurst(0);
        }
      });

      bookmarkBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        post.saved = !post.saved;
        bookmarkBtn.classList.toggle('is-saved', post.saved);
        bookmarkBtn.setAttribute('aria-pressed', String(post.saved));
      });

      let lastTapTime = 0;
      let singleTapTimer = null;

      const handleDoubleTapLike = () => {
        if (!post.liked) {
          post.liked = true;
          likeBtn.classList.add('is-liked');
          likeBtn.setAttribute('aria-pressed', 'true');
        }
        bounceLikeBtn();
        const organicTilt = (Math.random() * 14 - 7).toFixed(1);
        triggerHeartBurst(organicTilt);
      };

      const handleCardActivate = () => {
        if (dragMovedSignificantly) return;
        const offset = getWrappedOffset(index, state.position);
        if (Math.abs(offset) < 0.35) {
          const now = performance.now();
          if (now - lastTapTime < 280) {
            clearTimeout(singleTapTimer);
            singleTapTimer = null;
            lastTapTime = 0;
            handleDoubleTapLike();
          } else {
            lastTapTime = now;
            singleTapTimer = setTimeout(() => {
              singleTapTimer = null;
              lastTapTime = 0;
              if (!dragMovedSignificantly) {
                openEditorialModal(index, mediaEl);
              }
            }, 255);
          }
        } else {
          goToOffset(Math.round(offset));
        }
      };

      mediaEl.addEventListener('click', (e) => {
        e.stopPropagation();
        handleCardActivate();
      });

      mediaEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          clearTimeout(singleTapTimer);
          singleTapTimer = null;
          lastTapTime = 0;
          const offset = getWrappedOffset(index, state.position);
          if (Math.abs(offset) < 0.35) {
            openEditorialModal(index, mediaEl);
          } else {
            goToOffset(Math.round(offset));
          }
        }
      });

      card.addEventListener('click', (e) => {
        if (e.target.closest('.action-btn') || e.target.closest('.card-media')) return;
        if (dragMovedSignificantly) return;
        const offset = getWrappedOffset(index, state.position);
        if (Math.abs(offset) >= 0.35) {
          goToOffset(Math.round(offset));
        }
      });

      trackEl.appendChild(card);
      cardNodes.push(card);
      cardCache.push({ isCenter: null, zIndex: -1, pe: '', opacity: -1, visible: null });

      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'dock-dot';
      dot.setAttribute('aria-label', `Ke postingan ${index + 1}`);
      dot.addEventListener('click', () => {
        const diff = getWrappedOffset(index, state.targetPosition);
        state.targetPosition = Math.round(state.targetPosition + diff);
        endEntranceEarly();
        scheduleRender();
      });
      dockDotsEl.appendChild(dot);
      dotNodes.push(dot);
    });
  }

  /* =========================================================================
     11. Choreographed Multi-Directional Carousel Entrance
     ========================================================================= */
  function startEntranceAnimation() {
    if (state.modalOpen) closeEditorialModal();
    state.isEntering = true;
    state.entranceStartTime = performance.now();
    state.velocity = 0;
    state.targetPosition = Math.round(state.targetPosition);
    state.position = state.targetPosition;

    appShell.classList.remove('is-entered');
    appShell.classList.add('is-entering');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        appShell.classList.remove('is-entering');
        appShell.classList.add('is-entered');
      });
    });

    scheduleRender();
  }

  function endEntranceEarly() {
    if (!state.isEntering) return;
    state.isEntering = false;
    appShell.classList.remove('is-entering');
    appShell.classList.add('is-entered');
  }

  /* =========================================================================
     12. Navigation, Mode Switch & Dynamic Studio Mood Aura Sync
     ========================================================================= */
  function goToOffset(delta) {
    if (state.modalOpen) return;
    endEntranceEarly();
    state.targetPosition = Math.round(state.targetPosition) + delta;
    scheduleRender();
  }

  function setViewMode(mode) {
    state.mode = mode;
    state.targetPerspectiveBlend = mode === 'perspective' ? 1 : 0;
    appShell.dataset.mode = mode;

    const is3D = mode === 'perspective';
    modePerspectiveBtn.classList.toggle('is-active', is3D);
    modePerspectiveBtn.setAttribute('aria-selected', String(is3D));
    modeFlatBtn.classList.toggle('is-active', !is3D);
    modeFlatBtn.setAttribute('aria-selected', String(!is3D));
    scheduleRender();
  }

  function syncActiveMetadata(activeIndex) {
    if (activeIndex === state.lastActiveIndex) return;
    state.lastActiveIndex = activeIndex;

    const post = POSTS[activeIndex];
    const numStr = String(activeIndex + 1).padStart(2, '0');
    const totStr = String(TOTAL).padStart(2, '0');
    slideCounterEl.textContent = `${numStr} / ${totStr}`;

    activeCaptionAuthorEl.textContent = post.author;
    activeCaptionTextEl.textContent = post.caption;

    rootStyle.setProperty('--mood-glow', post.mood1);
    rootStyle.setProperty('--mood-glow-2', post.mood2);

    for (let i = 0; i < dotNodes.length; i++) {
      dotNodes[i].classList.toggle('is-active', i === activeIndex);
    }
  }

  /* =========================================================================
     13. Input Handlers
     ========================================================================= */
  let dragMovedSignificantly = false;
  let activePointerId = null;

  stageEl.addEventListener('pointerdown', (e) => {
    if (state.modalOpen) return;
    if (e.target.closest('button') || e.target.closest('#dynamicIsland') || e.target.closest('#diScrim')) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    endEntranceEarly();
    activePointerId = e.pointerId;
    state.isDragging = true;
    dragMovedSignificantly = false;
    state.dragLockedAxis = null;
    state.dragStartX = e.clientX;
    state.dragStartY = e.clientY;
    state.dragStartPos = state.position;
    state.velocity = 0;
    state.dragSamples = [{ pos: state.position, time: performance.now() }];

    stageEl.classList.add('is-dragging');
    scheduleRender();
  });

  stageEl.addEventListener('pointermove', (e) => {
    if (!state.isDragging || e.pointerId !== activePointerId) return;

    const dx = e.clientX - state.dragStartX;
    const dy = e.clientY - state.dragStartY;

    if (!state.dragLockedAxis && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
      state.dragLockedAxis = Math.abs(dx) >= Math.abs(dy) ? 'x' : 'y';
    }
    if (state.dragLockedAxis === 'y') return;

    if (Math.abs(dx) > 7 && !dragMovedSignificantly) {
      dragMovedSignificantly = true;
      try {
        stageEl.setPointerCapture(e.pointerId);
      } catch (_) {}
    }

    const deltaCards = -dx / state.metrics.dragPixelsPerCard;
    state.position = state.dragStartPos + deltaCards;
    state.targetPosition = state.position;

    const now = performance.now();
    state.dragSamples.push({ pos: state.position, time: now });
    while (state.dragSamples.length > 2 && now - state.dragSamples[0].time > 90) {
      state.dragSamples.shift();
    }
    scheduleRender();
  });

  function finishPointerDrag(e) {
    if (!state.isDragging || (e && e.pointerId !== activePointerId)) return;
    state.isDragging = false;
    activePointerId = null;
    stageEl.classList.remove('is-dragging');

    let releaseVel = 0;
    if (state.dragSamples.length >= 2) {
      const first = state.dragSamples[0];
      const last = state.dragSamples[state.dragSamples.length - 1];
      const dt = Math.max(8, last.time - first.time);
      releaseVel = ((last.pos - first.pos) / dt) * 16.67;
    }

    const momentumProjection = clamp(releaseVel * 7.2, -3.2, 3.2);
    state.targetPosition = Math.round(state.position + momentumProjection);
    state.velocity = clamp(releaseVel * 0.72, -0.5, 0.5);
    scheduleRender();

    setTimeout(() => {
      dragMovedSignificantly = false;
    }, 35);
  }

  stageEl.addEventListener('pointerup', finishPointerDrag);
  stageEl.addEventListener('pointercancel', finishPointerDrag);

  let wheelSnapTimer = null;
  stageEl.addEventListener(
    'wheel',
    (e) => {
      if (state.modalOpen) return;
      e.preventDefault();
      endEntranceEarly();

      const deltaPx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const sensitivity = state.metrics.dragPixelsPerCard * 1.45;
      state.targetPosition += deltaPx / sensitivity;
      scheduleRender();

      clearTimeout(wheelSnapTimer);
      wheelSnapTimer = setTimeout(() => {
        state.targetPosition = Math.round(state.targetPosition);
        scheduleRender();
      }, 130);
    },
    { passive: false }
  );

  window.addEventListener('keydown', (e) => {
    if (state.modalOpen) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeEditorialModal();
      }
      return;
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToOffset(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToOffset(-1);
    } else if (e.key.toLowerCase() === 'r' && !e.metaKey && !e.ctrlKey) {
      startEntranceAnimation();
    }
  });

  editorialCloseBtn.addEventListener('click', closeEditorialModal);
  editorialBackdrop.addEventListener('click', closeEditorialModal);

  let modalTouchStartY = 0;
  editorialModal.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) modalTouchStartY = e.touches[0].clientY;
  }, { passive: true });
  editorialModal.addEventListener('touchend', (e) => {
    if (e.changedTouches.length === 1 && e.changedTouches[0].clientY - modalTouchStartY > 80) {
      closeEditorialModal();
    }
  }, { passive: true });

  prevBtn.addEventListener('click', () => goToOffset(-1));
  nextBtn.addEventListener('click', () => goToOffset(1));
  mobilePrevBtn.addEventListener('click', () => goToOffset(-1));
  mobileNextBtn.addEventListener('click', () => goToOffset(1));
  replayBtn.addEventListener('click', () => startEntranceAnimation());
  modePerspectiveBtn.addEventListener('click', () => setViewMode('perspective'));
  modeFlatBtn.addEventListener('click', () => setViewMode('flat'));

  storiesBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.story-item');
    if (!btn) return;
    btn.classList.toggle('is-viewed');
  });

  /* =========================================================================
     14. On-Demand 120fps Render Loop with Smart Off-Stage Culling (16 Cards!)
     ========================================================================= */
  function scheduleRender() {
    if (state.rafId !== null) return;
    state.lastFrameTime = performance.now();
    state.rafId = requestAnimationFrame(renderFrame);
  }

  function renderFrame(now) {
    state.rafId = null;
    const dtMs = Math.min(32, Math.max(4, now - state.lastFrameTime));
    state.lastFrameTime = now;
    const dtScale = dtMs / 16.6667;

    let needsMoreFrames = false;

    if (state.isDragging) {
      needsMoreFrames = true;
    } else {
      const displacement = state.targetPosition - state.position;
      if (Math.abs(displacement) > 0.0005 || Math.abs(state.velocity) > 0.0005) {
        const stiffness = 0.095;
        const damping = 0.78;
        state.velocity += displacement * stiffness * dtScale;
        state.velocity *= Math.pow(damping, dtScale);
        state.position += state.velocity * dtScale;
        needsMoreFrames = true;
      } else {
        state.position = state.targetPosition;
        state.velocity = 0;
      }
    }

    const blendDiff = state.targetPerspectiveBlend - state.perspectiveBlend;
    if (Math.abs(blendDiff) > 0.0008) {
      state.perspectiveBlend += blendDiff * (1 - Math.pow(0.84, dtScale));
      needsMoreFrames = true;
    } else {
      state.perspectiveBlend = state.targetPerspectiveBlend;
    }

    const elapsedEntrance = now - state.entranceStartTime;
    const maxEntranceEnd = state.entranceDuration + 240;
    if (state.isEntering) {
      if (elapsedEntrance >= maxEntranceEnd) {
        state.isEntering = false;
      } else {
        needsMoreFrames = true;
      }
    }

    const nearestIdx = mod(Math.round(state.position), TOTAL);
    syncActiveMetadata(nearestIdx);

    const cullLimit = state.metrics.isMobile ? 2.35 : 3.0;

    for (let i = 0; i < TOTAL; i++) {
      const card = cardNodes[i];
      const cache = cardCache[i];
      const d = getWrappedOffset(i, state.position);
      const absD = Math.abs(d);

      // Cull distant off-stage cards so GPU only composites the ~5-7 visible cards!
      if (absD > cullLimit) {
        if (cache.visible !== false) {
          cache.visible = false;
          card.style.visibility = 'hidden';
          card.style.opacity = '0';
          card.style.pointerEvents = 'none';
          cache.opacity = 0;
          cache.pe = 'none';
        }
        continue;
      }

      if (cache.visible !== true) {
        cache.visible = true;
        card.style.visibility = 'visible';
      }

      const pose = sampleCardPose(d, state.perspectiveBlend);

      let tx = pose.x;
      let ty = 0;
      let tz = pose.z;
      let rotY = pose.rotY;
      let rotZ = 0;
      let scale = pose.scale;
      let opacity = pose.opacity;

      if (state.isEntering) {
        const slotKey = String(clamp(Math.round(d), -3, 3));
        const vec = ENTRANCE_VECTORS[slotKey] || ENTRANCE_VECTORS['0'];
        const localT = clamp((elapsedEntrance - vec.delay) / (state.entranceDuration - 120), 0, 1);
        const easedPos = easeOutExpo(localT);
        const easedFade = easeOutQuint(localT);
        const travelFactor = state.metrics.isMobile ? 0.72 : 1;

        tx += vec.dx * travelFactor * (1 - easedPos);
        ty += vec.dy * travelFactor * (1 - easedPos);
        tz += vec.dz * (1 - easedPos);
        rotZ += vec.rotZ * (1 - easedPos);
        scale *= lerp(vec.scale, 1, easedPos);
        opacity *= easedFade;
      }

      card.style.transform =
        `translate3d(${tx.toFixed(1)}px,${ty.toFixed(1)}px,${tz.toFixed(1)}px) ` +
        `rotateY(${rotY.toFixed(2)}deg) ` +
        (rotZ !== 0 ? `rotateZ(${rotZ.toFixed(2)}deg) ` : '') +
        `scale(${scale.toFixed(3)})`;

      const roundedOp = Math.round(opacity * 1000) / 1000;
      if (cache.opacity !== roundedOp) {
        cache.opacity = roundedOp;
        card.style.opacity = String(roundedOp);
      }

      const zIndex = (100 + absD * 10) | 0;
      if (cache.zIndex !== zIndex) {
        cache.zIndex = zIndex;
        card.style.zIndex = String(zIndex);
      }

      const pe = opacity > 0.18 ? 'auto' : 'none';
      if (cache.pe !== pe) {
        cache.pe = pe;
        card.style.pointerEvents = pe;
      }

      const isCenter = absD < 0.28;
      if (cache.isCenter !== isCenter) {
        cache.isCenter = isCenter;
        card.classList.toggle('is-center', isCenter);
      }
    }

    if (needsMoreFrames) {
      state.rafId = requestAnimationFrame(renderFrame);
    }
  }

  /* =========================================================================
     15. Initialize & Observe Viewport
     ========================================================================= */
  updateResponsiveMetrics();
  buildUI();
  syncActiveMetadata(0);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    state.isEntering = false;
    appShell.classList.add('is-entered');
    scheduleRender();
  } else {
    startEntranceAnimation();
  }

  setTimeout(() => scheduleHalftonePrewarm(0), 1400);

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateResponsiveMetrics, 40);
  });

  /* =========================================================================
     16. Interactive iPhone Dynamic Island Music Player (5 Tracks, GPU-Smooth)
     ========================================================================= */
  const diShell = document.getElementById('dynamicIsland');
  const diScrim = document.getElementById('diScrim');
  const diCompactBtn = document.getElementById('diCompactBtn');
  const diExpanded = document.getElementById('diExpanded');
  const diMiniArt = document.getElementById('diMiniArt');
  const diCover = document.getElementById('diCover');
  const diTitle = document.getElementById('diTitle');
  const diArtist = document.getElementById('diArtist');
  const diTimeCur = document.getElementById('diTimeCur');
  const diTimeRem = document.getElementById('diTimeRem');
  const diProgressBar = document.getElementById('diProgressBar');
  const diProgressFill = document.getElementById('diProgressFill');
  const diPrevBtn = document.getElementById('diPrevBtn');
  const diPlayBtn = document.getElementById('diPlayBtn');
  const diNextBtn = document.getElementById('diNextBtn');
  const diListBtn = document.getElementById('diListBtn');
  const diMuteBtn = document.getElementById('diMuteBtn');
  const diPlaylistEl = document.getElementById('diPlaylist');

  if (diShell && diCompactBtn) {
    const PLAYLIST = [
      {
        title: 'Sweet Heat Lightning',
        artist: 'Gregory Alan Isakov',
        src: 'assets/music/sweet heat lightning.mp3',
        cover: IMAGES[5] || IMAGES[0],
        accent: '#f4b896',
      },
      {
        title: 'Dancing Queen',
        artist: 'ABBA',
        src: 'assets/music/dancing queen.mp3',
        cover: IMAGES[0],
        accent: '#f59eb3',
      },
      {
        title: 'Prologue',
        artist: 'YULI Soundtrack',
        src: 'assets/music/prologue.mp3',
        cover: IMAGES[16] || IMAGES[1],
        accent: '#9cc4f8',
      },
      {
        title: 'Sweet Disposition',
        artist: 'The Temper Trap',
        src: 'assets/music/sweet disposition.mp3',
        cover: IMAGES[2] || IMAGES[0],
        accent: '#f5ce78',
      },
      {
        title: 'Sign of the Times',
        artist: 'Harry Styles',
        src: 'assets/music/sign of the time.mp3',
        cover: IMAGES[7] || IMAGES[0],
        accent: '#f2857d',
      },
    ];

    const audio = new Audio();
    audio.preload = 'metadata';

    const diState = {
      trackIndex: 0,
      expanded: false,
      playlistOpen: false,
      hasInteracted: false,
      isSeeking: false,
      lastTimeText: '',
    };

    const formatTime = (sec) => {
      if (!Number.isFinite(sec) || sec < 0) return '0:00';
      const s = Math.floor(sec);
      const m = Math.floor(s / 60);
      const r = s % 60;
      return `${m}:${r < 10 ? '0' : ''}${r}`;
    };

    // Build 5-track playlist items once
    const trackRowNodes = [];
    PLAYLIST.forEach((track, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'di-track-item';
      btn.innerHTML = `
        <span class="di-track-num">${String(idx + 1).padStart(2, '0')}</span>
        <span class="di-track-name">${track.title}</span>
        <span class="di-track-badge">Now</span>
      `;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        loadTrack(idx, true);
      });
      diPlaylistEl.appendChild(btn);
      trackRowNodes.push(btn);
    });

    function syncTrackUI() {
      const track = PLAYLIST[diState.trackIndex];
      diTitle.textContent = track.title;
      diArtist.textContent = track.artist;
      diShell.style.setProperty('--di-accent', track.accent);
      if (track.cover) {
        diCover.style.backgroundImage = `url("${track.cover}")`;
        diMiniArt.style.backgroundImage = `url("${track.cover}")`;
      }
      trackRowNodes.forEach((row, i) => {
        row.classList.toggle('is-current', i === diState.trackIndex);
      });
    }

    function updateProgressUI(forceZero = false) {
      const dur = audio.duration;
      const cur = forceZero ? 0 : audio.currentTime;
      const ratio = !forceZero && Number.isFinite(dur) && dur > 0 ? clamp(cur / dur, 0, 1) : 0;

      diProgressFill.style.transform = `scaleX(${ratio.toFixed(4)})`;
      diProgressBar.setAttribute('aria-valuenow', String(Math.round(ratio * 100)));

      const curStr = formatTime(cur);
      const remStr = Number.isFinite(dur) && dur > 0 ? `-${formatTime(Math.max(0, dur - cur))}` : '-0:00';
      const key = `${curStr}|${remStr}`;
      if (diState.lastTimeText !== key) {
        diState.lastTimeText = key;
        diTimeCur.textContent = curStr;
        diTimeRem.textContent = remStr;
      }
    }

    function loadTrack(idx, autoPlay) {
      diState.trackIndex = mod(idx, PLAYLIST.length);
      const track = PLAYLIST[diState.trackIndex];
      audio.src = encodeURI(track.src);
      audio.load();
      syncTrackUI();
      updateProgressUI(true);

      if (autoPlay) {
        diState.hasInteracted = true;
        diShell.classList.add('has-active-track');
        audio.play().catch(() => {});
      }
    }

    function setExpanded(next) {
      if (diState.expanded === next) return;
      diState.expanded = next;
      diShell.classList.toggle('is-expanded', next);
      diShell.setAttribute('aria-expanded', String(next));
      diExpanded.setAttribute('aria-hidden', String(!next));
      diScrim.classList.toggle('is-open', next);

      if (!next && diState.playlistOpen) {
        setPlaylistOpen(false);
      }
    }

    function setPlaylistOpen(next) {
      diState.playlistOpen = next;
      diShell.classList.toggle('is-playlist-open', next);
      diListBtn.classList.toggle('is-active', next);
      diListBtn.setAttribute('aria-expanded', String(next));
      diPlaylistEl.setAttribute('aria-hidden', String(!next));
    }

    function togglePlay() {
      diState.hasInteracted = true;
      diShell.classList.add('has-active-track');
      if (!audio.src) {
        loadTrack(diState.trackIndex, true);
        return;
      }
      if (audio.paused) {
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    }

    // Audio lifecycle events
    audio.addEventListener('play', () => {
      diShell.classList.add('is-playing', 'has-active-track');
    });

    audio.addEventListener('pause', () => {
      diShell.classList.remove('is-playing');
    });

    audio.addEventListener('loadedmetadata', () => updateProgressUI());
    audio.addEventListener('timeupdate', () => {
      if (!diState.isSeeking) updateProgressUI();
    });

    audio.addEventListener('ended', () => {
      loadTrack(diState.trackIndex + 1, true);
    });

    // Interactions
    diCompactBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setExpanded(true);
    });

    diScrim.addEventListener('click', (e) => {
      e.stopPropagation();
      setExpanded(false);
    });

    // Clicking anywhere outside the island collapses it cleanly
    document.addEventListener('pointerdown', (e) => {
      if (!diState.expanded) return;
      if (e.target.closest('#dynamicIsland')) return;
      setExpanded(false);
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && diState.expanded && !state.modalOpen) {
        e.preventDefault();
        setExpanded(false);
      }
    });

    diPlayBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePlay();
    });

    diPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (audio.currentTime > 3) {
        audio.currentTime = 0;
        updateProgressUI();
      } else {
        loadTrack(diState.trackIndex - 1, true);
      }
    });

    diNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      loadTrack(diState.trackIndex + 1, true);
    });

    diListBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setPlaylistOpen(!diState.playlistOpen);
    });

    diMuteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      audio.muted = !audio.muted;
      diShell.classList.toggle('is-muted', audio.muted);
    });

    // Smooth Scrubbing (Pointer Down / Move / Up)
    const seekFromClientX = (clientX) => {
      const rect = diProgressBar.getBoundingClientRect();
      if (rect.width <= 0) return;
      const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
      diProgressFill.style.transform = `scaleX(${ratio.toFixed(4)})`;
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        audio.currentTime = ratio * audio.duration;
        updateProgressUI();
      }
    };

    diProgressBar.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      diState.isSeeking = true;
      diProgressBar.classList.add('is-seeking');
      try { diProgressBar.setPointerCapture(e.pointerId); } catch (_) {}
      seekFromClientX(e.clientX);
    });

    diProgressBar.addEventListener('pointermove', (e) => {
      if (!diState.isSeeking) return;
      e.stopPropagation();
      seekFromClientX(e.clientX);
    });

    const endSeek = (e) => {
      if (!diState.isSeeking) return;
      e.stopPropagation();
      diState.isSeeking = false;
      diProgressBar.classList.remove('is-seeking');
    };

    diProgressBar.addEventListener('pointerup', endSeek);
    diProgressBar.addEventListener('pointercancel', endSeek);

    // Initialize first track metadata without autoplaying
    loadTrack(0, false);
  }
})();
