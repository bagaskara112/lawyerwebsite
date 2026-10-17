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
    <section className="py-24 bg-brand-50/40 border-y border-brand-100 text-brand-950 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(2, 106, 210, 0.08) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container-xl relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-600"></div>
            <span className="text-brand-600 font-semibold tracking-widest uppercase text-xs">Nilai Utama Kami</span>
            <div className="w-8 h-px bg-brand-600"></div>
          </div>
          <h2 className="text-brand-950 mb-6 text-4xl md:text-5xl font-serif leading-tight">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-silver-600 text-base md:text-lg leading-relaxed font-normal">
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
              className="bg-white border border-brand-100 p-8 rounded-2xl hover:border-brand-300 hover:shadow-elevated transition-all duration-500 group flex flex-col hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-600 group-hover:border-brand-600 transition-all duration-500 shadow-sm">
                <Icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-brand-950 mb-4 leading-tight group-hover:text-brand-600 transition-colors duration-300">{title}</h3>
              <p className="text-sm text-silver-600 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
