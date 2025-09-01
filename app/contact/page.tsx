import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button"; // kalau kamu sudah pakai shadcn/ui
import { MessageCircle } from "lucide-react"; // ikon WhatsApp

export const metadata = { title: "Kontak – Ibnu Fajar Maulana S.H" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Kontak"
        subtitle="Sampaikan kebutuhan Anda langsung via WhatsApp atau kunjungi kantor kami."
      />

      <section className="container-xl mt-10 grid md:grid-cols-2 gap-8">
        {/* WhatsApp Contact */}
        <div className="card p-6 flex flex-col items-start justify-center">
          <h3 className="text-xl font-semibold">Hubungi Kami via WhatsApp</h3>
          <p className="mt-2 text-slate-700">
            Klik tombol di bawah untuk langsung terhubung dengan kami.
          </p>
          <a
            href="https://wa.me/6285649124046?text=Halo%20saya%20ingin%20konsultasi%20hukum"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
          >
            <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md">
              <MessageCircle className="h-5 w-5" />
              Chat via WhatsApp
            </Button>
          </a>
        </div>

        {/* Info Kantor + Peta */}
        <div className="card p-6">
          <h3 className="text-xl font-semibold">Kantor</h3>
          <p className="mt-2 text-slate-700">Jl. Sawunggaling No. 7A</p>
          <p className="text-slate-700">Email: email@domain.com</p>
          <p className="text-slate-700">Telepon: 0856-4912-4046</p>
          <div className="mt-6">
            <iframe
              className="w-full h-56 rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416.6259212356014!2d112.1821742526975!3d-8.077911799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ec508dd0c20b%3A0xdeb285e226ed253!2sJl.%20Sawunggaling%20No.7A%2C%20Sentul%2C%20Kec.%20Kepanjenkidul%2C%20Kota%20Blitar%2C%20Jawa%20Timur%2066113!5e1!3m2!1sid!2sid!4v1755433007395!5m2!1sid!2sid"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
