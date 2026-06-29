// =============================================================
// Konten kurikulum, program, jadwal, galeri, PPDB, FAQ.
// Semua bersumber dari docs/research-online.md.
// =============================================================

export const STATS = [
  { value: '2018', label: 'Tahun Berdiri' },
  { value: '66', label: 'Cabang Nurul Haromain' },
  { value: '4,7★', label: 'Rating Google (27 ulasan)' },
  { value: '24 Jam', label: 'Asrama Penuh (Boarding)' },
];

// 3 Pilar Keunggulan (brosur resmi)
export const PILLARS = [
  {
    icon: 'BookOpenText',
    title: 'Murottal',
    desc: 'Pembinaan bacaan Al-Qur’an yang indah, benar, dan bertajwid sebagai pondasi hafalan yang mutqin.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Akhlaqul Karimah',
    desc: 'Pembentukan karakter Qur’ani: jujur, ikhlas, dan semangat — adab sebelum ilmu.',
  },
  {
    icon: 'MoonStar',
    title: 'Pembiasaan Qiyamullail',
    desc: 'Penguatan ruhani lewat sholat malam dan muroqobah, membangun kedekatan dengan Allah.',
  },
];

// Program unggulan (dengan foto lokal)
export const PROGRAMS = [
  {
    img: '/images/gallery/kelas-tahfidz.webp',
    title: 'Tahfidzul Qur’an',
    desc: 'Program inti menghafal Al-Qur’an bin nadhri dan bil hifdhi: setoran hafalan baru & muroja’ah harian terbimbing para ustadzah.',
  },
  {
    img: '/images/gallery/halaqah-santri.webp',
    title: 'Dirosah Diniyah',
    desc: 'Attibyan (adab penghafal Qur’an), Nahwu-Shorof, Tahsin, Kaifa Tusholli, Hadits, Fiqih, dan Aqidah secara berjenjang.',
  },
  {
    img: '/images/gallery/foto-bersama-santri-03.webp',
    title: 'Pembinaan Akhlak & Kemandirian',
    desc: 'Tarbiyah akhlak, kedisiplinan, dan kemandirian dalam lingkungan asrama; dilengkapi Motivation Camp & Ujian Tasmi’.',
  },
];

// Jadwal harian (verbatim brosur). Subset highlight dipakai di homepage.
export const SCHEDULE = [
  { time: '03.00 – 04.00', title: 'Qiyamullail & Wirid', desc: 'Bangun di sepertiga malam, sholat malam, dan wirid.' },
  { time: '04.00 – 05.00', title: 'Shubuh & Muroqobah', desc: 'Sholat Shubuh berjamaah, wirid, dan muroqobah pagi.' },
  { time: '06.00 – 09.30', title: 'Setoran & Penambahan Hafalan', desc: 'Persiapan setoran, sholat Dhuha, futhur, muroja’ah qorib, lalu setoran hafalan.' },
  { time: '09.30 – 13.30', title: 'Setoran 2 & Muroja’ah', desc: 'Setoran kedua, Dhuhur berjamaah, muroqobah, dan penambahan hafalan.' },
  { time: '16.00 – 17.00', title: 'Materi Diniyah', desc: 'Attibyan, Nahwu/Shorof, Tahsin, Hadits, Fiqih, Aqidah.' },
  { time: '19.00 – 21.30', title: 'Diniyah Malam & Setoran 4', desc: 'Aqidah/Akhlaq, Fiqih, Imla’/Pego, setoran malam, dan muroja’ah ba’d.' },
];

export const MATERI_DINIYAH = [
  'Attibyan (adab penghafal Qur’an)',
  'Nahwu & Shorof',
  'Tahsin & Kaifa Tusholli',
  'Hadits',
  'Fiqih',
  'Aqidah & Akhlaq',
  'Imla’ / Pego',
];

// Fasilitas & lingkungan
export const FACILITIES = [
  { icon: 'BedDouble', title: 'Asrama Putri', desc: 'Sistem boarding penuh 24 jam dalam lingkungan khusus putri yang aman dan terjaga.' },
  { icon: 'Building2', title: 'Musholla', desc: 'Tempat ibadah dan pusat kegiatan ruhani santri yang baru diresmikan.' },
  { icon: 'BookOpen', title: 'Ruang Belajar & Aula', desc: 'Ruang halaqah dan aula untuk setoran, diniyah, dan kegiatan bersama.' },
  { icon: 'Mountain', title: 'Lingkungan Sejuk', desc: 'Berada di kaki Gunung Banyak, Pujon — udara sejuk dan suasana menenangkan.' },
  { icon: 'UtensilsCrossed', title: 'Dapur & Makan', desc: 'Layanan makan santri tiga waktu: futhur, ghoda’, dan ‘asya.' },
  { icon: 'ShieldCheck', title: 'Pengawasan 24 Jam', desc: 'Pendampingan musyrifah dan pembiasaan terjadwal sepanjang hari.' },
];

