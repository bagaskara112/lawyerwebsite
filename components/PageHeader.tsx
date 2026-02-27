import { ReactNode } from "react";

export default function PageHeader({ title, subtitle }: { title: string; subtitle?: ReactNode }) {
  return (
    <section className="bg-silver-50 border-b border-silver-100 mt-[72px] md:mt-[88px]">
      <div className="container-xl py-12 md:py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-serif text-brand-900 mb-2 md:mb-4">{title}</h1>
        {subtitle && <p className="mt-2 text-brand-600 text-sm md:text-base max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
