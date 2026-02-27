import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";

export const metadata = { title: "Layanan Hukum – Ibnu Fajar Maulana S.H" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Layanan Hukum" subtitle="Pilih paket layanan sesuai kebutuhan Anda." />
      <div className="mt-10"><ServiceCard /></div>
    </>
  );
}
