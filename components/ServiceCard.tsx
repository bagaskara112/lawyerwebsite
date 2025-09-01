import { Scale, ShieldAlert, Landmark } from "lucide-react";

export default function ServiceCard() {
  const services = [
    {
      icon: Scale,
      title: "Perdata",
      desc: [
        "Perceraian",
        "Waris",
        "Hak Asuh Anak",
        "Harta Gono Gini",
        "Hibah",
        "Poligami",
        "Isbath Nikah, dll",
      ],
    },
    {
      icon: ShieldAlert,
      title: "Pidana",
      desc: [
        "Pencurian",
        "Pembunuhan",
        "Penggelapan",
        "Penipuan",
        "Penganiayaan",
        "Narkoba",
        "Perjudian, dll",
      ],
    },
    {
      icon: Landmark,
      title: "Non-Litigasi",
      desc: [
        "Jual Beli Tanah",
        "Sertifikat Tanah",
        "Sengketa Tanah",
        "Dll",
      ],
    },
  ];

  return (
    <section className="container-xl mt-16">
      <h2 className="text-center text-2xl font-bold">Layanan Hukum</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="card p-6 rounded-2xl border hover:shadow-xl transition bg-white"
          >
            <div className="flex items-center gap-3">
              <Icon className="w-8 h-8 text-brand-600" />
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
              {desc.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
