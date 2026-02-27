"use client";
import { CheckCircle, Award, BookOpen, Scale } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutProfile() {
    const credentials = [
        {
            icon: Award,
            title: "Lisensi Resmi PERADI",
            desc: "Terdaftar dan memiliki izin praktik resmi di seluruh wilayah Republik Indonesia."
        },
        {
            icon: BookOpen,
            title: "Pendidikan Hukum Unggul",
            desc: "Lulusan terbaik dengan pemahaman mendalam mengenai hukum perdata dan pidana."
        },
        {
            icon: Scale,
            title: "Penyelesaian Sengketa",
            desc: "Berpengalaman tinggi dalam mediasi, negosiasi, maupun litigasi di pengadilan."
        }
    ];

    return (
        <section id="profile" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-silver-50 -skew-x-12 transform origin-top translate-x-1/2 opacity-50 z-0"></div>

            <div className="container-xl relative z-10 px-4 sm:px-6">

                {/* Centered Main Narrative */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
                >
                    <span className="text-brand-600 font-semibold tracking-wider uppercase text-xs md:text-sm mb-4 block">Profil Advokat</span>
                    <h2 className="text-brand-950 mb-6 md:mb-8 leading-tight text-3xl md:text-4xl lg:text-5xl">
                        "Keadilan bukan sekadar kata, melainkan hak yang harus diperjuangkan dengan integritas dan kebenaran."
                    </h2>

                    <div className="w-20 h-1 bg-brand-600 mx-auto mb-8 rounded-full"></div>

                    <p className="text-sm md:text-lg text-silver-600 leading-relaxed max-w-2xl mx-auto">
                        Sebagai advokat profesional, dedikasi saya adalah memberikan penyelesaian hukum yang <strong className="text-brand-700 font-semibold">objektif, transparan, dan solutif</strong>. Menjunjung tinggi etika profesi untuk melindungi hak serta masa depan Anda secara maksimal.
                    </p>

                    <div className="mt-10">
                        <h3 className="text-xl md:text-2xl font-serif text-brand-900">Ibnu Fajar Maulana, S.H.</h3>
                        <p className="text-brand-600 font-medium mt-1 text-sm md:text-base">Founder & Managing Partner</p>
                    </div>
                </motion.div>

                {/* Credentials Grid */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {credentials.map((cred, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-silver-50 p-6 md:p-8 rounded-2xl border border-silver-100 hover:border-brand-200 transition-colors duration-300"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-5 md:mb-6 text-brand-600">
                                <cred.icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-base md:text-lg font-bold text-brand-950 mb-2 md:mb-3">{cred.title}</h4>
                            <p className="text-silver-600 text-sm leading-relaxed">{cred.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
