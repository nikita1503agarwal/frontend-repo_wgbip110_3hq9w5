import { ArrowRight } from 'lucide-react';

export default function RegisterCTA() {
  return (
    <section id="daftar" className="relative bg-gradient-to-br from-blue-600 to-sky-500">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_40%),radial-gradient(circle_at_70%_60%,white,transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-4 py-16 text-white grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-extrabold">Siap Mendaftar?</h2>
          <p className="mt-2 text-white/90 max-w-prose">
            Lengkapi data diri dan unggah dokumen langsung melalui formulir online. Kamu bisa pantau status pendaftaran di dashboard.
          </p>
        </div>
        <div className="flex md:justify-end items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-white text-blue-700 font-semibold px-5 py-3 hover:bg-blue-50"
          >
            Buka Formulir <ArrowRight size={18} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 text-white font-semibold px-5 py-3 hover:bg-white/10"
          >
            Login
          </a>
        </div>
      </div>
    </section>
  );
}
