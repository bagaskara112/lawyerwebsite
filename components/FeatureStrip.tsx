"use client";
import { ShieldCheck, Scale, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function FeatureStrip() {
  const features = [
    {
      title: "Integritas & Etika",
      desc: "Kami memegang teguh kerahasiaan klien dan etika profesi advokat dalam setiap langkah hukum.",
      icon: ShieldCheck
    },
    {
      title: "Fokus Keadilan",
      desc: "Pendampingan hukum yang objektif, tegas, dan berani untuk memastikan hak Anda terpenuhi.",
      icon: Scale
    },
    {
      title: "Terverifikasi Resmi",
      desc: "Didukung oleh legalitas kepengacaraan resmi (PERADI) dan izin praktik yang sah.",
      icon: Award
    },
    {
      title: "Pendekatan Personal",
      desc: "Setiap kasus ditangani secara khusus dengan strategi yang disesuaikan dengan kebutuhan Anda.",
      icon: Users
    }
  ];

  return (
    <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container-xl relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-silver-500"></div>
            <span className="text-silver-400 font-semibold tracking-widest uppercase text-xs">Nilai Utama Kami</span>
            <div className="w-8 h-px bg-silver-500"></div>
          </div>
          <h2 className="text-white mb-6 text-4xl md:text-5xl font-serif leading-tight">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-brand-200 text-base md:text-lg leading-relaxed font-light opacity-90">
            Dedikasi kami adalah memberikan layanan hukum bermutu tinggi dengan mengedepankan kepercayaan, strategi presisi, dan hasil terbaik bagi setiap klien.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map(({ title, desc, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="bg-brand-800/30 backdrop-blur-md border border-brand-700/50 p-8 rounded-2xl hover:bg-brand-800/60 hover:border-silver-500/30 transition-all duration-500 group flex flex-col hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-900/80 border border-brand-700/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-silver-500 group-hover:border-silver-400 transition-all duration-500 shadow-inner shadow-white/5">
                <Icon className="w-6 h-6 text-silver-400 group-hover:text-brand-950 transition-colors duration-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-white mb-4 leading-tight group-hover:text-silver-200 transition-colors duration-300">{title}</h3>
              <p className="text-sm text-brand-200 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
