import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      // 1. Mengizinkan semua jenis robot pencari (Google, Bing, DuckDuckGo, dll.)
      userAgent: "*",

      // 2. Mengizinkan perayapan di seluruh halaman utama Anda
      allow: "/",

      // 3. Memblokir robot agar tidak membuang waktu merayapi folder internal Next.js atau API
      disallow: [
        "/_next/", // Berkas internal build Next.js
        "/api/", // Jika Anda memiliki API route tersembunyi
        "/private/", // Jaga-jaga jika ada folder privat di masa depan
      ],
    },
    // 4. Beritahu Google di mana letak peta situs Anda (Ganti dengan domain asli Anda)
    sitemap: `${process.env.baseUrl}/sitemap.xml`,
  };
}
