import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-100">
      <div className="container-xl py-10 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <h3 className="text-xl font-semibold">Kantor Hukum</h3>
          <p className="mt-2 text-slate-600">Jl. Sawunggaling No. 7A</p>
          <p className="text-slate-600">Senin–Jumat 09.00–17.00 WIB</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Kontak</h3>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> 0856-4912-4046</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> email@domain.com</li>
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
