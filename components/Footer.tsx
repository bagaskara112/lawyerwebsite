import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-100">
      <div className="container-xl py-10 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <h3 className="text-xl font-semibold">Kantor Hukum</h3>
          <p className="mt-2 text-slate-600">Jl. Sawunggaling No. 7A, Sentul, Kec. Kepanjenkidul, Kota Blitar</p>
          <p className="text-slate-600">Senin–Jumat 09.00–17.00 WIB</p>
          <div className="mt-6">
            <iframe
              className="w-full h-56 rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416.6259212356014!2d112.1821742526975!3d-8.077911799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ec508dd0c20b%3A0xdeb285e226ed253!2sJl.%20Sawunggaling%20No.7A%2C%20Sentul%2C%20Kec.%20Kepanjenkidul%2C%20Kota%20Blitar%2C%20Jawa%20Timur%2066113!5e1!3m2!1sid!2sid!4v1755433007395!5m2!1sid!2sid"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Kontak</h3>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 0856-4912-4046</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> ibnufajarmaulana19@gmail.com</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Legal</h3>
          <p className="mt-2 text-slate-600">© {new Date().getFullYear()}. Seluruh hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
