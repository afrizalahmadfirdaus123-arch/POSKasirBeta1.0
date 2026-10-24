# AfzPOS - Smart Cashier Terminal & Mobile App

Aplikasi Kasir Point of Sale (POS) modern dengan 2 mode yang siap digunakan:
1. **Web POS Terminal** (React 19 + Vite + Tailwind CSS)
2. **Mobile POS App** (React Native + Expo dalam single-file `App.tsx` di `/src/mobile-export/App.tsx`)

---

## 💻 Panduan Membuka & Menjalankan di VS Code

### Langkah 1: Unduh / Export Project dari Google AI Studio
1. Di pojok kanan atas layar Google AI Studio, klik menu **Export** atau ikon **Download ZIP** (atau **Export to GitHub** jika ingin langsung ke repo GitHub Anda).
2. Ekstrak file zip hasil unduhan ke folder komputer Anda, misalnya `D:\Projects\AfzPOS`.
3. Buka **Visual Studio Code**, lalu pilih menu **File > Open Folder...** dan pilih folder proyek tersebut.

---

### Langkah 2: Menjalankan Versi Web POS di VS Code
Di dalam VS Code, buka terminal terintegrasi (**Ctrl + `** atau menu **Terminal > New Terminal**):

```bash
# 1. Install semua dependensi
npm install

# 2. Jalankan server pengembang lokal
npm run dev
```

Aplikasi web POS akan aktif di: `http://localhost:3000`
* `src/App.tsx`: Antarmuka Web POS Terminal
* `src/mobile-export/App.tsx`: Kode 1 file lengkap React Native + Expo (Kasir, Stok/Gramasi, Order, WhatsApp Report, Settings)
* `src/context/POSContext.tsx`: Manajemen state global POS, keranjang belanja, dan multi-tender payment
* `src/utils/whatsapp.ts`: Logika otomatisasi pengiriman laporan harian ke WhatsApp
* `src/utils/bluetoothPrinter.ts`: Emulator & penghubung printer thermal bluetooth
* `.vscode/`: Konfigurasi rekomendasi ekstensi dan workspace VS Code
