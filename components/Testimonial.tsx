"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonial() {
  const items = [
    {
      q: "Pendampingan yang sangat solutif. Masalah hukum perusahaan kami diselesaikan dengan cepat dan profesional tanpa harus bertele-tele di pengadilan.",
      client: "Direktur PT XyZ",
      type: "Klien Korporat"
    },
    {
      q: "Kontrak bisnis kami jadi jauh lebih aman dan terstruktur. Sangat detail dalam melihat celah hukum yang mungkin merugikan kami di masa depan.",
      client: "Owner UMKM Nasional",
      type: "Klien Non-Litigasi"
    },
    {
      q: "Advokasi yang tegas, berani, dan efektif. Bapak Ibnu selalu transparan mengenai perkembangan kasus dan selalu siap 24 jam ketika kami butuh arahan.",
      client: "Bapak A.R.",
      type: "Klien Litigasi Pidana"
    }
  ];

  return (
    <section className="py-20 bg-brand-50/50">
      <div className="container-xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-silver-500 font-semibold tracking-wider uppercase text-xs md:text-sm mb-3 block">Testimoni Klien</span>
          <h2 className="text-brand-900 mb-4 text-3xl md:text-4xl">Kepercayaan Mereka, Kebanggaan Kami</h2>
          <p className="text-brand-600 text-sm md:text-base">
            Bukti nyata dari komitmen kami dalam memberikan layanan hukum terbaik untuk setiap klien yang kami tangani.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-soft border border-brand-100 relative group hover:-translate-y-1 transition-transform duration-300"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-brand-50 transition-colors duration-300 group-hover:text-silver-100" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-brand-400 text-brand-400" />
                ))}
              </div>

              <p className="text-brand-700 italic mb-8 relative z-10 text-sm md:text-base">
                "{it.q}"
              </p>

              <div className="mt-auto border-t border-brand-50 pt-4">
                <div className="font-serif font-bold text-brand-900">{it.client}</div>
                <div className="text-xs text-brand-500">{it.type}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
