"use client";
import Link from "next/link";
import Image from "next/image"; // tambahkan ini
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="container-xl h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src="/logo.png" // path logo kamu
            alt="Logo"
            width={110}
            height={80}
            className="rounded-md"
          />
          <span className="text-xs">Ibnu Fajar Maulana, S.H.</span>

        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {[
            ["Beranda", "/"],
            ["Layanan", "/services"]
          ].map(([label, href]) => (
            <Link key={href as string} href={href as string} className="btn-ghost">
              {label}
            </Link>
          ))}
        </nav>

        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href="/contact"
          className="btn-primary"
        >
          <Phone className="w-4 h-4" /> Konsultasi
        </motion.a>
      </div>
    </header>
  );
}
