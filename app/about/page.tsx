import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Tentang – Ibnu Fajar Maulana S.H" };

export default function AboutPage() {
  return (
    <>
      <PageHeader title="Tentang Saya" subtitle="Advokat berizin PERADI, fokus pada litigasi & bisnis." />
      <section className="container-xl mt-10 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 card p-6 space-y-4">
          <p>Saya adalah advokat lulusan ... dengan lebih dari 10 tahun pengalaman.</p>
          <p>Keahlian: perdata, pidana, korporasi, kontrak, dan negosiasi komersial.</p>
          <p>Nilai: integritas, transparansi, dan keberpihakan pada keadilan.</p>
        </div>
        <aside className="card p-6">
          <h3 className="text-xl font-semibold">Sertifikasi & Keanggotaan</h3>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
            <li>PERADI – Kartu anggota ....</li>
            <li>Sertifikasi Mediator ....</li>
            <li>Pelatihan Kontrak Lanjutan ....</li>
          </ul>
        </aside>
      </section>
    </>
  );
}
