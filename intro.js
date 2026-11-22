/* YULI Intro — flash of photos (halftone/glitch) → elegant name reveal → main page
   Perf: every frame is a pre-decoded <img> layer toggled by class (no src swaps). */
(() => {
  const intro = document.getElementById('intro');
  if (!intro || document.documentElement.classList.contains('intro-seen')) {
    if (intro) intro.remove();
    return;
  }

  const imgs = window.EDITORIAL_POST_IMAGES || [];
  const frame = intro.querySelector('.intro-frame');
  const counter = intro.querySelector('.intro-counter');
  const appShell = document.getElementById('appShell');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const timers = [];
  const later = (fn, ms) => timers.push(setTimeout(fn, ms));
  let done = false;

  function finish() {
    if (done) return;
    done = true;
    timers.forEach(clearTimeout);
    try { sessionStorage.setItem('yuliIntroSeen', '1'); } catch (e) {}
    intro.classList.add('is-leaving');
    document.documentElement.classList.remove('intro-active');
    if (appShell) appShell.classList.add('intro-reveal');
    setTimeout(() => {
      intro.remove();
      if (appShell) appShell.classList.remove('intro-reveal');
    }, 1150);
  }

  intro.querySelector('.intro-skip').addEventListener('click', finish);
  if (!imgs.length) { finish(); return; }
  document.documentElement.classList.add('intro-active');

  // Frames to flash, ending on a graduation shot
  const FINAL = imgs.length > 16 ? 16 : 0;
  const order = [3, 9, 1, 12, 6, 14, 18, 10, 5].filter((i) => i < imgs.length && i !== FINAL);
  const FRAME_MS = reduce ? 260 : 150;
  const fx = (n) => (n % 3 === 1 ? 'fx-glitch' : 'fx-halftone');

  // Build pre-decoded layers
  const decodes = [];
  const makeImg = (src, cls) => {
    const el = new Image();
    el.className = cls;
    el.alt = '';
    el.decoding = 'async';
    el.src = src;
    if (el.decode) decodes.push(el.decode().catch(() => {}));
    frame.appendChild(el);
    return el;
  };
  const frag = frame;
  const layers = order.map((idx, n) => {
    const set = [makeImg(imgs[idx], 'intro-layer intro-shot')];
    if (fx(n) === 'fx-glitch') {
      set.push(makeImg(imgs[idx], 'intro-layer intro-ghost g-r'));
      set.push(makeImg(imgs[idx], 'intro-layer intro-ghost g-c'));
    }
    return set;
  });
  const finalImg = makeImg(imgs[FINAL], 'intro-layer intro-shot intro-final');
  const dots = document.createElement('div');
  dots.className = 'intro-dots';
  const shade = document.createElement('div');
  shade.className = 'intro-shade';
  frag.append(dots, shade);

  // Scale needed for the 3:4 window to cover the viewport (measured on the window-sized dots layer)
  const setCover = () => {
    const w = dots.offsetWidth || 1;
    const h = dots.offsetHeight || 1;
    intro.style.setProperty('--cover', Math.max(innerWidth / w, innerHeight / h).toFixed(3));
  };
  setCover();
  addEventListener('resize', setCover, { passive: true });

  let current = null;
  const show = (set) => {
    if (current) current.forEach((el) => el.classList.remove('on'));
    set.forEach((el) => el.classList.add('on'));
    current = set;
  };

  function run() {
    if (done) return;
    show(layers[0] || [finalImg]);
    frame.classList.add(fx(0));
    requestAnimationFrame(() => intro.classList.add('is-flashing'));

    // Phase 1 — flashing film frames
    order.forEach((idx, n) => {
      later(() => requestAnimationFrame(() => {
        frame.classList.remove('fx-glitch', 'fx-halftone');
        show(layers[n]);
        void frame.offsetWidth; // restart glitch keyframes
        frame.classList.add(fx(n));
        counter.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(imgs.length).padStart(2, '0')}`;
      }), 300 + n * FRAME_MS);
    });

    // Phase 2 — final photo expands, YULI reveals
    const tExpand = 300 + order.length * FRAME_MS;
    later(() => requestAnimationFrame(() => {
      frame.classList.remove('fx-glitch', 'fx-halftone');
      show([finalImg]);
      intro.classList.add('is-expanded');
    }), tExpand);
    later(() => intro.classList.add('is-titled'), tExpand + 650);

    // Phase 3 — into the feed
    later(finish, tExpand + 650 + 2300);
  }

  // Start only once all frames are decoded (capped so slow devices never hang)
  Promise.race([Promise.all(decodes), new Promise((r) => setTimeout(r, 2000))]).then(() =>
    requestAnimationFrame(() => requestAnimationFrame(run))
  );
})();
