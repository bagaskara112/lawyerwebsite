import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-200 mt-20">

      {/* Pre-Footer CTA */}
      <div className="border-b border-brand-800">
        <div className="container-xl px-4 sm:px-6 py-12 md:py-16 text-center">
          <h2 className="text-white mb-4 md:mb-6 text-3xl md:text-4xl">Butuh Bantuan Hukum Segera?</h2>
          <p className="max-w-xl mx-auto mb-6 md:mb-8 text-brand-300 text-sm md:text-base">
            Jangan tunda masalah hukum Anda. Kami siap mendengarkan, menganalisis, dan memberikan solusi terbaik untuk melindungi hak Anda.
          </p>
          <a
            href="https://wa.me/6285649124046?text=Halo%20saya%20ingin%20konsultasi%20darurat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" /> Hubungi Kami Sekarang <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-xl px-4 sm:px-6 py-12 md:py-16 grid md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12">

        {/* Brand Info */}
        <div className="lg:col-span-4">
          <Link href="/" className="inline-block mb-6 relative w-16 h-16 rounded-lg overflow-hidden bg-white/5 p-1 border border-brand-800">
            <Image src="/logo.png" alt="Logo" fill sizes="64px" className="object-contain" />
          </Link>
          <h3 className="text-xl font-serif text-white mb-2">Ibnu Fajar Maulana, S.H.</h3>
          <p className="text-brand-300 font-medium text-sm mb-6">Advokat & Konsultan Hukum</p>
          <p className="text-sm text-silver-400 leading-relaxed pr-6">
            Memberikan pendampingan hukum yang profesional, berintegritas, dan solutif demi tegaknya keadilan klien.
          </p>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-4">
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Informasi Kontak</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
              <span className="text-sm">
                Jl. Sawunggaling No. 7A, Sentul, <br />
                Kec. Kepanjenkidul, Kota Blitar <br />
                <span className="text-brand-500 block mt-1">Senin–Jumat | 09.00–17.00 WIB</span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-400 shrink-0" />
              <span className="text-sm">0856-4912-4046</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-400 shrink-0" />
              <span className="text-sm">ibnufajarmaulana19@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Location CTA */}
        <div className="lg:col-span-4 lg:flex lg:flex-col lg:items-end">
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm lg:text-right hidden lg:block">Kunjungan Kantor</h4>
          <div className="bg-brand-900/50 backdrop-blur-sm border border-brand-800 p-6 rounded-2xl w-full lg:max-w-sm text-left">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-brand-400" />
              <h5 className="text-white font-medium">Konsultasi Tatap Muka</h5>
            </div>
            <p className="text-xs sm:text-sm text-silver-400 mb-6 leading-relaxed">
              Untuk pelayanan terbaik, silakan buat janji temu konsultasi terlebih dahulu melalui WhatsApp.
            </p>
            <a
              href="https://maps.google.com/?q=-8.0779118,112.1821743"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-sm bg-brand-800 hover:bg-brand-700 text-white transition-colors"
            >
              <MapPin className="w-4 h-4" /> Buka Google Maps
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-brand-900 bg-brand-950/50">
        <div className="container-xl px-4 sm:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-500 text-center md:text-left">
          <p>© {new Date().getFullYear()} Ibnu Fajar Maulana, S.H. Seluruh hak cipta dilindungi.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-brand-300 transition-colors">Kebijakan Privasi</Link>
            <Link href="/" className="hover:text-brand-300 transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
