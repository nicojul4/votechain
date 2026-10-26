# Naskah Presentasi VoteChain

**Durasi sasaran:** 8–10 menit  
**Format:** presentasi website + demo animasi Three.js  
**Catatan:** VoteChain adalah rancangan konseptual kelompok untuk tugas UTS, bukan sistem resmi atau aplikasi pemilu siap pakai.

## Persiapan sebelum tampil

- Buka `index.html` dan pastikan visual 3D tampil di laptop presentasi.
- Gunakan layar penuh. Atur zoom browser ke 80–90% bila halaman terlalu panjang.
- Pastikan semua anggota mengetahui kapan harus scroll dan siapa yang menjalankan demo.
- Untuk demo konsensus: tombol status node berputar dari **Aktif → Byzantine → Mati → Aktif**.
- Demo otomatis berpindah tahap setiap sekitar 3 detik. Tombol timeline juga bisa dipakai untuk langsung menuju tahap tertentu.
- Jika browser tidak mendukung WebGL, siapkan penjelasan lisan dan tampilkan bagian diagram/jaringan sebagai cadangan.

## 1. Pembukaan — Mark Justin Gunawan

**[Tampilkan halaman utama VoteChain.]**

> Selamat pagi/siang. Kami dari Kelompok VoteChain. Saya Mark Justin Gunawan, bersama Nicolas Julian Kurnia P dan Bentley Arshavin.
>
> Untuk tugas Blockchain ini, kami merancang VoteChain, yaitu konsep e-voting berbasis permissioned blockchain untuk konteks Indonesia. Tujuan kami bukan menyatakan bahwa sistem ini sudah siap digunakan dalam pemilu, tetapi menjelaskan bagaimana beberapa pihak dapat memvalidasi catatan pemilihan bersama.
>
> Nama VoteChain sendiri sudah digunakan oleh beberapa karya lain, termasuk rancangan untuk Palestina dan sistem berbasis EOS. Karena itu, kami tidak mengklaim sebagai pencipta pertama nama atau konsep VoteChain. Rancangan kelompok kami dibedakan oleh konteks Indonesia dan fokus pada permissioned blockchain dengan PBFT.

## 2. Problem & Solusi — Mark Justin Gunawan

**[Scroll ke bagian “Satu hasil. Banyak pihak yang perlu percaya.”]**

> Masalah yang kami soroti adalah kepercayaan terhadap pencatatan dan penghitungan suara. Dalam sistem terpusat, satu organisasi mengelola catatan utama. Model ini bisa efisien dan database biasa tetap dapat menjadi pilihan yang baik jika pengelola dan prosedur auditnya dipercaya.
>
> Tantangannya muncul ketika beberapa pihak perlu memeriksa riwayat yang sama, tetapi tidak ingin satu pihak memegang satu-satunya catatan yang menjadi acuan. Operator terpusat juga menjadi titik kendali dan pemulihan utama.
>
> VoteChain mengusulkan ledger permissioned: validator yang telah mendapat izin menyimpan salinan dan menyepakati urutan transaksi. Perubahan pada riwayat dapat dibandingkan antar-salinan serta ditinjau melalui audit. Blockchain tidak membuat perubahan mustahil; hash membantu membuat perubahan terdeteksi, sedangkan penerimaan riwayat bergantung pada konsensus dan tata kelola validator.
>
> Jadi alasan kami memilih blockchain bukan karena database konvensional selalu buruk. Blockchain relevan untuk rancangan ini karena kebutuhan utamanya adalah membagi kepercayaan dan menyediakan audit bersama lintas institusi.

**[Opsional: tunjukkan kartu database terpusat dan permissioned ledger. Jangan klaim “blockchain wajib” untuk semua pemilu.]**

## 3. Pemilihan Konsensus PBFT — Nicolas Julian Kurnia P

**[Scroll ke bagian “PBFT: sepakat tanpa mining.”]**

> Kami memilih PBFT, Practical Byzantine Fault Tolerance, dengan asumsi jaringan validator dikenal dan berizin. PBFT tidak memerlukan mining seperti Proof of Work, sehingga lebih hemat energi dan dapat memberi finalitas transaksi dengan cepat pada kelompok validator yang terbatas.
>
> Rumus toleransinya adalah n ≥ 3f + 1. Jika rancangan memakai tujuh validator, maka f paling besar adalah dua, karena 7 ≥ 3 kali 2 ditambah 1. Kuorum commit-nya 2f + 1, yaitu lima dari tujuh validator. Fase PBFT yang kami tampilkan adalah pre-prepare, prepare, lalu commit: leader mengusulkan transaksi, validator memeriksa dan menyiapkan pesan, lalu node commit setelah kuorum tercapai.
>
> Ini bukan berarti sistem pasti aman selama dua node mati dalam kondisi apa pun. Jaminan PBFT bergantung pada asumsi model Byzantine, komunikasi jaringan, dan independensi validator. Bila tiga dari tujuh validator bermasalah atau berkolusi, sistem sudah berada di luar batas jaminan PBFT.
>
> PBFT juga memiliki biaya komunikasi yang meningkat kuadratik ketika jumlah validator bertambah. Karena itu, pilihan ini cocok untuk kelompok validator yang relatif terbatas, bukan berarti skalanya tanpa batas. Angka tujuh di sini adalah asumsi demonstrasi untuk menjelaskan rumus, bukan hasil benchmark.

