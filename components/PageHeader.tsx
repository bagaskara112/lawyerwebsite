import { ReactNode } from "react";

export default function PageHeader({ title, subtitle }: { title: string; subtitle?: ReactNode }) {
  return (
    <section className="bg-slate-50 border-b border-slate-100">
      <div className="container-xl py-12">
        <h1>{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl text-slate-600">{subtitle}</p>}
      </div>
    </section>
  );
}
