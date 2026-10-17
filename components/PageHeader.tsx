import { ReactNode } from "react";

export default function PageHeader({ title, subtitle }: { title: string; subtitle?: ReactNode }) {
  return (
    <section className="bg-brand-50/50 border-b border-brand-100 mt-[72px] md:mt-[88px]">
      <div className="container-xl py-12 md:py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-serif text-brand-950 mb-2 md:mb-4">{title}</h1>
        {subtitle && <p className="mt-2 text-silver-600 text-sm md:text-base max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
