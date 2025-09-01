"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Gavel, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image src="/bg-scale.svg" alt="Pattern" fill className="object-cover" />
      </div>
      <div className="container-xl py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            Advokat & Konsultan Hukum
          </motion.h1>
          <motion.p className="mt-4 max-w-xl" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }}>
            Pendampingan hukum menyeluruh mencakup perkara <b>Perdata, Pidana,</b> hingga <b>Non-Litigasi</b>.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary"><ShieldCheck className="w-4 h-4"/> Konsultasi Gratis</Link>
            <Link href="/services" className="btn-ghost"><Gavel className="w-4 h-4"/> Lihat Layanan</Link>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              ["100%", "Konsultasi Gratis"],
              ["98%", "Kepuasan klien"],
              ["24/7", "Respons cepat"]
            ].map(([v, l]) => (
              <div key={l} className="card p-5 text-center">
                <div className="text-3xl font-semibold text-brand-600">{v}</div>
                <div className="text-slate-600">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="card p-6">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-brand-600"/>
            <h3 className="text-xl font-semibold">Spesialisasi</h3>
          </div>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-slate-700">
            <li>Perdata (Perceraian, Waris, Hak Asuh Anak, dll.)</li>
            <li>Pidana (Pencurian, Penggelapan, Penipuan, dll.)</li>
            <li>Non-Litigasi (Tanah & Sertifikat, Sengketa Tanah, dll.)</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
