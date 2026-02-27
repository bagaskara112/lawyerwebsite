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
    <section className="py-20 bg-brand-900 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <div className="container-xl relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-silver-400 font-semibold tracking-wider uppercase text-xs md:text-sm mb-3 block">Nilai Utama Kami</span>
          <h2 className="text-white mb-4 text-3xl md:text-4xl">Mengapa Memilih Kami?</h2>
          <p className="text-brand-200 text-sm md:text-base">
            Dedikasi kami adalah memberikan layanan hukum bermutu tinggi dengan mengedepankan kepercayaan dan hasil terbaik bagi setiap klien.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {features.map(({ title, desc, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-800/50 backdrop-blur border border-brand-700 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:bg-brand-800 transition-colors duration-300 group flex flex-col"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-brand-700/50 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:bg-silver-500 group-hover:text-white transition-colors duration-300">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-silver-300 group-hover:text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-xl font-serif text-white mb-1.5 sm:mb-2 md:mb-3 leading-tight">{title}</h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-brand-200 leading-snug sm:leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
