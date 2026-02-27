"use client";

import { motion } from "framer-motion";
import { MessageSquareText, Search, ShieldCheck, CheckCircle } from "lucide-react";

export default function Workflow() {
    const steps = [
        {
            id: "01",
            icon: MessageSquareText,
            title: "Konsultasi Awal",
            desc: "Ceritakan masalah hukum Anda secara rinci. Kami mendengarkan tanpa menghakimi dan menjamin 100% kerahasiaan informasi Anda."
        },
        {
            id: "02",
            icon: Search,
            title: "Analisis Kasus",
            desc: "Tim kami akan membedah konstruksi hukum dari masalah Anda, memetakan risiko, dan menemukan celah strategi terbaik."
        },
        {
            id: "03",
            icon: ShieldCheck,
            title: "Strategi & Tindakan Hukum",
            desc: "Implementasi taktik hukum yang presisi—baik melalui negosiasi damai (non-litigasi) maupun pembelaan agresi di pengadilan (litigasi)."
        },
        {
            id: "04",
            icon: CheckCircle,
            title: "Penyelesaian Tuntas",
            desc: "Fokus utama kami adalah mencapai resolusi yang paling menguntungkan dan memulihkan hak-hak Anda secepat mungkin."
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden relative">
            <div className="container-xl px-4 sm:px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl sm:text-center sm:mx-auto mb-12 md:mb-16"
                >
                    <span className="text-silver-500 font-semibold tracking-wider uppercase text-xs md:text-sm mb-3 block">Alur Kerja Kami</span>
                    <h2 className="text-brand-900 mb-4 text-3xl md:text-4xl">Cara Kami Melindungi Anda</h2>
                    <p className="text-brand-600 text-sm md:text-base">
                        Proses transparan dan terstruktur agar Anda selalu tahu sejauh mana perkembangan kasus Anda ditangani.
                    </p>
                </motion.div>

                {/* Vertical Timeline */}
                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[27px] sm:left-[35px] top-6 bottom-6 w-px bg-silver-200"></div>

                    <div className="space-y-8 sm:space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative pl-16 sm:pl-24"
                            >
                                {/* Number/Icon Node */}
                                <div className="absolute left-0 top-0 w-14 h-14 sm:w-[72px] sm:h-[72px] bg-white border-2 border-brand-100 rounded-2xl flex items-center justify-center flex-col shadow-sm z-10 group-hover:border-brand-500 transition-colors">
                                    <span className="text-[10px] sm:text-xs font-bold text-silver-400 mb-0.5">STEP</span>
                                    <span className="text-brand-900 font-serif font-bold text-lg sm:text-xl leading-none">{step.id}</span>
                                </div>

                                {/* Content Card */}
                                <div className="bg-brand-50/50 p-5 sm:p-6 rounded-2xl border border-transparent hover:border-brand-100 hover:bg-white hover:shadow-soft transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-2 sm:mb-3">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-brand-100/50 text-brand-600 flex items-center justify-center shrink-0">
                                            <step.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-serif text-brand-900">{step.title}</h3>
                                    </div>
                                    <p className="text-xs sm:text-sm text-brand-600 leading-relaxed pl-11 sm:pl-0 sm:mt-4">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
