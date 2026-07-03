import { Zap } from "lucide-react";

export default function VisualMockup() {
  return (
    <div className="lg:col-span-5 relative w-full">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-10 dark:opacity-30 pointer-events-none"></div>

      {/* Frame Box Browser */}
      <div className="relative border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-xl overflow-hidden text-left">
        <div className="bg-slate-100 dark:bg-slate-850 px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
          <div className="w-full bg-white dark:bg-slate-950 max-w-[180px] rounded mx-auto text-[10px] text-center text-slate-400 py-0.5 border border-slate-100 dark:border-slate-800/60">
            http://localhost:3000-cepat.com
          </div>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="h-3 w-16 bg-slate-200 dark:bg-slate-800 rounded"></div>
            <div className="h-5 w-20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded flex items-center justify-center gap-1">
              <Zap className="w-3 h-3 fill-current" /> 100% Speed
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-4 w-3/4 bg-slate-300 dark:bg-slate-700 rounded"></div>
            <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
            <div className="h-2.5 w-5/6 bg-slate-200 dark:bg-slate-800 rounded"></div>
          </div>

          {/* Mini Chart internal mockup */}
          <div className="p-3 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl space-y-1 bg-slate-50 dark:bg-slate-950">
            <div className="flex justify-between text-[10px] text-slate-400 font-medium">
              <span>Omzet Organik (SEO)</span>
              <span className="text-emerald-500 font-bold">+240%</span>
            </div>
            <div className="h-12 w-full flex items-end gap-1.5 pt-2">
              <div className="h-1/3 w-full bg-indigo-500/30 rounded-t"></div>
              <div className="h-1/2 w-full bg-indigo-500/50 rounded-t"></div>
              <div className="h-3/4 w-full bg-indigo-500/70 rounded-t"></div>
              <div className="h-full w-full bg-indigo-600 rounded-t"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
