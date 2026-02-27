"use client";
import { Scale, ShieldAlert, Landmark, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceCard() {
  const services = [
    {
      icon: Scale,
      title: "Hukum Perdata",
      desc: "Menangani sengketa antar individu atau badan hukum.",
      list: ["Perceraian & Harta Gono Gini", "Hak Asuh Anak", "Waris & Hibah", "Isbath Nikah"],
    },
    {
      icon: ShieldAlert,
      title: "Hukum Pidana",
      desc: "Pendampingan hukum bagi tersangka maupun korban tindak pidana.",
      list: ["Pencurian & Penggelapan", "Penipuan", "Penganiayaan", "Kasus Narkoba & Perjudian"],
    },
    {
      icon: Landmark,
      title: "Non-Litigasi",
      desc: "Penyelesaian masalah hukum di luar pengadilan secara damai dan strategis.",
      list: ["Jual Beli & Sertifikat Tanah", "Sengketa Tanah & Properti", "Penyusunan Kontrak Berikat", "Negosiasi Bisnis"],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-brand-50">
      <div className="container-xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-silver-500 font-semibold tracking-wider uppercase text-xs md:text-sm mb-3 block">Area Praktik Kami</span>
          <h2 className="text-brand-900 mb-4 text-3xl md:text-4xl">Layanan Hukum Profesional</h2>
          <p className="text-brand-600 text-sm md:text-base">
            Kami memberikan solusi hukum yang tepat sasaran, strategis, dan komprehensif untuk melindungi hak dan kepentingan Anda.
          </p>
        </motion.div>

        {/* Mobile Horizontal Scroll Carousel & Desktop Grid */}
        <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory pt-2 pb-8 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 hide-scrollbar">
          {services.map(({ icon: Icon, title, desc, list }, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={title}
              className="card p-6 md:p-8 group flex flex-col h-full bg-white relative overflow-hidden shrink-0 w-[85vw] sm:w-auto sm:shrink snap-center sm:snap-align-none shadow-md sm:shadow-soft"
            >
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-silver-50/50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>

              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 md:mb-6 border border-brand-100 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                <Icon className="w-6 h-6 md:w-7 md:h-7" />
              </div>

              <h3 className="text-xl md:text-2xl font-serif text-brand-900 mb-2 md:mb-3">{title}</h3>
              <p className="text-brand-600 mb-6 flex-1 text-sm md:text-base">{desc}</p>

              <ul className="space-y-3 mb-8">
                {list.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-brand-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-silver-400 mt-1.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/6285649124046?text=Halo%20Bapak%20Ibnu,%20saya%20ingin%20konsultasi%20mengenai%20${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-brand-700 font-medium font-sans hover:text-brand-600 transition-colors w-fit text-sm md:text-base pt-4"
              >
                Konsultasi Kasus Ini <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
