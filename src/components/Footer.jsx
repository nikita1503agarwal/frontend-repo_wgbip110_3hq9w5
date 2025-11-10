export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <div className="text-white font-bold">SMK Bakti Nusantara 666</div>
          <p className="mt-2 text-sm text-gray-400">Mendidik generasi berkarakter, kreatif, dan berdaya saing.</p>
        </div>
        <div>
          <div className="text-white font-semibold">Kontak</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Jl. Pendidikan No. 66</li>
            <li>Telp. (022) 123456</li>
            <li>Email: ppdb@smkbn666.sch.id</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Navigasi</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#info" className="hover:text-white">Informasi</a></li>
            <li><a href="#jurusan" className="hover:text-white">Jurusan</a></li>
            <li><a href="#jadwal" className="hover:text-white">Jadwal</a></li>
            <li><a href="#daftar" className="hover:text-white">Daftar</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Sosial</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-gray-400">
          © {new Date().getFullYear()} SMK Bakti Nusantara 666. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
