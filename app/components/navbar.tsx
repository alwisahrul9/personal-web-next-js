"use client"; // Wajib karena menggunakan useState

import { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

export default function Navbar() {
  // State untuk mengontrol buka/tutup menu mobile
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menus = [
    { name: "Fitur", href: "#fitur" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Harga", href: "#harga" },
  ];

  return (
    <>
      {/* HEADER & NAVBAR */}
      <header className="border-b border-slate-200 dark:border-slate-800/80 backdrop-blur-md sticky top-0 z-50 bg-white/70 dark:bg-slate-950/70 transition-colors">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 dark:text-white"
          >
            <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>
              KankAlwi
              <span className="text-indigo-600 dark:text-indigo-400">.</span>
            </span>
          </Link>

          {/* MENU NAVIGASI (DESKTOP) - Hanya tampil di layar md (medium) ke atas */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            {menus.map((menu, index) => (
              <Link
                key={index}
                href={menu.href}
                className="hover:text-slate-900 dark:hover:text-slate-100 transition"
              >
                {menu.name}
              </Link>
            ))}
          </nav>

          {/* KANAN: TOGGLE, CTA (DESKTOP), & HAMBURGER BUTTON (MOBILE) */}
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />

            {/* Tombol Konsultasi Desktop */}
            <a
              href="https://wa.me/628xxxxxxxx"
              target="_blank"
              className="hidden sm:inline-flex bg-indigo-600 hover:bg-indigo-500 text-white transition px-4 py-2 rounded-xl text-xs font-semibold shadow-lg shadow-indigo-600/10"
            >
              Konsultasi
            </a>

            {/* Tombol Hamburger - Hanya tampil di layar mobile/tablet (di bawah md) */}
            <button
              onClick={toggleMenu}
              className="p-2 md:hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* MENU NAVIGASI (MOBILE DROPDOWN) */}
        {/* Tampil dengan animasi geser ke bawah saat isOpen bernilai true */}
        <div
          className={`md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-60 opacity-100 py-4"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col px-4 gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
            {menus.map((menu, index) => (
              <Link
                key={index}
                href={menu.href}
                onClick={() => setIsOpen(false)} // Tutup menu setelah diklik
                className="hover:text-slate-900 dark:hover:text-slate-100 py-1 transition"
              >
                {menu.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