**[Tunjuk rumus n ≥ 3f + 1 dan kuorum 5/7.]**

## 4. Pemetaan Aktor & Jaringan — Bentley Arshavin

**[Scroll ke bagian “Tujuh seat. Lima rumpun kandidat.”]**

> Dalam usulan kami, tujuh seat validator dibagi ke lima rumpun kandidat: satu KPU Pusat, satu Bawaslu, satu Komdigi, dua universitas independen, dan dua organisasi auditor independen.
>
> Tujuh seat ini hanya dapat dianggap independen jika operator, sumber pendanaan, kendali kunci, dan operasionalnya benar-benar terpisah. Dua validator yang berbeda nama tetapi dikendalikan pihak yang sama tidak memberi independensi yang sama.
>
> KPU Provinsi, KPU Daerah, dan TPS kami tempatkan sebagai node operasional atau replika layanan, bukan seat validator tambahan. Dukcapil menjadi sumber pemeriksaan kelayakan pemilih melalui jalur terlindungi. Saksi partai, LSM, dan media dapat mengamati bukti serta hasil agregat. Pemilih menggunakan aplikasi sebagai klien.
>
> Mahkamah Konstitusi kami tempatkan di luar konsensus agar fungsi penyelesaian sengketa tidak bercampur dengan operasi validator. Semua nama lembaga di sini adalah usulan akademik, bukan pernyataan bahwa lembaga tersebut sudah setuju atau punya mandat untuk bergabung.

## 5. Alur Suara & Privasi — Bentley Arshavin

**[Scroll ke bagian “Buktikan suara sah. Jangan buka pilihan.”]**

> Alur yang kami usulkan dimulai dengan pemeriksaan kelayakan pemilih secara off-chain. Setelah lolos, pemilih menerima credential sekali pakai yang tidak memuat pilihan suaranya.
>
> Perangkat pemilih mengenkripsi ballot dan menghasilkan nullifier khusus untuk pemilu tersebut. Nullifier dipakai untuk mendeteksi penggunaan credential yang sama lebih dari sekali. Zero-knowledge proof diusulkan untuk membuktikan bahwa credential sah dan ballot mengikuti aturan tanpa membuka identitas pemilih atau kandidat pilihannya.
>
> Validator memeriksa bahwa pemilu masih terbuka, bukti valid, dan nullifier belum pernah dipakai. Ledger hanya menyimpan ciphertext ballot, nullifier, bukti validasi, dan status transaksi. Identitas Dukcapil, pemetaan identitas ke credential, serta kunci rahasia tetap berada di sistem terlindungi.
>
> Setelah pemilu ditutup, hasil agregat dibuka menggunakan mekanisme kunci ambang, lalu auditor memeriksa bukti dan hasil. Blind signature, ZKP, dan penghitungan agregat ini masih mekanisme usulan dalam rancangan kami. Website tidak mengimplementasikan atau membuktikan keamanan protokol kriptografi tersebut.

## 6. Analisis Risiko Keamanan — Bentley Arshavin

**[Scroll ke bagian “Kontrol membantu. Tidak menjamin.”]**

> Risiko terbesar untuk pilihan PBFT kami adalah kolusi lebih dari sepertiga validator. Dengan tujuh validator, tiga node sudah melewati batas f sama dengan dua. Strateginya adalah memilih operator lintas domain, menjaga proses pemilihan validator transparan, dan melakukan audit publik. Audit dapat membantu mendeteksi serta meminta pertanggungjawaban, tetapi tidak mengembalikan jaminan PBFT setelah ambang toleransinya terlampaui.
>
> Risiko berikutnya adalah DoS pada hari pemilihan. Rate limiting, multi-region, latihan failover, dan rute alternatif dapat membantu ketersediaan layanan.
>
> Untuk vote buying atau coercion, kebijakan re-vote dapat membantu dalam kondisi tertentu, tetapi bukan solusi tunggal dan tidak menghilangkan paksaan di lingkungan pemilih. Untuk kebocoran privasi, ballot terlindungi dan pemisahan identitas-pilihan diperlukan. Untuk identitas palsu atau suara ganda, pemeriksaan kelayakan serta nullifier unik dapat membantu.
>
> Semua mitigasi mengurangi risiko; tidak ada yang menjadi jaminan mutlak.

## 7. Demo Animasi Sistem — Nicolas menjalankan, anggota lain menjelaskan

**[Scroll ke “Demo Interaktif · 3D”. Pastikan status semua node aktif, lalu pilih “Jalankan demo”.]**

