import { Shield, Scale, CheckCircle2 } from "lucide-react";
export default function FeatureStrip() {
  return (
    <section className="container-xl grid md:grid-cols-3 gap-4 -mt-10 relative z-10">
      {[
        ["Integritas", "Kami menjaga kerahasiaan dan etika profesi" , Shield],
        ["Keadilan", "Pendampingan hukum yang objektif dan tegas", Scale],
        ["Terpercaya", "Didukung oleh pengalaman dan legalitas resmi (PERADI)", CheckCircle2]
      ].map(([title, desc, Icon]: any) => (
        <div key={title} className="card p-6 flex items-start gap-4">
          <Icon className="w-6 h-6 text-brand-600"/>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-slate-600">{desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
