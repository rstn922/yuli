# Spatial Feed — iPhone 18 Pro Max 3D Editorial Showcase (Yuli)

Proyek web galeri Instagram perspektif 3D + efek poster kolase editorial halftone glitch, responsif untuk **Desktop** dan **Mobile**.

## Cara Membuka
Langsung buka `index.html` di browser (Chrome, Edge, Safari) — berjalan 100% lokal tanpa perlu server atau proses build.

## Struktur Proyek
- `index.html` — Struktur halaman utama, frame iPhone 18 Pro Max (Dynamic Island & bezel tipis), stage 3D, dan modal poster editorial.
- `styles.css` — Styling iPhone 18 Pro Max, atmosfer background studio hidup, animasi glitch kromatik & kolase multi-arah, serta adaptasi Desktop & Mobile.
- `app.js` — Engine fisika carousel 120fps (LUT + on-demand RAF + off-stage culling), 16 data postingan Yuli, Auto-Adaptive Pop-Art Halftone Canvas Renderer, dan 16 blueprint kolase unik.
- `assets-data.js` — Bundle data 16 foto optimal (`660×880`, rasio `3:4`) dari `D:\local send\yuli` agar canvas halftone bebas CORS saat dibuka langsung via `file://`.
- `assets/yuli-01.jpg` – `assets/yuli-16.jpg` — Salinan file gambar teroptimasi (`3:4`).

## Catatan untuk Melanjutkan Nanti
- **Ubah Nama Klien di Masthead Atas**: Edit konstanta `CLIENT_BRAND_NAME` di baris atas `app.js` (saat ini masih `'KARINA'`).
- **Ubah Caption / Username / Lokasi**: Edit array `POSTS` di `app.js`.
- **Ubah Teks Editorial Tiap Poster**: Edit array `EDITORIAL_THEMES` di `app.js`.
