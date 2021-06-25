# Project Overview

Project ini merupakan hasil tugas mata kuliah mobile programming dari salah satu universitas negeri di jakarta (Universitas Pembangunan Nasional Veteran Jakarta. || **UPNVJ**).
Project ini merupakan lanjutan dari project sebelumnya dengan tema yang sama yaitu website peminjaman lab pada lingkungan UPNVJ.
Project ini dikembangkan menggunakan :

1. React Native sebagai front end,
2. NodeJS sebagai web server / back end,
3. Hapi framework sebagai handler server,
4. Axios sebagai HTTP client,
5. Mysql sebagai Database,
6. Firebase sebagai Database Realtime untuk fitur Chat.

Project ini terintegrasi dengan project sebelumnya pada website peminjaman lab dengan domain https://elabsupnvj.my.id/ karena dalam penggunaanya admin menggunakan dashboard admin pada https://elabsupnvj.my.id/admin untuk melakukan persetujuan saat ada request pengajuan peminjaman lab yang dilakukan user.


## Installation

sebelum mencobanya, diharapkan jalankan npm install agar terinstall semua packet depedencies pada project ini. dan jangan lupa install web servernya pada ...

```bash
npm install
```

## Explanation

**- React Native v0.63.2**

React Native adalah framework yang digunakan untuk membuat mobile app di dua sistem operasi sekaligus, yaitu Android dan iOS. Untuk itulah, React Native disebut juga dengan cross-platform network karena Anda bisa membuat satu aplikasi yang bisa digunakan di berbagai platform, yaitu Android dan iOS.
Penggabungan antara native mobile app dan React juga bisa dilakukan dengan mudah. Jadi, proses pengembangan bisa lebih cepat.
React Native sendiri pertama kali dirilis pada tahun 2015 oleh Facebook dan menjadi bagian dari proyek open source mereka.
Beberapa contoh aplikasi seluler yang menggunakan framework React Native adalah Instagram, Facebook, Pinterest, hingga Skype.

React Native adalah framework yang ditulis dengan campuran bahasa JavaScript dan JXL, sebuah kode markup khusus yang menyerupai XML.
Framework ini memiliki kemampuan untuk berkomunikasi dengan kedua ranah sekaligus, yaitu threads yang berbasis JavaScript dan threads dari native app.
Jadi, bagaimana caranya untuk berkomunikasi? Rupanya React Native menggunakan apa yang disebut dengan “bridge” atau jembatan.
JavaScript dan threads native memang ditulis dengan dua bahasa pemrograman yang berbeda. Namun, fitur bridging dari React Native tetap memungkinkan untuk komunikasi dua arah.
Itu artinya saat pengembang sudah memiliki aplikasi Android atau iOS, mereka masih tetap bisa menggunakan komponennya saat menggunakan React Native.

**Advantages :**
1. Hemat biaya

Kelebihan pertama dari React Native adalah biaya yang lebih hemat jika dibandingkan dengan proses pengembangan yang lainnya.
Itulah mengapa perusahaan startup lebih menyukai untuk menggunakan React Native dalam mengembangkan aplikasi seluler mereka.
Saat melakukan pengembangan dengan React Native tentu perusahaan tidak perlu menyewa dua tim pengembang Android dan iOS secara terpisah.
Jadi, anggaran untuk membayar dua tim tersebut bisa dialokasikan untuk keperluan yang lain.

2. Aplikasi bisa berjalan lebih cepat

Sebelumnya banyak yang beranggapan bahwa JavaScript tidak akan bisa membuat aplikasi berjalan lebih cepat seperti saat menggunakan kode dari native.
Namun, dalam percobaan yang dilakukan oleh Netguru ditemukan bahwa kinerja dari aplikasi yang menggunakan React Native dan kode native memiliki hasil yang sama.
Jadi, selain mudah dalam tahapan membuat kode, rupanya React Native juga memiliki pengaruh dalam kecepatan berjalannya aplikasi.

3. Lebih hemat waktu

Kelebihan selanjutnya dari React Native adalah bisa menghemat waktu lebih banyak untuk proses pengembangannya.
Kode dari React Native bisa digunakan kembali tanpa banyak mengubah komponennya. Jadi, proses pengembangan aplikasi seluler pun bisa menjadi lebih cepat.

4. Memiliki komunitas pengembang yang besar

React Native adalah framework JavaScript open source yang memungkinkan para pengembang untuk saling berbagi pengetahuannya.
Oleh karena itu, saat ada kesulitan saat menggunakan React Native, developer tidak perlu khawatir karena bisa bertanya di komunitas pengembang.
Selain itu, para pengembang pemula yang ikut komunitas juga mendapatkan keuntungan yaitu bisa meningkatkan kemampuan coding.

**Weakness :**
1. Kompatibilitas dan debugging

React Native memang menjadi salah satu framework yang terbilang masih muda. Jadi, saat ini mereka masih dalam fase beta.
Hal tersebut bisa membuat pengembang menemukan berbagai masalah dengan kompatibilitas dan debugging.
Jika pengembang tersebut masih belum terlalu mahir dalam menggunakan React Native, tentu akan membuatnya kesulitan untuk memecahkan masalah tersebut.

2. Kinerja dan kualitasnya lebih rendah

Kekurangan dari React Native yang selanjutnya adalah hasil kinerja dan kualitas dari aplikasi yang cukup rendah.
React Native merupakan pengembangan lintas platform sehingga tidak semua aspek akan membuahkan hasil yang sempurna. Kinerja dan kualitas menjadi salah satu hal yang harus dikorbankan.
Hal itu berbeda dengan saat menggunakan pengembangan kode native yang tentunya bisa memberikan hasil yang lebih maksimal.
Itulah mengapa React Native tidak dijadikan pilihan untuk membuat aplikasi yang menjalankan animasi yang berat atau pun game.

3. Tetap membutuhkan native developer

React Native memang memiliki fitur bridging untuk menjembatani JavaScript dan kode native. Akan tetapi, jika perusahaan tidak memiliki native developer tentu akan cukup kesulitan.
Native developer masih dibutuhkan untuk memasukkan kode native ke dalam basis kode React Native. Jadi, jika pengembang tidak memiliki keterampilan menggunakan kode native tentu akan kebingungan.

*Source : https://glints.com/id/lowongan/react-native-adalah/#.YNVkUOgzZPY



**- NodeJS v14.15.1**

pada web server ini menggunakan HAPI framework untuk menjalankan server dan mengatur routes untuk mempermudah pertukaran data dari database-backend-frontend berbasis REST API.
hapi framework juga dapat melakukan handler jika terjadi request ke server dengan respone yang diinginkan oleh user.



**- Axios v0.21.1**

axios berguna sebagai HTTP call untuk membuat request ke server.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.