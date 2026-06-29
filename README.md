<div align="center">

### بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ

**مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ**

_Semoga website ini menjadi wasilah kebaikan, ilmu yang bermanfaat, dan amal jariyah bagi semua yang terlibat. Aamiin._

---

# Ribath Tahfidh Al-Qur'an Al-Hadi

**Website resmi** — Pesantren Tahfidz Khusus Putri di kaki Gunung Banyak, Pujon — Malang.
Bagian dari Ma'had Nurul Haromain (cabang ke-66).

🌐 **Live:** [rtqalhadi.com](https://rtqalhadi.com)

`Astro` · `Tailwind CSS v4` · `TypeScript` · `Lucide` · `Vercel`

</div>

---

## ✨ Tentang

Company profile multi-halaman yang cepat, ringan, dan SEO-friendly untuk pondok tahfidz putri **Ribath Al-Hadi**. Dibangun statis (SSG) dengan Astro — nyaris tanpa JavaScript di sisi klien, gambar WebP teroptimasi, dan data konten terpusat agar mudah dirawat.

### Fitur

- **7 halaman**: Beranda, Profil, Program, Fasilitas, Galeri, PPDB, Kontak.
- **Data-driven** — seluruh teks, kontak, jadwal, program, FAQ, & galeri ditarik dari `src/data/` (satu sumber kebenaran).
- **Konten islami** — kutipan Al-Qur'an & hadits ber-aksara Arab (font Amiri) lengkap dengan terjemahan & rujukan.
- **SEO lengkap** — sitemap, `robots.txt`, JSON-LD (`EducationalOrganization` + `BreadcrumbList`), Open Graph & Twitter Card, kanonik, meta geo.
- **Aksesibel** — drawer mobile dengan `aria`/`inert`/focus-trap/Escape, `prefers-reduced-motion`, navigasi semantik.
- **Desain konsisten** — design tokens terpusat (warna, font, radius, shadow) di `@theme`.
- **Performa** — font self-host (`@fontsource`), gambar `loading="lazy"`/WebP, animasi reveal via `IntersectionObserver`.

---

## 🧱 Tech Stack

| Lapis | Teknologi |
|---|---|
| Framework | [Astro](https://astro.build) (output statis) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite` (`@theme` tokens) |
| Bahasa | TypeScript (strict) |
| Ikon | [Lucide](https://lucide.dev) (`@lucide/astro`) |
| Font | `@fontsource-variable` — Inter & Playfair Display; `@fontsource/amiri` — aksara Arab |
| SEO | `@astrojs/sitemap` + JSON-LD |
| Hosting | [Vercel](https://vercel.com) (auto-deploy) |

---

## 📂 Struktur

```
src/
├─ data/                    # SUMBER KONTEN (edit di sini)
│  ├─ site.ts               # identitas, alamat, kontak, navigasi, helper WA/peta
│  ├─ content.ts            # statistik, pilar, program, jadwal, fasilitas, galeri, PPDB, FAQ
│  └─ quotes.ts             # ayat Al-Qur'an & hadits (Arab + terjemahan + rujukan)
├─ layouts/
│  └─ Layout.astro          # <head>, meta/SEO, JSON-LD, font, CSS & script global
├─ components/              # komponen section & UI bersama
│  ├─ Navbar.astro · Footer.astro · PageHero.astro · SectionHeading.astro
│  ├─ Hero.astro · TrustIndicators.astro · WhyUs.astro · Philosophy.astro
│  ├─ QuranVerse.astro · HadithQuote.astro            # kutipan islami
│  ├─ DailyTimeline.astro · Programs.astro · Teachers.astro
│  ├─ Gallery.astro · Testimonials.astro · Facilities.astro
│  ├─ Admissions.astro · Faq.astro · SeoContent.astro · FinalCta.astro
│  └─ WhatsAppFloat.astro
├─ pages/                   # 1 file = 1 rute
│  ├─ index.astro · profil.astro · program.astro · fasilitas.astro
│  └─ galeri.astro · ppdb.astro · kontak.astro
└─ styles/
   └─ global.css            # design tokens (@theme), radius, reveal, navbar, utilities

public/images/gallery/      # foto asli (WebP) + katalog
docs/                       # riset & dokumentasi fondasi brand
```

---

## 🎨 Design System

- **Warna:** Deep Emerald `#065f46` (primary) · Gold `#d4af37` (secondary) · Warm Cream `#fdfbf7` · Slate `#0f172a`.
- **Tipografi:** Playfair Display (serif/judul) · Inter (sans/teks) · Amiri (aksara Arab).
- **Radius:** sistem tipis & konsisten — semua kartu `rounded-2xl` (14px), token di `@theme` (`--radius-2xl`); pill/avatar `rounded-full`.
- **Shadow:** `shadow-premium` / `shadow-premium-hover`.

---

## 🚀 Menjalankan

```bash
npm install
npm run dev      # server dev (default http://localhost:4321 — lihat port yang dicetak)
npm run build    # astro check + build statis ke dist/
npm run preview  # preview hasil build
```

> **Ubah konten** cukup lewat `src/data/*.ts` — komponen otomatis menyesuaikan.

---

## ☁️ Deployment

Hosting di **Vercel**, output statis (`dist/`). Push ke branch **`main`** memicu **deploy produksi otomatis** ke [rtqalhadi.com](https://rtqalhadi.com).

```bash
vercel --prod --yes   # deploy manual (opsional)
```

---

## 👤 Pengembang

Dirancang & dikembangkan oleh **Ongki** — [![GitHub](https://img.shields.io/badge/GitHub-ongkipro-181717?logo=github)](https://github.com/ongkipro)

> 🤲 **GRATIS untuk pondok pesantren, masjid, TPQ, madrasah & lembaga dakwah** — sebagai bentuk khidmah dan amal jariyah. _Lillāhi ta'ālā._

> 💼 **Butuh website premium serupa** untuk pesantren, sekolah, bisnis, atau toko online?
> Hubungi **[@ongkipro](https://github.com/ongkipro)** — desain modern, cepat, SEO-friendly, siap deploy.

---

## 📄 Lisensi & Hak Cipta

© 2026 **Ribath Tahfidh Al-Qur'an Al-Hadi**. Hak cipta dilindungi.
Seluruh konten, foto, nama, dan merek adalah milik pondok. Kode dikembangkan khusus untuk klien — **bukan proyek open-source** dan tidak untuk didistribusikan ulang tanpa izin.
