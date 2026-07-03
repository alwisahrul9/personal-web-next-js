import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // 1. URL utama website Anda (Ganti dengan domain asli Anda)
      url: `${process.env.baseUrl}`,

      // 2. Waktu terakhir halaman ini diperbarui (Otomatis menggunakan tanggal hari ini saat build)
      lastModified: new Date(),

      // 3. Seberapa sering halaman ini kira-kira akan berubah kontennya
      changeFrequency: "monthly",

      // 4. Prioritas halaman ini dibanding halaman lain (1 adalah nilai tertinggi)
      priority: 1.0,
    },
  ];
}
