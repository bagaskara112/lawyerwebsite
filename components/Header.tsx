"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Profil", href: "#profile" },
    { label: "Layanan", href: "/services" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-100 shadow-sm py-3 transition-all duration-300">
      <div className="container-xl flex items-center justify-between">

        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-lg shadow-sm border border-brand-100 group-hover:shadow-md transition-shadow">
            <Image
              src="/logo.png"
              alt="Logo Ibnu Fajar Maulana"
              fill
              sizes="(max-width: 768px) 48px, 56px"
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg md:text-xl leading-tight text-brand-900">
              Ibnu Fajar Maulana
            </span>
            <span className="text-xs md:text-sm font-medium font-sans text-brand-600">
              Advokat & Konsultan Hukum
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-medium text-sm md:text-base text-brand-700 hover:bg-brand-50 hover:text-brand-900 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/6285649124046?text=Halo%20saya%20ingin%20konsultasi%20hukum"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Phone className="w-4 h-4" /> Konsultasi Sekarang
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-brand-900 transition-colors duration-300 hover:bg-brand-50 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-brand-100 px-4 pt-2 pb-6 absolute top-full left-0 right-0 shadow-lg"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-brand-800 font-medium hover:bg-brand-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/6285649124046?text=Halo%20saya%20ingin%20konsultasi%20hukum"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 btn-primary w-full justify-center"
              >
                <Phone className="w-4 h-4" /> Konsultasi Sekarang
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
