CARA MENAMBAHKAN FOTO KENANGAN
================================

1. Siapkan 3 foto kenangan Anda (format JPG/PNG)
2. Rename foto menjadi:
   - photo1.jpg (Foto pertama)
   - photo2.jpg (Foto kedua)
   - photo3.jpg (Foto ketiga)

3. Masukkan foto-foto tersebut ke folder ini (photos/)

4. Edit caption di file index.html:
   Cari bagian:
   <p class="photo-caption">Momen Pertama</p>
   <p class="photo-caption">Kenangan Manis</p>
   <p class="photo-caption">Bersama Selamanya</p>

   Ganti dengan caption yang sesuai dengan foto Anda.

TIPS:
- Ukuran foto disarankan: 800x600px atau 1024x768px
- Format yang disarankan: JPG (untuk ukuran file lebih kecil)
- Foto akan otomatis di-crop menjadi persegi panjang
- Bisa menambahkan lebih banyak foto dengan mengedit HTML & JS

Jika ingin menambahkan lebih banyak foto:
1. Tambahkan foto4.jpg, photo5.jpg, dst
2. Edit HTML di index.html bagian gallery-wrapper
3. Edit JavaScript di script.js bagian gallery dots
