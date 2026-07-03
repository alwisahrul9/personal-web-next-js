import { BarChart, Code } from "lucide-react";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-slate-900"
    >
      {/* Header Seksi */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
          <Code className="w-3.5 h-3.5" /> Bukti Nyata Performa
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Portfolio & Studi Kasus Klien
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Kami tidak hanya membuat website sekadar jadi, tapi memastikan website
          tersebut mendatangkan hasil nyata bagi bisnis mereka.
        </p>
      </div>

      {/* Grid Item Portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {/* Item Portfolio 1 - E-Commerce Modern */}
        <div className="border border-slate-200 dark:border-slate-900 rounded-3xl bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
          {/* Mockup Gambar Atas (Dibuat pakai CSS Tailwind murni agar instan) */}
          <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 p-6 flex items-center justify-center relative">
            <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md">
              Next.js + Midtrans
            </div>
            <div className="w-full max-w-xs border border-white/20 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl space-y-2 text-white">
              <div className="h-3 w-20 bg-white/30 rounded"></div>
              <div className="h-5 w-32 bg-white/50 rounded"></div>
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="h-12 bg-white/20 rounded-lg"></div>
                <div className="h-12 bg-white/20 rounded-lg"></div>
                <div className="h-12 bg-white/20 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Detail Studi Kasus */}
          <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                AuraFashion — Toko Online Cepat & Aman
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                <strong className="text-slate-700 dark:text-slate-300">
                  Masalah:
                </strong>{" "}
                Website lama berbasis WordPress sangat lambat saat diakses dari
                HP, membuat angka keranjang belanja yang ditinggalkan (*cart
                abandonment*) mencapai 65%.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                <strong className="text-slate-700 dark:text-slate-300">
                  Solusi Kami:
                </strong>{" "}
                Membangun ulang sistem e-commerce menggunakan Next.js SSR dengan
                integrasi payment gateway otomatis. Mengompresi seluruh aset
                gambar produk secara *real-time*.
              </p>
            </div>

            {/* Kotak Metrik Hasil (Kunci Konversi Jasa Anda) */}
            <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-500/5 border border-emerald-100 dark:border-emerald-500/10 flex justify-around items-center text-center">
              <div>
                <div className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400">
                  +180%
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  Kecepatan Load
                </div>
              </div>
              <div className="w-px h-8 bg-emerald-200/50 dark:bg-emerald-500/20"></div>
              <div>
                <div className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400">
                  Hal. 1
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  Google Ranking
                </div>
              </div>
              <div className="w-px h-8 bg-emerald-200/50 dark:bg-emerald-500/20"></div>
              <div>
                <div className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400">
                  +42%
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  Konversi Penjualan
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item Portfolio 2 - Company Profile & Blog B2B */}
        <div className="border border-slate-200 dark:border-slate-900 rounded-3xl bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
          {/* Mockup Gambar Atas */}
          <div className="h-48 bg-gradient-to-br from-blue-600 to-emerald-500 p-6 flex items-center justify-center relative">
            <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md">
              Corporate + CMS Blog
            </div>
            <div className="w-full max-w-xs border border-white/20 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl flex gap-3 text-white">
              <div className="w-1/3 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <BarChart className="w-6 h-6 opacity-60" />
              </div>
              <div className="w-2/3 space-y-2">
                <div className="h-3 w-12 bg-white/30 rounded"></div>
                <div className="h-4 w-full bg-white/50 rounded"></div>
                <div className="h-2 w-5/6 bg-white/20 rounded"></div>
              </div>
            </div>
          </div>

          {/* Detail Studi Kasus */}
          <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                MitraLogistik — Web Perusahaan B2B
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                <strong className="text-slate-700 dark:text-slate-300">
                  Masalah:
                </strong>{" "}
                Perusahaan logistik nasional kesulitan mendapatkan <strong>leads </strong>
                (calon klien korporat) baru secara organik dari mesin pencari
                karena struktur web lamanya tidak terbaca Google.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                <strong className="text-slate-700 dark:text-slate-300">
                  Solusi Kami:
                </strong>{" "}
                Membuatkan web profil perusahaan berbasis Next.js dengan
                arsitektur SEO siloing artikel blog yang rapi untuk menargetkan
                kata kunci logistik spesifik.
              </p>
            </div>

            {/* Kotak Metrik Hasil */}
            <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-500/5 border border-emerald-100 dark:border-emerald-500/10 flex justify-around items-center text-center">
              <div>
                <div className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400">
                  12+
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  Kata Kunci Hal. 1
                </div>
              </div>
              <div className="w-px h-8 bg-emerald-200/50 dark:bg-emerald-500/20"></div>
              <div>
                <div className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400">
                  98%
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  Skor SEO Desktop
                </div>
              </div>
              <div className="w-px h-8 bg-emerald-200/50 dark:bg-emerald-500/20"></div>
              <div>
                <div className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400">
                  3.5x Lipat
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  Kenaikan Leads
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
