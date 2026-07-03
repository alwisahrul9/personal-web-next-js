import { Metadata } from "next";
import HeroSection from "./components/hero-section";
import WhySection from "./components/why-section";
import PriceSection from "./components/price-section";
import PortfolioSection from "./components/portfolio-section";

export const metadata: Metadata = {
  // 1. Judul Utama di Tab Browser (Gunakan separator | untuk menyisipkan kata kunci utama)
  title: "Jasa Pembuatan Website Next.js Premium & SEO | KankAlwi Dev",

  // 2. Deskripsi Singkat yang Muncul di Hasil Pencarian Google
  description:
    "Membangun website modern berkecepatan tinggi, estetik, dan SEO-friendly. Lihat portofolio, layanan, dan paket harga transparan kami di sini.",

  // 3. Kata Kunci Meta (Meskipun Google tidak terlalu memprioritaskan ini lagi, ini bagus untuk mesin pencari lain)
  keywords: [
    "jasa pembuatan website",
    "landing page premium",
    "nextjs website developer",
    "website cepat seo",
    "bikin web portofolio",
  ],

  // 4. Pengaturan Open Graph (Penting agar saat link web Anda dibagikan ke WA/Sosmed, muncul kartu pratinjau yang rapi)
  openGraph: {
    title: "Jasa Pembuatan Website Next.js Premium | KankAlwi Dev",
    description:
      "Website lambat bikin klien kabur. Saatnya beralih ke Next.js untuk performa instan dan desain eksklusif.",
    url: process.env.baseUrl, // Ganti dengan domain asli Anda nanti
    siteName: "KankAlwi Dev",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/icon.png", // Siapkan gambar ukuran 1200x630 pixel di folder public
        width: 1200,
        height: 630,
        alt: "Pratinjau Jasa Pembuatan Website KankAlwi Dev",
      },
    ],
  },

  // 5. Verifikasi Google Search Console (Sangat wajib agar web Anda cepat diindeks untuk rangking 1)
  verification: {
    google: process.env.googleVerificationCode, // Masukkan kode dari Google setelah mendaftarkan domain
  },

  // 6. Mengunci Robot Google agar fokus mengindeks satu halaman ini saja
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. SECTION KENAPA HARUS KAMI (BENTO GRID) */}
      <WhySection />

      {/* 3. PAKET HARGA */}
      <PriceSection />

      {/* 4. PORTFOLIO */}
      <PortfolioSection />
    </div>
  );
}
