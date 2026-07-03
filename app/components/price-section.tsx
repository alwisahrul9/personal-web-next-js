import { Check } from "lucide-react";

export default function PriceSection() {
  return (
    <section
      id="harga"
      className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-slate-900 text-center"
    >
      <div className="max-w-2xl mx-auto mb-12 space-y-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Investasi Transparan
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Pilih paket yang sesuai skala bisnis Anda saat ini.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
        {/* Card Paket 1 */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              Landing Page Pro
            </h4>
            <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
              Rp 1.500.000
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" /> 1 Halaman
                Berkecepatan Tinggi
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" /> Integrasi Tombol
                WhatsApp
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" /> Free Domain &
                Hosting (.com)
              </li>
            </ul>
          </div>
          <a
            href="https://wa.me/628xxxxxxxx"
            className="block text-center w-full py-2.5 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-xl font-bold text-xs hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors"
          >
            Pilih Paket
          </a>
        </div>

        {/* Card Paket 2 */}
        <div className="p-6 sm:p-8 rounded-2xl border-2 border-indigo-500 bg-white dark:bg-slate-900 space-y-6 flex flex-col justify-between relative shadow-lg">
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              Custom Business Web
            </h4>
            <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
              Rp 3.500.000
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" /> Hingga 5 Halaman
                Utama
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" /> Sistem Management
                Konten / Blog
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" /> Integrasi Google
                Search Console
              </li>
            </ul>
          </div>
          <a
            href="https://wa.me/628xxxxxxxx"
            className="block text-center w-full py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-xs hover:bg-indigo-500 transition-colors"
          >
            Pilih Paket
          </a>
        </div>
      </div>
    </section>
  );
}