// Galeri (foto asli Google Business Profile → WebP)
export const GALLERY = [
  { src: '/images/gallery/halaman-apel-gunung.webp', alt: 'Santri apel di halaman dengan latar gunung' },
  { src: '/images/gallery/kelas-tahfidz.webp', alt: 'Santri menghafal di kelas tahfidz' },
  { src: '/images/gallery/halaqah-outdoor.webp', alt: 'Halaqah santri di luar ruangan' },
  { src: '/images/gallery/foto-bersama-santri-02.webp', alt: 'Foto bersama santri' },
  { src: '/images/gallery/taman-kolam.webp', alt: 'Taman dan kolam di lingkungan pondok' },
  { src: '/images/gallery/gedung-asrama-depan.webp', alt: 'Gedung asrama putri tampak depan' },
  { src: '/images/gallery/halaqah-santri.webp', alt: 'Halaqah santri lesehan' },
  { src: '/images/gallery/acara-tasmi.webp', alt: 'Acara Ujian Tasmi’' },
  { src: '/images/gallery/haflah-wisuda.webp', alt: 'Haflah wisuda santri (Nurin Mubin)' },
  { src: '/images/gallery/rihlah-pantai.webp', alt: 'Rihlah santri ke pantai' },
  { src: '/images/gallery/gerbang-alhadi.webp', alt: 'Gerbang Ribath Al-Hadi' },
  { src: '/images/gallery/pengasuh-bersama-santri.webp', alt: 'Pengasuh bersama santri' },
];

// Alur & persyaratan PPDB (brosur resmi)
export const PPDB_STEPS = [
  { num: '1', title: 'Daftar', desc: 'Hubungi WhatsApp pendaftaran / scan QR brosur, atau datang langsung ke LPI Nurul Haromain.' },
  { num: '2', title: 'Lengkapi Berkas', desc: 'Mengisi formulir & surat pernyataan orang tua serta melengkapi dokumen persyaratan.' },
  { num: '3', title: 'Seleksi', desc: 'Verifikasi berkas dan kesiapan calon santri putri (lulusan setingkat SMP).' },
  { num: '4', title: 'Daftar Ulang', desc: 'Penyelesaian administrasi dan menjadi bagian keluarga besar Al-Hadi.' },
];

export const PPDB_REQUIREMENTS = [
  'Membayar uang pendaftaran / pembelian formulir',
  'Mengisi formulir pendaftaran & surat pernyataan orang tua',
  'Fotokopi akte kelahiran (rangkap 2)',
  'Fotokopi kartu keluarga / KK (rangkap 2)',
  'Fotokopi KTP orang tua (rangkap 2)',
  'Fotokopi ijazah & SKHU legalisir (rangkap 2)',
  'Pas foto ukuran 3×4 sebanyak 4 lembar',
  'Fotokopi NISN (Nomor Induk Siswa Nasional)',
  'Fotokopi rapot kelas 7–9 (khusus pindahan/SMP)',
];

export const FAQS = [
  {
    q: 'Apakah Ribath Al-Hadi khusus putri?',
    a: 'Ya. Ribath Tahfidh Al-Qur’an Al-Hadi adalah pesantren tahfidz khusus putri dengan sistem asrama (boarding) penuh.',
  },
  {
    q: 'Siapa yang bisa mendaftar?',
    a: 'Putri lulusan setingkat SMP. Untuk jenjang SMP, calon santri menyertakan rapot kelas 7–9. Kuota terbatas.',
  },
  {
    q: 'Bagaimana cara mendaftar?',
    a: 'Dua cara: offline (datang langsung ke LPI Nurul Haromain) atau online (kirim pesan WhatsApp ke 0838-4848-0606 / scan QR pada brosur).',
  },
  {
    q: 'Di mana lokasi pondoknya?',
    a: 'Di Dsn. Krajan, Pandesari, Kec. Pujon, Kab. Malang — di kaki Gunung Banyak dengan udara sejuk. Surat-menyurat melalui Ma’had Nurul Haromain pusat di Ngroto, Pujon.',
  },
  {
    q: 'Apa saja program pembelajarannya?',
    a: 'Tahfidzul Qur’an (setoran & muroja’ah harian), dirosah diniyah (Attibyan, Nahwu-Shorof, Tahsin, Hadits, Fiqih, Aqidah), serta pembinaan akhlak dan kemandirian.',
  },
];
