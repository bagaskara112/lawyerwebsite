"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: "Berapa biaya untuk konsultasi awal?",
            answer: "Biaya konsultasi awal bervariasi tergantung kompleksitas kasus. Namun, kami menawarkan sesi evaluasi awal secara gratis via WhatsApp untuk memahami letak permasalahan Anda sebelum membicarakan komitmen biaya."
        },
        {
            question: "Apakah data dan masalah saya dijamin kerahasiaannya?",
            answer: "Mutlak. Sesuai dengan Kode Etik Advokat dan Undang-Undang, kami terikat pada kewajiban hukum untuk menjaga kerahasiaan 100% informasi apa pun yang Anda sampaikan kepada kami, bahkan jika Anda pada akhirnya tidak jadi menggunakan jasa kami."
        },
        {
            question: "Berapa lama proses hukum biasanya berjalan?",
            answer: "Waktu penyelesaian sangat bergantung pada jenis jalur hukum yang diambil (Litigasi vs Non-Litigasi) dan tingkat kerja sama pihak lawan. Non-Litigasi (mediasi/akomodasi damai) bisa selesai dalam hitungan minggu, sementara jalur Pengadilan (Litigasi) bisa memakan waktu berbulan-bulan. Fokus kami adalah jalur tercepat dan paling efisien untuk Anda."
        },
        {
            question: "Apakah bisa menangani kasus di luar kota?",
            answer: "Tentu. Lisensi PERADI mengizinkan kami berpraktik dan memberikan pendampingan hukum di seluruh wilayah hukum Republik Indonesia. Kami dapat mengatur jadwal untuk mendatangi lokasi Anda sesuai kebutuhan kasus."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 md:py-32 bg-silver-50 relative overflow-hidden">
            <div className="container-xl px-4 sm:px-6 relative z-10 w-full max-w-3xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 text-brand-600">
                        <HelpCircle className="w-6 h-6" />
                    </div>
                    <h2 className="text-brand-900 mb-4 text-3xl md:text-4xl">Pertanyaan Umum</h2>
                    <p className="text-brand-600 text-sm md:text-base">
                        Jawaban untuk beberapa keraguan yang mungkin Anda miliki sebelum memulai konsultasi resmi.
                    </p>
                </motion.div>

                {/* Accordion Container */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`bg-white rounded-2xl border transition-colors duration-300 overflow-hidden ${isOpen ? "border-brand-300 shadow-soft" : "border-silver-200 hover:border-brand-200"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-2xl"
                                    aria-expanded={isOpen}
                                >
                                    <span className={`font-serif text-base sm:text-lg transition-colors ${isOpen ? "text-brand-700 font-bold" : "text-brand-900 font-medium"}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-brand-600 text-white" : "text-brand-600"}`}>
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-silver-600 leading-relaxed border-t border-silver-100 pt-4 mt-2">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
