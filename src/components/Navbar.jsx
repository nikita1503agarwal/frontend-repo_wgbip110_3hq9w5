import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const LinkItem = ({ href, children }) => (
    <a
      href={href}
      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
    >
      {children}
    </a>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/80 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <div className="bg-blue-500 text-white p-2 rounded-md">
            <GraduationCap size={20} />
          </div>
          <div className="leading-tight">
            <div className="font-bold">SMK Bakti Nusantara 666</div>
            <div className="text-xs text-gray-500">PPDB 2025/2026</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-2">
          <LinkItem href="#info">Informasi</LinkItem>
          <LinkItem href="#jurusan">Jurusan</LinkItem>
          <LinkItem href="#jadwal">Jadwal</LinkItem>
          <a
            href="#daftar"
            className="ml-2 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Daftar Sekarang
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            <a href="#info" className="py-2" onClick={() => setOpen(false)}>Informasi</a>
            <a href="#jurusan" className="py-2" onClick={() => setOpen(false)}>Jurusan</a>
            <a href="#jadwal" className="py-2" onClick={() => setOpen(false)}>Jadwal</a>
            <a
              href="#daftar"
              className="mt-1 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700"
              onClick={() => setOpen(false)}
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
