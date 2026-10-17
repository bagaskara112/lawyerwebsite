"use client";
import { Scale, ShieldAlert, Landmark, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceCard() {
  const services = [
    {
      icon: Scale,
      title: "Hukum Perdata",
      desc: "Menangani sengketa antar individu atau badan hukum dengan mediasi maupun litigasi di pengadilan.",
      list: ["Perceraian & Harta Gono Gini", "Hak Asuh Anak", "Waris & Hibah", "Isbath Nikah"],
    },
    {
      icon: ShieldAlert,
      title: "Hukum Pidana",
      desc: "Pendampingan hukum komprehensif bagi tersangka maupun korban dari proses penyidikan hingga persidangan.",
      list: ["Pencurian & Penggelapan", "Penipuan", "Penganiayaan", "Kasus Narkoba & Perjudian"],
    },
    {
      icon: Landmark,
      title: "Non-Litigasi",
      desc: "Penyelesaian masalah hukum di luar pengadilan secara damai, strategis, dan efisien.",
      list: ["Jual Beli & Sertifikat Tanah", "Sengketa Tanah & Properti", "Drafting Kontrak Bisnis"],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-brand-50">
      <div className="container-xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-600"></div>
            <span className="text-brand-600 font-semibold tracking-widest uppercase text-xs">Area Praktik Kami</span>
            <div className="w-8 h-px bg-brand-600"></div>
          </div>
          <h2 className="text-brand-950 mb-6 text-4xl md:text-5xl font-serif leading-tight">
            Layanan Hukum Profesional
          </h2>
          <p className="text-silver-600 text-base md:text-lg leading-relaxed">
            Kami memberikan solusi hukum yang tepat sasaran, strategis, dan komprehensif untuk melindungi hak dan kepentingan Anda secara optimal.
          </p>
        </motion.div>

        {/* Responsive Grid: Vertical Stack on Mobile, Multi-column on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map(({ icon: Icon, title, desc, list }, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              key={title}
              className="bg-white border border-brand-100 p-6 sm:p-8 md:p-10 rounded-2xl group flex flex-col h-full relative overflow-hidden hover:border-brand-300 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              {/* Decorative accent top right */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-125 group-hover:bg-brand-100/50"></div>

              <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-800 flex items-center justify-center mb-8 border border-brand-200 group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white transition-all duration-500 group-hover:shadow-lg">
                <Icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-serif text-brand-950 mb-4 group-hover:text-brand-600 transition-colors duration-300">{title}</h3>
              <p className="text-silver-600 mb-8 flex-1 text-sm md:text-base leading-relaxed">{desc}</p>

              <ul className="space-y-4 mb-10">
                {list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-brand-900">
                    <span className="w-2 h-2 rounded-full bg-brand-600 mt-1.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/6285649124046?text=Halo%20Bapak%20Ibnu,%20saya%20ingin%20konsultasi%20mengenai%20${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-between w-full p-4 rounded-xl bg-brand-50 text-brand-900 font-semibold font-sans group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 text-sm md:text-base"
              >
                <span>Konsultasi Kasus Ini</span> 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-brand-600 group-hover:text-white" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
