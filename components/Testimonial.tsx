"use client";
import { motion } from "framer-motion";

const items = [
  { q: "Pendampingan yang solutif dan cepat.", a: "Direktur PT ABC" },
  { q: "Kontrak kami jadi jauh lebih rapi.", a: "Owner UMKM" },
  { q: "Advokasi yang tegas & efektif.", a: "Klien Litigasi" }
];

export default function Testimonial() {
  return (
    <section className="container-xl mt-16">
      <h2 className="text-center">Apa Kata Klien</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.blockquote
            key={i}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="card p-6"
          >
            <p className="text-slate-700">“{it.q}”</p>
            <footer className="mt-4 text-sm text-slate-500">— {it.a}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
