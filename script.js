/* ===== FITUR 1: TOGGLE MODE GELAP/TERANG ===== */
const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

btnTema.addEventListener('click', function () {
    // toggle: tambah class jika belum ada, hapus jika sudah ada
    bodyHalaman.classList.toggle('light-mode');

    if (bodyHalaman.classList.contains('light-mode')) {
        btnTema.textContent = '🌙 Mode Gelap';
    } else {
        btnTema.textContent = '☀️ Mode Terang';
    }
});

/* ===== FITUR 2: MODAL KONTAK ===== */
const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

btnBukaModal.addEventListener('click', function (event) {
    event.preventDefault(); // mencegah link pindah halaman / buka email
    elemenModal.classList.add('show');
});

btnTutupModal.addEventListener('click', function () {
    elemenModal.classList.remove('show');
});

/* ===== FITUR 3: SAPAAN OTOMATIS SESUAI WAKTU ===== */
function tampilkanSapaan() {
    const sekarang = new Date();
    const jam = sekarang.getHours();
    let sapaan;

    if (jam >= 5 && jam < 11) {
        sapaan = 'Selamat Pagi ☀️';
    } else if (jam >= 11 && jam < 15) {
        sapaan = 'Selamat Siang 🌤️';
    } else if (jam >= 15 && jam < 18) {
        sapaan = 'Selamat Sore 🌇';
    } else {
        sapaan = 'Selamat Malam 🌙';
    }

    const opsiTanggal = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };
    const tanggal = sekarang.toLocaleDateString('id-ID', opsiTanggal);

    document.getElementById('sapaanWaktu').textContent = `${sapaan} — ${tanggal}`;
}

tampilkanSapaan();