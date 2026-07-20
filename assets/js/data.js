/* ============================================================
   FINDOR — Dummy Data Layer
   Data statis untuk mensimulasikan katalog vendor tanpa backend.
   ============================================================ */

const FINDOR_CATEGORIES = [
  'Semua Kategori', 'Wedding Organizer', 'Sound System', 'Stage & Rigging',
  'Dekorasi & Florist', 'Catering', 'Dokumentasi', 'Photography',
  'Lighting Design', 'Hiburan & Musik', 'MC & Host', 'Tenda & Venue',
  'Transportasi', 'Makeup & Salon', 'Undangan Digital',
];

const FINDOR_CITIES = [
  'Semua Kota', 'Jakarta', 'Jakarta Selatan', 'Jakarta Utara', 'Jakarta Barat', 'Jakarta Timur',
  'Surabaya', 'Bandung', 'Yogyakarta', 'Bali', 'Denpasar',
  'Malang', 'Semarang', 'Medan', 'Makassar', 'Palembang',
  'Tangerang', 'Tangerang Selatan', 'Bekasi', 'Depok', 'Bogor',
  'Sidoarjo', 'Balikpapan', 'Manado', 'Batam', 'Pekanbaru',
];

const FINDOR_VENDORS = [
  {
    id: 'v01', slug: 'atelier-cahaya-dekorasi', store_name: 'Atelier Cahaya Dekorasi',
    category: 'Dekorasi & Florist', city: 'Bandung',
    description: 'Studio dekorasi premium yang mengkhususkan diri pada tema garden party dan rustic elegance untuk pernikahan dan acara korporat.',
    whatsapp_number: '628123456701', is_verified: true, rating_avg: 4.9, review_count: 128,
    address: 'Jl. Riau No. 45, Bandung', image: 'assets/images/vendors/atelier.jpg',
    services: [
      { id: 's01', name: 'Paket Dekorasi Garden Wedding', category: 'Dekorasi & Florist', description: 'Dekorasi outdoor lengkap dengan bunga segar, backdrop, dan lighting ambient. Termasuk konsultasi tema dan mock-up 3D.', price_min: 15000000, price_max: 35000000, unit: 'event' },
      { id: 's02', name: 'Dekorasi Minimalis Indoor', category: 'Dekorasi & Florist', description: 'Dekorasi elegan untuk venue indoor dengan sentuhan modern minimalis.', price_min: 8000000, price_max: 18000000, unit: 'event' },
    ],
    reviews: [
      { id: 'r01', rating: 5, comment: 'Hasil dekorasinya melebihi ekspektasi, tim sangat profesional dan tepat waktu.', user: 'Dinda Pratiwi', date: '2026-05-12' },
      { id: 'r02', rating: 5, comment: 'Konsep garden party-nya benar-benar cantik, tamu-tamu banyak yang foto di spot dekorasi.', user: 'Farah Amelia', date: '2026-04-28' },
      { id: 'r03', rating: 4, comment: 'Bagus, cuma agak telat setup sekitar 30 menit dari jadwal.', user: 'Rangga Saputra', date: '2026-03-15' },
    ],
  },
  {
    id: 'v02', slug: 'melody-sound-production', store_name: 'Melody Sound Production',
    category: 'Sound System', city: 'Jakarta Selatan',
    description: 'Penyedia sound system dan tata suara profesional untuk konser, wedding, dan corporate event dengan peralatan standar internasional.',
    whatsapp_number: '628123456702', is_verified: true, rating_avg: 4.8, review_count: 96,
    address: 'Jl. Fatmawati Raya No. 12, Jakarta Selatan', image: 'assets/images/vendors/melody.jpg',
    services: [
      { id: 's03', name: 'Sound System Standar (up to 300 tamu)', category: 'Sound System', description: 'Line array speaker, mixer digital, 4 wireless mic, dan 1 sound engineer.', price_min: 5000000, price_max: 9000000, unit: 'event' },
      { id: 's04', name: 'Sound System Premium (up to 1000 tamu)', category: 'Sound System', description: 'Sistem line array full untuk venue besar, termasuk monitor panggung dan backup unit.', price_min: 15000000, price_max: 28000000, unit: 'event' },
    ],
    reviews: [
      { id: 'r04', rating: 5, comment: 'Suara jernih banget, tidak ada feedback sama sekali sepanjang acara.', user: 'Budi Hermawan', date: '2026-06-02' },
      { id: 'r05', rating: 5, comment: 'Tim datang lebih awal untuk setup, sangat rapi kabelnya.', user: 'Sinta Wulandari', date: '2026-05-20' },
    ],
  },
  {
    id: 'v03', slug: 'savory-catering-nusantara', store_name: 'Savory Catering Nusantara',
    category: 'Catering', city: 'Surabaya',
    description: 'Katering premium dengan cita rasa nusantara dan western fusion, cocok untuk pernikahan, gathering, dan acara korporat skala besar.',
    whatsapp_number: '628123456703', is_verified: true, rating_avg: 4.7, review_count: 214,
    address: 'Jl. Darmo Permai III No. 8, Surabaya', image: 'assets/images/vendors/savory.jpg',
    services: [
      { id: 's05', name: 'Paket Buffet Nusantara (100 pax)', category: 'Catering', description: '8 menu pilihan termasuk appetizer, main course, dan dessert. Sudah termasuk peralatan dan pramusaji.', price_min: 12000000, price_max: 20000000, unit: '100 pax' },
      { id: 's06', name: 'Paket Fine Dining Fusion (50 pax)', category: 'Catering', description: 'Menu fusion Barat-Nusantara dengan plating fine dining untuk acara eksklusif.', price_min: 18000000, price_max: 32000000, unit: '50 pax' },
    ],
    reviews: [
      { id: 'r06', rating: 5, comment: 'Makanannya enak semua, tamu banyak yang nambah. Recommended!', user: 'Andi Wijaya', date: '2026-06-10' },
      { id: 'r07', rating: 4, comment: 'Rasa oke, tapi penyajian ada yang agak telat di sesi awal.', user: 'Melati Suryani', date: '2026-05-01' },
      { id: 'r08', rating: 5, comment: 'Presentasi makanan cantik, cocok untuk acara formal.', user: 'Hendra Gunawan', date: '2026-04-15' },
    ],
  },
  {
    id: 'v04', slug: 'visual-frame-studio', store_name: 'Visual Frame Studio',
    category: 'Photography', city: 'Yogyakarta',
    description: 'Studio fotografi dan videografi dengan gaya cinematic storytelling, spesialis dokumentasi pernikahan dan prewedding.',
    whatsapp_number: '628123456704', is_verified: true, rating_avg: 5.0, review_count: 87,
    address: 'Jl. Kaliurang KM 5, Yogyakarta', image: 'assets/images/vendors/visual.jpg',
    services: [
      { id: 's07', name: 'Paket Foto & Video Wedding Cinematic', category: 'Photography', description: '2 fotografer, 2 videografer, same-day edit, dan album cetak premium.', price_min: 20000000, price_max: 40000000, unit: 'event' },
      { id: 's08', name: 'Paket Prewedding Konsep Bebas', category: 'Photography', description: 'Sesi foto prewedding di 2 lokasi pilihan dengan konsep sesuai request.', price_min: 6000000, price_max: 12000000, unit: 'sesi' },
    ],
    reviews: [
      { id: 'r09', rating: 5, comment: 'Hasil fotonya seperti majalah, sangat puas dengan editingnya.', user: 'Citra Lestari', date: '2026-06-18' },
      { id: 'r10', rating: 5, comment: 'Tim sangat kreatif mengarahkan pose, hasilnya natural dan estetik.', user: 'Fajar Nugroho', date: '2026-05-25' },
    ],
  },
  {
    id: 'v05', slug: 'grand-stage-rigging', store_name: 'Grand Stage Rigging',
    category: 'Stage & Rigging', city: 'Jakarta',
    description: 'Kontraktor panggung dan rigging profesional untuk konser, wedding outdoor, dan corporate event dengan struktur custom.',
    whatsapp_number: '628123456705', is_verified: true, rating_avg: 4.6, review_count: 63,
    address: 'Jl. Kebon Jeruk Raya No. 20, Jakarta Barat', image: 'assets/images/categories/stage.jpg',
    services: [
      { id: 's09', name: 'Panggung Standar 6x4m', category: 'Stage & Rigging', description: 'Panggung dengan truss rigging, backdrop LED, dan carpet flooring.', price_min: 10000000, price_max: 18000000, unit: 'event' },
      { id: 's10', name: 'Panggung Custom Outdoor', category: 'Stage & Rigging', description: 'Struktur panggung custom untuk acara outdoor skala besar, termasuk atap dan barrier keamanan.', price_min: 25000000, price_max: 50000000, unit: 'event' },
    ],
    reviews: [
      { id: 'r11', rating: 5, comment: 'Konstruksi kokoh dan aman, tim teknis sangat berpengalaman.', user: 'Yoga Pratama', date: '2026-04-10' },
      { id: 'r12', rating: 4, comment: 'Bagus, tapi proses bongkar agak lama.', user: 'Nadia Firdaus', date: '2026-03-22' },
    ],
  },
  {
    id: 'v06', slug: 'lumina-lighting-design', store_name: 'Lumina Lighting Design',
    category: 'Lighting Design', city: 'Bali',
    description: 'Spesialis tata cahaya artistik untuk wedding, gala dinner, dan acara outdoor dengan sentuhan ambient dan dramatic lighting.',
    whatsapp_number: '628123456706', is_verified: true, rating_avg: 4.9, review_count: 71,
    address: 'Jl. Sunset Road No. 88, Denpasar', image: 'assets/images/categories/lighting.jpg',
    services: [
      { id: 's11', name: 'Ambient Lighting Package', category: 'Lighting Design', description: 'String lights, uplighting, dan spotlight untuk venue outdoor.', price_min: 7000000, price_max: 15000000, unit: 'event' },
      { id: 's12', name: 'Dramatic Stage Lighting', category: 'Lighting Design', description: 'Moving head lights, laser, dan haze machine untuk efek panggung dramatis.', price_min: 12000000, price_max: 25000000, unit: 'event' },
    ],
    reviews: [
      { id: 'r13', rating: 5, comment: 'Lighting-nya bikin suasana romantis banget, sesuai request kami.', user: 'Kevin Susanto', date: '2026-06-05' },
      { id: 'r14', rating: 5, comment: 'Tim sangat detail dalam mengatur pencahayaan tiap sudut venue.', user: 'Putri Ramadhani', date: '2026-05-14' },
    ],
  },
  {
    id: 'v07', slug: 'harmoni-entertainment', store_name: 'Harmoni Entertainment',
    category: 'Hiburan & Musik', city: 'Medan',
    description: 'Band akustik, orkestra mini, dan DJ profesional untuk mengisi hiburan di berbagai jenis acara.',
    whatsapp_number: '628123456707', is_verified: false, rating_avg: 4.5, review_count: 42,
    address: 'Jl. Gatot Subroto No. 33, Medan', image: 'assets/images/categories/entertainment.jpg',
    services: [
      { id: 's13', name: 'Live Band Akustik (3 jam)', category: 'Hiburan & Musik', description: '4 personil band akustik dengan playlist custom sesuai request.', price_min: 6000000, price_max: 10000000, unit: 'event' },
      { id: 's14', name: 'DJ Set Reception (4 jam)', category: 'Hiburan & Musik', description: 'DJ profesional dengan sound system portable dan lighting sederhana.', price_min: 4000000, price_max: 7000000, unit: 'event' },
    ],
    reviews: [
      { id: 'r15', rating: 4, comment: 'Musiknya asik, tamu banyak yang ikut joget.', user: 'Reza Firmansyah', date: '2026-04-02' },
      { id: 'r16', rating: 5, comment: 'Playlist sesuai request, band sangat interaktif dengan tamu.', user: 'Anisa Rahmawati', date: '2026-02-28' },
    ],
  },
  {
    id: 'v08', slug: 'dokumentasi-abadi-visual', store_name: 'Dokumentasi Abadi Visual',
    category: 'Dokumentasi', city: 'Semarang',
    description: 'Layanan dokumentasi event lengkap: foto, video, drone aerial, dan same-day-edit untuk berbagai jenis acara.',
    whatsapp_number: '628123456708', is_verified: true, rating_avg: 4.7, review_count: 55,
    address: 'Jl. Pandanaran No. 14, Semarang', image: 'assets/images/categories/documentation.jpg',
    services: [
      { id: 's15', name: 'Paket Dokumentasi Full Day', category: 'Dokumentasi', description: 'Tim 4 orang (foto, video, drone) selama 8 jam, termasuk raw file dan highlight video.', price_min: 9000000, price_max: 16000000, unit: 'event' },
    ],
    reviews: [
      { id: 'r17', rating: 5, comment: 'Hasil drone-nya keren banget, angle-nya sinematik.', user: 'Dimas Aditya', date: '2026-05-30' },
      { id: 'r18', rating: 4, comment: 'Bagus, video highlight-nya cepat jadi.', user: 'Wulan Sari', date: '2026-04-18' },
    ],
  },
  {
    id: 'v09', slug: 'royal-tenda-venue', store_name: 'Royal Tenda & Venue',
    category: 'Tenda & Venue', city: 'Bekasi',
    description: 'Penyedia tenda dekorasi dan penyewaan venue outdoor untuk berbagai kapasitas acara, dari intimate gathering hingga resepsi besar.',
    whatsapp_number: '628123456709', is_verified: true, rating_avg: 4.6, review_count: 38,
    address: 'Jl. Ahmad Yani No. 5, Bekasi', image: 'assets/images/categories/stage.jpg',
    services: [
      { id: 's16', name: 'Tenda Sarnavil Standar (200 tamu)', category: 'Tenda & Venue', description: 'Tenda lengkap dengan flooring, kursi, dan meja untuk 200 tamu.', price_min: 8000000, price_max: 14000000, unit: 'event' },
    ],
    reviews: [
      { id: 'r19', rating: 5, comment: 'Tenda kokoh, aman meski hujan deras.', user: 'Agus Setiawan', date: '2026-03-08' },
      { id: 'r20', rating: 4, comment: 'Bagus, pemasangan agak lama sekitar 3 jam.', user: 'Ratna Dewi', date: '2026-02-14' },
    ],
  },
  {
    id: 'v10', slug: 'glow-makeup-artistry', store_name: 'Glow Makeup Artistry',
    category: 'Makeup & Salon', city: 'Malang',
    description: 'Makeup artist profesional spesialis riasan pengantin dan makeup keluarga dengan teknik airbrush tahan lama.',
    whatsapp_number: '628123456710', is_verified: true, rating_avg: 4.9, review_count: 156,
    address: 'Jl. Ijen Boulevard No. 21, Malang', image: 'assets/images/vendors/atelier.jpg',
    services: [
      { id: 's17', name: 'Paket Makeup Pengantin Airbrush', category: 'Makeup & Salon', description: 'Makeup pengantin, keluarga (4 orang), dan touch-up sepanjang acara.', price_min: 5000000, price_max: 9000000, unit: 'event' },
    ],
    reviews: [
      { id: 'r21', rating: 5, comment: 'Makeup-nya awet dari pagi sampai malam, glowing terus.', user: 'Sri Handayani', date: '2026-06-20' },
      { id: 'r22', rating: 5, comment: 'MUA sangat sabar dan hasil sesuai preferensi.', user: 'Intan Permata', date: '2026-05-08' },
    ],
  },
  {
    id: 'v11', slug: 'elegan-wedding-organizer', store_name: 'Elegan Wedding Organizer',
    category: 'Wedding Organizer', city: 'Jakarta Barat',
    description: 'Wedding organizer full-service dengan pengalaman lebih dari 8 tahun menangani pernikahan tradisional hingga modern.',
    whatsapp_number: '628123456711', is_verified: true, rating_avg: 4.8, review_count: 189,
    address: 'Jl. Puri Indah Raya No. 9, Jakarta Barat', image: 'assets/images/vendors/melody.jpg',
    services: [
      { id: 's18', name: 'Paket Full Wedding Organizer', category: 'Wedding Organizer', description: 'Perencanaan lengkap dari konsep, vendor management, hingga hari-H. Termasuk 3x meeting konsultasi.', price_min: 25000000, price_max: 60000000, unit: 'event' },
      { id: 's19', name: 'Paket Day Coordination', category: 'Wedding Organizer', description: 'Koordinasi acara di hari-H saja, cocok untuk yang sudah siapkan vendor sendiri.', price_min: 6000000, price_max: 12000000, unit: 'event' },
    ],
    reviews: [
      { id: 'r23', rating: 5, comment: 'Acara berjalan lancar tanpa drama, tim sangat terorganisir.', user: 'Ayu Kusuma', date: '2026-06-12' },
      { id: 'r24', rating: 5, comment: 'Komunikasi responsif, membantu banget dari awal sampai akhir.', user: 'Bimo Prasetyo', date: '2026-05-02' },
    ],
  },
  {
    id: 'v12', slug: 'mc-prima-host', store_name: 'MC Prima Host',
    category: 'MC & Host', city: 'Tangerang Selatan',
    description: 'Master of Ceremony berpengalaman untuk acara formal, wedding, dan corporate event dengan gaya bilingual.',
    whatsapp_number: '628123456712', is_verified: false, rating_avg: 4.4, review_count: 29,
    address: 'Jl. BSD Raya Utama No. 3, Tangerang Selatan', image: 'assets/images/categories/entertainment.jpg',
    services: [
      { id: 's20', name: 'MC Wedding Bilingual (4 jam)', category: 'MC & Host', description: 'MC berpengalaman dengan gaya formal dan santai, mampu berbahasa Indonesia dan Inggris.', price_min: 3500000, price_max: 6000000, unit: 'event' },
    ],
    reviews: [
      { id: 'r25', rating: 4, comment: 'Pembawaan acara enak, timing rundown pas.', user: 'Wahyu Nugraha', date: '2026-04-25' },
      { id: 'r26', rating: 5, comment: 'MC sangat interaktif dan mencairkan suasana.', user: 'Lita Anggraini', date: '2026-03-30' },
    ],
  },
];

function findorFormatHarga(services) {
  if (!services || services.length === 0) return 'Hubungi vendor';
  const min = Math.min(...services.map(s => s.price_min));
  if (min >= 1_000_000) return `Rp ${(min / 1_000_000).toFixed(0)}jt`;
  if (min >= 1_000) return `Rp ${(min / 1_000).toFixed(0)}rb`;
  return `Rp ${min.toLocaleString('id-ID')}`;
}

function findorFormatPrice(n) {
  if (n >= 1_000_000) return `Rp ${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}jt`;
  if (n >= 1_000) return `Rp ${Math.round(n / 1_000)}rb`;
  return `Rp ${n.toLocaleString('id-ID')}`;
}

function findorGetVendorBySlug(slug) {
  return FINDOR_VENDORS.find(v => v.slug === slug) || null;
}
