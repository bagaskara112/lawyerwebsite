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
      </section>
    </>
  );
}
