<div align="center">

<div align="center">
  <div style="background-color: #064e3b; padding: 20px 28px; border-radius: 12px; border: 1px solid #d4af37; display: inline-block;">
    <p style="font-size: 1.3rem; color: #fdfbf7; margin: 0 0 10px;">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
    <p style="font-size: 1.05rem; color: #d4af37; font-weight: bold; margin: 0 0 6px;">🕌 Saya Wakafkan</p>
    <p style="color: #d1d5db; line-height: 1.8; margin: 0;">Website <b style="color:#fdfbf7">GRATIS</b> untuk<br/>Pesantren · Masjid · MTQ · TPQ · Madrasah · Lembaga Dakwah</p>
    <p style="color: #d4af37; font-size: 1.1rem; margin: 10px 0 0;">لِلّٰهِ تَعَالٰى</p>
  </div>
</div>

<br/>
<p align="center">
  🕌 <b>Muslim institutions</b> — need a website? &nbsp;→&nbsp; <a href="https://ongki.pro"><b>ongki.pro</b></a>
</p>

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

## 🤝 Developer

<div align="center">

<a href="https://ongki.pro"><img src="https://img.shields.io/badge/ongki.pro-064E3B?style=flat-square&logo=safari&logoColor=white" /></a>
<a href="https://github.com/ongkipro"><img src="https://img.shields.io/badge/ongkipro-181717?style=flat-square&logo=github&logoColor=white" /></a>

<br/>
<br/>

**Full-Stack Developer · Digital Marketer**  
🇮🇩 Indonesia

<br/>

| 🛒 E&#8209;commerce | 🌐 Web | 📢 Advertising | 📈 SEO | ☁️ Infrastructure | ⚡ Automation |
|:---|:---|:---|:---|:---|:---|
| `Shopify` | `Astro` | `Meta Ads` | `Technical` | `Cloudflare` | `AI Agents` |
| `Liquid` | `React` | `Google Ads` | `Local` | `D1` `R2` | `Workflows` |
| `Storefront API` | `Next.js` | | `Ecommerce` | `VPS` | `Scraping` |
| `Headless` | `Tailwind CSS` | | `Content` | `Supabase` | `SOPs` |

</div>

---

## 📄 License

© 2026 **Ribath Tahfidh Al-Qur'an Al-Hadi**. All rights reserved.  
Proprietary code — not for redistribution.
Proprietary code — not for redistribution.
