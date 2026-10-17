"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Scale, Phone, ArrowRight, CheckCircle2, ShieldCheck, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-24 pb-12 md:py-16 overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/40 via-white to-white"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(2, 106, 210, 0.12) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        {/* Ambient Orbs - Light sapphire & soft pearl glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-200/50 rounded-full blur-[120px] animate-orb-1 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-brand-100/60 rounded-full blur-[150px] animate-orb-2 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
      </div>

      <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6">

        {/* Left Content */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-brand-200 text-brand-800 text-xs md:text-sm font-semibold mb-8 shadow-sm"
          >
            <Award className="w-4 h-4 text-brand-600" />
            <span className="tracking-wide">Firma Hukum Terpercaya</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-brand-950 text-5xl sm:text-6xl md:text-7xl lg:text-7xl mb-6 leading-[1.1] font-serif"
          >
            Keadilan Anda <br className="hidden sm:block" />
            <span className="text-brand-600 inline-block mt-2 font-style: italic">Prioritas Kami.</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="text-base md:text-xl text-silver-600 mb-10 max-w-xl font-normal leading-relaxed"
          >
            Pendampingan hukum profesional dan strategis untuk menyelesaikan perkara
            <strong className="text-brand-950 font-semibold"> Perdata, Pidana,</strong> dan
            <strong className="text-brand-950 font-semibold"> Non-Litigasi</strong> Anda dengan tuntas dan berintegritas.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full"
          >
            <a
              href="https://wa.me/6285649124046?text=Halo%20saya%20ingin%20konsultasi%20hukum"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-white bg-brand-600 hover:bg-brand-700 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(2,106,210,0.35)] w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Konsultasi Gratis</span>
            </a>

            <Link href="/services" className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-brand-900 bg-white border border-brand-200 hover:bg-brand-50 hover:border-brand-300 shadow-sm transition-all duration-300 w-full sm:w-auto">
              <span>Pelajari Layanan</span> 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-brand-600" />
            </Link>
          </motion.div>

          {/* Mobile Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-8 flex items-center gap-4 text-xs text-silver-600 font-medium sm:hidden"
          >
            <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-600" /> Resmi PERADI</div>
            <div className="w-1 h-1 rounded-full bg-brand-200"></div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> Rahasia 100%</div>
          </motion.div>
        </div>

        {/* Right Content - Glassmorphic floating cards */}
        <div className="hidden lg:flex relative h-full min-h-[600px] w-full items-center justify-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="absolute top-20 right-10 w-[22rem] bg-white/95 backdrop-blur-xl border border-brand-100 p-8 rounded-2xl shadow-elevated"
          >
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-brand-100">
              <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-brand-950 font-serif text-lg font-bold">Area Spesialisasi</h3>
                <p className="text-silver-500 text-xs font-medium">Penanganan Perkara Utama</p>
              </div>
            </div>
            <ul className="space-y-4">
              {['Hukum Keluarga & Waris', 'Sengketa Tanah & Properti', 'Kasus Pidana Umum', 'Penyusunan Kontrak Bisnis'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-900 group">
                  <div className="w-2 h-2 rounded-full bg-brand-600 group-hover:scale-150 transition-all duration-300 shrink-0" />
                  <span className="text-sm font-medium tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stats Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="absolute bottom-24 left-0 bg-white/95 backdrop-blur-xl border border-brand-100 p-6 rounded-2xl shadow-elevated flex gap-8 items-center"
          >
            <div>
              <div className="text-3xl font-bold text-brand-950 font-serif">100%</div>
              <div className="text-[10px] text-brand-600 font-bold uppercase tracking-widest mt-1">Kerahasiaan</div>
            </div>
            <div className="h-12 w-px bg-brand-100"></div>
            <div>
              <div className="text-3xl font-bold text-brand-950 font-serif">24/7</div>
              <div className="text-[10px] text-brand-600 font-bold uppercase tracking-widest mt-1">Respons Cepat</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
