import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-blue-50" />
      <div className="relative max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-blue-700 font-semibold bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            PPDB 2025/2026
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Bergabung bersama SMK Bakti Nusantara 666
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Wujudkan masa depanmu di sekolah vokasi unggulan dengan fasilitas lengkap, guru profesional, dan jejaring industri.
          </p>
          <ul className="mt-6 space-y-2">
            {[
              'Pendaftaran online cepat dan mudah',
              'Program keahlian terakreditasi',
              'Seleksi transparan & realtime',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="text-blue-600 mt-0.5" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#daftar"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-5 py-3 font-semibold hover:bg-blue-700 transition-colors"
            >
              Daftar Sekarang <ArrowRight size={18} />
            </a>
            <a
              href="#info"
              className="inline-flex items-center gap-2 rounded-md bg-white border px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50"
            >
              Lihat Informasi
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-200 to-teal-100" />
          <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-lg p-4 border">
            <div className="text-sm text-gray-600">Gelombang 1 dibuka</div>
            <div className="text-xl font-bold text-blue-700">1 Jan - 31 Mar 2025</div>
          </div>
        </div>
      </div>
    </section>
  );
}
