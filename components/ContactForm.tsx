"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = Object.fromEntries(new FormData(form).entries());
    setStatus("Mengirim...");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
      const json = await res.json();
      if (json.ok) { setStatus("Terkirim! Saya akan menghubungi Anda segera."); form.reset(); }
      else { setStatus("Gagal mengirim. Coba lagi."); }
    } catch {
      setStatus("Terjadi kesalahan.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 space-y-4">
      <div>
        <label className="block text-sm font-medium">Nama</label>
        <input name="name" required className="mt-1 w-full border rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"/>
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" name="email" required className="mt-1 w-full border rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"/>
      </div>
      <div>
        <label className="block text-sm font-medium">Pesan</label>
        <textarea name="message" rows={5} required className="mt-1 w-full border rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"/>
      </div>
      <button className="btn-primary" type="submit">Kirim</button>
      {status && <p className="text-sm text-slate-600">{status}</p>}
    </form>
  );
}
