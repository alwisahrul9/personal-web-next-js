import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website SEO Frien dly",
  description: "Membangun website modern, cepat, dan teroptimasi SEO.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // attribute="class" wajib ada agar Tailwind mendeteksi mode gelap
    <html lang="id" className="scroll-smooth" suppressHydrationWarning  >
      <body
        className={`${inter.className} bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Anda bisa mengubah default ke "light" jika diinginkan
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
