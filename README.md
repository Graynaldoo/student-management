# Student Management (React UI Implementation Practice)

Tugas Frontend Development: implementasi `useState`, `useEffect`, dan looping data dengan `.map()`.
Tanpa backend/database. Data mahasiswa adalah data dummy di dalam state React. Styling memakai Vanilla CSS.

## Fitur
- Header **Student Management** dan subheader **Daftar Data Mahasiswa**
- Informasi jumlah mahasiswa
- Jam digital live (`useState` + `useEffect` + `setInterval`, cleanup `clearInterval`)
- Tabel 7 kolom: NIM, Nama Mahasiswa, No. HP, Email, Alamat, Program Studi, Tahun Masuk (5 data, `.map()` dengan `key` unik = NIM)

## Menjalankan
```bash
npm install
npm run dev
```
Buka alamat yang tampil di terminal (biasanya http://localhost:5173).

## Struktur
- `src/App.jsx` : seluruh logika (useState, useEffect, .map)
- `src/App.css` : tampilan
- `.gitignore` : `node_modules`, `dist`, `.env`

## Pengumpulan
Push ke GitHub publik, atau ZIP semua file **kecuali** `node_modules` dan `dist`, lalu set link Google Drive publik.
