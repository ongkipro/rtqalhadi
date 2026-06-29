# rtqalhadi

Ribath Tahfidh Al-Qur'an Al Hadi — website resmi.

Homepage premium Islamic boarding school, dibangun dengan **Astro + Tailwind CSS v4 + TypeScript** dan ikon **Lucide**. Hasil konversi presisi dari prototype HTML statis menjadi komponen Astro yang modular.

## Tech Stack

- [Astro](https://astro.build) — framework, output statis
- [Tailwind CSS v4](https://tailwindcss.com) — styling via `@tailwindcss/vite`
- TypeScript — strict mode
- [Lucide](https://lucide.dev) (`@lucide/astro`) — ikon UI

## Struktur

```
src/
├─ layouts/
│  └─ Layout.astro        # <head>, fonts, global CSS, script interaktif
├─ components/            # tiap section homepage 1 komponen
│  ├─ Navbar.astro
│  ├─ Hero.astro
│  ├─ TrustIndicators.astro
│  ├─ WhyUs.astro
│  ├─ Philosophy.astro
│  ├─ DailyTimeline.astro
│  ├─ Programs.astro
│  ├─ Teachers.astro
│  ├─ Gallery.astro
│  ├─ Testimonials.astro
│  ├─ Facilities.astro
│  ├─ Admissions.astro
│  ├─ Faq.astro
│  ├─ FinalCta.astro
│  ├─ Footer.astro
│  └─ WhatsAppFloat.astro
├─ pages/
│  └─ index.astro         # merangkai seluruh section
└─ styles/
   └─ global.css          # design tokens (@theme), keyframes, reveal, utilities
```

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + build statis ke dist/
npm run preview  # preview hasil build
```

## Dokumentasi

Dokumentasi fondasi brand & visi ada di [`docs/`](./docs).