> Sekarang kami tunjukkan alur VoteChain melalui animasi. Kios identitas dan pemilih berada di luar kelompok validator. Stasiun-stasiun di tengah adalah validator, sedangkan blok di pusat adalah ledger bersama.

**[Biarkan demo bergerak. Gunakan tombol tahap berikutnya bila ingin menyamakan animasi dengan narasi.]**

> Pertama, sistem memeriksa kelayakan pemilih. Berikutnya, credential anonim diterbitkan. Pemilih mengirim ballot rahasia ke jaringan. Validator menjalankan konsensus PBFT, lalu transaksi yang diterima masuk ke ledger. Pada tahap akhir, sistem menampilkan hasil agregat untuk diperiksa.
>
> Animasi ini menjelaskan alur yang kami usulkan, bukan menjalankan kriptografi atau blockchain sungguhan di belakang layar.

**[Tunjukkan toleransi dua node: reset demo, ubah dua node menjadi Byzantine, lalu jalankan alur sampai PBFT. Jelaskan bahwa demo tetap melewati tahap konsensus.]**

> Dengan dua node bermasalah, simulasi masih berada dalam asumsi toleransi untuk tujuh validator.

**[Reset. Ubah tiga node menjadi Byzantine. Klik titik timeline tahap keempat, “Sepakati dengan PBFT”.]**

> Dengan tiga node bermasalah, demo berhenti di konsensus. Tujuh validator tidak memenuhi n ≥ 3f + 1 untuk f sama dengan tiga. Artinya jaminan PBFT tidak lagi berlaku; kita tidak menyimpulkan bahwa serangan pasti berhasil, tetapi sistem berada di luar asumsi keamanannya.

## 8. Penutup — Mark Justin Gunawan

**[Kembali ke bagian ringkasan atau tampilkan halaman utama.]**

> Sebagai ringkasan, proyek kami menjawab empat bagian tugas: problem dan alasan memakai ledger bersama; pemilihan PBFT dan batas toleransinya; pemetaan calon aktor dan perannya; serta risiko dan strategi mitigasi.
>
> Kesimpulan kami, VoteChain adalah rancangan edukatif untuk menunjukkan bagaimana e-voting permissioned dapat membagi validasi dan mendukung audit bersama. Keamanan dan kelayakannya tetap bergantung pada desain privasi, independensi validator, tata kelola, pengujian, dan persetujuan institusi terkait.
>
> Demikian presentasi dari kelompok kami. Terima kasih. Kami siap menjawab pertanyaan.

## Pertanyaan yang mungkin muncul

**Mengapa tidak cukup memakai database terpusat?**  
Database terpusat bisa cukup bila satu pengelola tepercaya dan prosedur auditnya diterima. Kami mengeksplorasi blockchain karena beberapa pihak perlu memeriksa catatan bersama tanpa bergantung pada satu salinan utama.

**Mengapa memilih PBFT, bukan PoW atau RAFT?**  
PoW membutuhkan mining dan lebih boros energi untuk jaringan berizin. RAFT menangani kegagalan crash, tetapi bukan validator Byzantine yang sengaja bertindak jahat. PBFT cocok untuk kelompok validator terbatas yang saling dikenal, dengan biaya komunikasi dan skala yang perlu diperhitungkan.

**Apakah tujuh validator pasti cukup untuk pemilu nasional?**  
Tidak. Tujuh node adalah contoh untuk menjelaskan n ≥ 3f + 1. Jumlah dan penempatan validator nyata membutuhkan analisis beban, jaringan, independensi, hukum, dan tata kelola.

**Apakah blockchain otomatis menjaga rahasia suara?**  
Tidak. Privasi memerlukan pemisahan identitas dan pilihan serta mekanisme kriptografi yang tepat. Dalam proyek ini mekanisme tersebut adalah usulan dan belum diimplementasikan.

**Apa yang terjadi jika tiga dari tujuh validator berkolusi?**  
Tiga sudah melewati f=2. PBFT tidak lagi memberi jaminan keselamatan dan kemajuan berdasarkan asumsi tersebut. Audit dan keragaman validator membantu pencegahan/deteksi, tetapi bukan pengganti batas konsensus.

**Apakah VoteChain sudah dipakai KPU?**  
Tidak. Ini rancangan kelompok untuk presentasi UTS, bukan aplikasi resmi atau sistem produksi.

## Referensi nama VoteChain

- Daraghmi & Hamoudi, *Decentralizing Democracy: Secure and Transparent E-Voting Systems with Blockchain Technology in the Context of Palestine*, 2024: <https://www.mdpi.com/1999-5903/16/11/388>
- Matzliach et al., *EOS Blockchain-Based Electronic Voting System*, BRAINS 2024: <https://cris.bgu.ac.il/en/publications/eos-blockchain-based-electronic-voting-system/>
- Solanki & Meva, *A Hybrid Cryptographic Blockchain Framework ... (HCE-VoteChain)*, 2026: <https://link.springer.com/article/10.1007/s43926-026-00471-y>
