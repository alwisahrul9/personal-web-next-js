import { ArrowRight, Sparkles } from "lucide-react";
import VisualMockup from "./visual-mockup";

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-16 pb-24">
      {/* Menggunakan flex/grid yang terkontrol, memastikan alignment tidak rusak ke tengah semua */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
        {/* Sisi Kiri: Konten Teks */}
        <div className="lg:col-span-7 space-y-6 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> Jasa Pembuatan
            Website Next.js Premium
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Website Lambat <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Bikin Klien Kabur.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            Kami tidak menggunakan WordPress berat. Kami mengoding website Anda
            dari nol menggunakan React & Next.js untuk menghasilkan kecepatan
            instan, desain eksklusif, dan otomatis disukai Google.
          </p>

          {/* Tombol CTA dibungkus terpisah agar tidak memanjang penuh */}
          <div className="w-full sm:w-auto pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <a
              href="https://wa.me/628xxxxxxxx"
              className="group inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 text-white transition-all px-6 py-3.5 rounded-xl text-sm font-bold shadow-xl shadow-indigo-600/10"
            >
              Konsultasi Project Gratis{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#harga"
              className="inline-flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Lihat Paket Harga
            </a>
          </div>
        </div>

        {/* Sisi Kanan: Visual Mockup Dashboard Cepat */}
        <VisualMockup />
      </div>
    </section>
  );
}
