import { Search, Layers, Smartphone } from "lucide-react";

export default function WhySection() {
  return (
    <section
      id="fitur"
      className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-slate-900"
    >
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Teknologi Modern, Hasil Maksimal
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Website indah tidak ada gunanya jika tidak menghasilkan uang. Ini cara
          kami mengerjakannya:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <Search className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            SEO Semantic HTML
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
            Struktur kode diatur rapi agar robot Google langsung paham isi
            produk Anda, menaikkan ranking secara berkala tanpa iklan.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Desain UX Premium
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
            Tata letak eksklusif, navigasi intuitif, dan peletakan tombol CTA
            yang disesuaikan dengan psikologi keputusan pembeli.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Smartphone className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Anti Pecah di Mobile
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
            Lebih dari 80% pengunjung menggunakan HP. Website buatan kami
            dijamin super responsif, ringan, dan nyaman diakses dari gadget
            apapun.
          </p>
        </div>
      </div>
    </section>
  );
}
