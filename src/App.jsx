import { useState, useEffect } from 'react';

// Data dummy mahasiswa (array of objects), disimpan di dalam state React
const dataAwal = [
  { nim: '2301001', nama: 'Andi Saputra', noHp: '081234567801', email: 'andi@mail.com',  alamat: 'Surabaya', prodi: 'Informatika',      tahunMasuk: 2023 },
  { nim: '2301002', nama: 'Budi Santoso', noHp: '081234567802', email: 'budi@mail.com',  alamat: 'Malang',   prodi: 'Sistem Informasi', tahunMasuk: 2023 },
  { nim: '2301003', nama: 'Citra Amelia', noHp: '081234567803', email: 'citra@mail.com', alamat: 'Lumajang', prodi: 'Informatika',      tahunMasuk: 2023 },
  { nim: '2401001', nama: 'Dinda Putri',  noHp: '081234567804', email: 'dinda@mail.com', alamat: 'Jember',   prodi: 'Manajemen',        tahunMasuk: 2024 },
  { nim: '2401002', nama: 'Eko Pratama',  noHp: '081234567805', email: 'eko@mail.com',   alamat: 'Kediri',   prodi: 'Informatika',      tahunMasuk: 2024 },
];

function App() {
  // A. useState untuk menyimpan data mahasiswa
  const [mahasiswa] = useState(dataAwal);

  // B. useState untuk menyimpan waktu saat ini
  const [waktu, setWaktu] = useState(new Date());

  // B. useEffect menjalankan interval 1 detik + cleanup saat komponen di-unmount
  useEffect(() => {
    const interval = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const jam = waktu.toLocaleTimeString('id-ID', { hour12: false });
  const tanggal = waktu.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="page">
      <header className="header">
        <h1>Student Management</h1>
        <h2>Daftar Data Mahasiswa</h2>
      </header>

      <section className="info">
        <div className="info-card">
          <span className="info-label">Jumlah Mahasiswa</span>
          <span className="info-value">{mahasiswa.length} Mahasiswa</span>
        </div>
        <div className="info-card clock">
          <span className="info-label">{tanggal}</span>
          <span className="info-value clock-time">{jam}</span>
        </div>
      </section>

      <section className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama Mahasiswa</th>
              <th>No. HP</th>
              <th>Email</th>
              <th>Alamat</th>
              <th>Program Studi</th>
              <th>Tahun Masuk</th>
            </tr>
          </thead>
          <tbody>
            {/* A. Looping data dengan .map(), key unik = nim */}
            {mahasiswa.map((mhs) => (
              <tr key={mhs.nim}>
                <td>{mhs.nim}</td>
                <td>{mhs.nama}</td>
                <td>{mhs.noHp}</td>
                <td>
                  <a href={`mailto:${mhs.email}`}>{mhs.email}</a>
                </td>
                <td>{mhs.alamat}</td>
                <td>{mhs.prodi}</td>
                <td>{mhs.tahunMasuk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
