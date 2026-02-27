"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Scale, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-24 pb-12 md:py-16 overflow-hidden bg-brand-950">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/90 to-brand-900/70"></div>
      </div>

      <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6">

        {/* Left Content */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-900/50 border border-brand-800 text-brand-200 text-xs md:text-sm font-medium mb-6 md:mb-8"
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Firma Hukum Terpercaya</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-[1.15]"
          >
            Keadilan Anda <br className="hidden sm:block" />
            <span className="text-brand-300 inline-block mt-1 sm:mt-2">Prioritas Kami.</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-base sm:text-lg md:text-xl text-brand-200 mb-8 md:mb-10 max-w-xl font-light leading-relaxed"
          >
            Pendampingan hukum profesional dan strategis untuk menyelesaikan perkara
            <strong className="text-white font-medium"> Perdata, Pidana,</strong> dan
            <strong className="text-white font-medium"> Non-Litigasi</strong> Anda dengan tuntas.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:items-center w-full"
          >
            <a
              href="https://wa.me/6285649124046?text=Halo%20saya%20ingin%20konsultasi%20hukum"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto text-base justify-center py-4 sm:py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white border-transparent"
            >
              <Phone className="w-5 h-5" />
              Konsultasi Gratis
            </a>

            <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 sm:py-3.5 font-medium text-base text-white border border-brand-700 hover:bg-brand-800 transition-colors w-full sm:w-auto">
              Pelajari Layanan <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Mobile Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-8 flex items-center gap-4 text-xs text-brand-400 font-medium sm:hidden"
          >
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-500" /> Resmi PERADI</div>
            <div className="w-1 h-1 rounded-full bg-brand-800"></div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-500" /> Rahasia 100%</div>
          </motion.div>
        </div>

        {/* Right Content - floating cards/stats */}
        <div className="hidden lg:block relative h-full min-h-[500px]">
          {/* Main aesthetic image or abstract shape could go here. For now, elegant floating cards. */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-10 right-0 w-80 bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl"
          >
            <h3 className="text-silver-300 font-sans text-sm font-semibold tracking-wider uppercase mb-4">Area Spesialisasi</h3>
            <ul className="space-y-4">
              {['Hukum Keluarga & Waris', 'Sengketa Tanah & Properti', 'Kasus Pidana Umum', 'Penyusunan Kontrak Bisnis'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-50">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stats Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-10 left-0 md:left-10 bg-white p-6 rounded-2xl shadow-elevated flex gap-6 md:gap-8 items-center"
          >
            <div>
              <div className="text-2xl md:text-3xl font-bold text-brand-900 font-serif">100%</div>
              <div className="text-[10px] md:text-xs text-brand-600 font-medium uppercase tracking-wider mt-1">Kerahasiaan Klien</div>
            </div>
            <div className="h-10 w-px bg-brand-100"></div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-brand-900 font-serif">24/7</div>
              <div className="text-[10px] md:text-xs text-brand-600 font-medium uppercase tracking-wider mt-1">Respons Cepat</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
