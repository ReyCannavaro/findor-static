# Findor Static

Findor Static adalah website marketplace vendor event berbasis HTML, CSS, dan JavaScript murni. Project ini tidak membutuhkan proses build atau instalasi dependency lokal.

## Halaman

- `index.html` - halaman utama
- `search.html` - halaman pencarian vendor
- `vendor.html` - halaman detail vendor
- `how-it-works.html` - halaman cara kerja
- `about.html` - halaman tentang Findor
- `404.html` - halaman error

## Struktur Folder

```text
findor-static/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── data.js
│   │   ├── main.js
│   │   ├── search.js
│   │   └── vendor-detail.js
│   └── images/
├── 404.html
├── about.html
├── how-it-works.html
├── index.html
├── search.html
└── vendor.html
```

## Cara Menjalankan

Masuk ke folder project:

```powershell
cd "C:\Users\Rey Cannavaro\findor-static"
```

### Opsi 1: Buka Langsung di Browser

```powershell
Start-Process .\index.html
```

### Opsi 2: Jalankan Local Server

Opsi ini lebih disarankan agar routing, asset, dan query parameter berjalan lebih konsisten.

Jika Python sudah terpasang:

```powershell
python -m http.server 8000
```

Lalu buka:

```text
http://localhost:8000
```

## Dependency Eksternal

Project ini memakai CDN untuk:

- Tailwind CSS
- jQuery

Karena itu, koneksi internet dibutuhkan agar dependency CDN termuat dengan baik saat website dibuka.

## Catatan Pengembangan

- Data vendor berada di `assets/js/data.js`.
- Logika pencarian berada di `assets/js/search.js`.
- Logika detail vendor berada di `assets/js/vendor-detail.js`.
- Behavior umum seperti navbar, drawer mobile, dan helper query parameter berada di `assets/js/main.js`.
- Styling utama berada di `assets/css/style.css`.

## Deploy

Karena project ini statis, deploy bisa dilakukan ke layanan static hosting seperti:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

Cukup upload seluruh isi folder project dan pastikan `index.html` berada di root.
