// =============================================================
// Sumber data terpusat — Ribath Tahfidh Al-Qur'an Al-Hadi
// Disusun dari docs/research-online.md (data terkonfirmasi ✅🟦).
// =============================================================

export const SITE = {
  name: "Ribath Tahfidh Al-Qur'an Al-Hadi",
  shortName: 'Al Hadi',
  brandLine: 'Ribath Tahfidh',
  est: 2018,
  cabang: 'Nurul Haromain 66',
  type: 'Pesantren Tahfidz Khusus Putri',
  induk: "Ma'had Pengembangan dan Dakwah Nurul Haromain",
  motto: ['Jujur', 'Ikhlas', 'Semangat'],
  tagline:
    'Rumah kedua bagi putri yang ingin menghafal Al-Qur’an dengan hati dan jiwa.',
  description:
    'Pesantren tahfidz khusus putri di kaki Gunung Banyak, Pujon – Malang. Bagian dari keluarga besar Ma’had Nurul Haromain (cabang ke-66), dengan sistem asrama penuh dan bimbingan tahfidz intensif.',
  rating: { value: '4,7', count: 27, source: 'Google Maps' },
} as const;

export const SITE_URL = 'https://rtqalhadi.com';

export const ADDRESS = {
  building: 'Jurangrejo, Pandesari, Kec. Pujon, Kabupaten Malang, Jawa Timur 65391',
  mailing:
    "Komplek Ma'had Nurul Haromain, Jl. Brigjend Abdul Manan Wijaya No. 141, Ngroto, Pujon, Malang",
  region: 'Pujon, Kabupaten Malang, Jawa Timur',
  coords: { lat: -7.8483138, lng: 112.4883314 },
  plusCode: '5F2Q+M8 Pandesari, Kabupaten Malang',
  mapsQuery: "Ribath Tahfidh Al Qur'an Al Hadi, Pandesari, Pujon",
} as const;

export const CONTACT = {
  waPendaftaran: { number: '6283848480606', label: 'Ustadz Syaikhu', display: '0838-4848-0606' },
  waPIC: { number: '6285106043377', label: 'Ustadz Khoirul Huda', display: '0851-0604-3377' },
  instagram: 'https://instagram.com/ribathalhadi',
  threads: 'https://www.threads.net/@ribathalhadi',
  facebook: 'https://www.facebook.com/people/Ribath-Al-Hadi-Pujon/61583832654476/',
  websiteInduk: 'https://nurulharomain.org/ribath-alhadi/',
} as const;

// Author/publisher + kata kunci SEO (riset: pesantren tahfidz putri Malang/Pujon)
export const SEO = {
  author: "Ribath Tahfidh Al-Qur'an Al-Hadi",
  publisher: "Ma'had Nurul Haromain Pujon",
  keywords: [
    'pesantren tahfidz putri',
    'pondok pesantren putri Malang',
    'pesantren tahfidz Pujon',
    'tahfidz Al-Quran putri',
    'pesantren khusus putri Malang',
    'boarding school islam putri',
    'menghafal Al-Quran',
    'hafidzah',
    'Ribath Al-Hadi',
    'Ribath Tahfidh Al-Quran Al-Hadi',
    'pesantren Nurul Haromain',
    'Nurul Haromain Pujon',
    'pondok tahfidz Qur’an Malang',
    'pesantren tahfidz Jawa Timur',
    'PPDB pesantren putri 2026',
    'mahad tahfidzul quran putri',
    'pesantren putri Pujon Malang',
    'sekolah tahfidz putri',
  ],
} as const;

export function waLink(number: string, text: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

// Embed memakai nama bisnis resmi (terdaftar di koordinat presisi) agar pin
// menampilkan label "Ribath Tahfidh Al Qur'an Al Hadi" di Pandesari, Pujon.
export const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS.mapsQuery)}&z=16&output=embed`;
// Link share resmi dari Google Maps (membuka listing bisnis).
export const mapLink = 'https://maps.app.goo.gl/2iuR6ptM5hbydy3i7';

// Navigasi utama (header + footer) — berbasis halaman
export const NAV = [
  { label: 'Profil', href: '/profil' },
  { label: 'Program', href: '/program' },
  { label: 'Fasilitas', href: '/fasilitas' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'PPDB', href: '/ppdb' },
  { label: 'Kontak', href: '/kontak' },
] as const;
