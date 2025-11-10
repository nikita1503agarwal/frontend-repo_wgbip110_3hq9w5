import { useState } from 'react';
import { ArrowRight, LogIn, UserPlus } from 'lucide-react';
import AuthModal from './AuthModal';

export default function EnhancedRegisterCTA() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('register');

  const openRegister = () => { setMode('register'); setOpen(true); };
  const openLogin = () => { setMode('login'); setOpen(true); };

  return (
    <section id="daftar" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-sky-500 to-blue-400" />
      {/* Decorative gray->gold overlay, non-blocking */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_20%_30%,#ffffff,transparent_40%),radial-gradient(circle_at_80%_70%,#fef3c7,transparent_40%)]" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 text-white grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-extrabold">Pendaftaran & Login</h2>
          <p className="mt-2 text-white/90 max-w-prose">
            Daftar akun baru atau masuk untuk melanjutkan pendaftaran. Semua dalam satu tempat, cepat dan aman.
          </p>
        </div>
        <div className="flex md:justify-end items-center gap-3">
          <button
            onClick={openRegister}
            className="inline-flex items-center gap-2 rounded-md bg-white text-blue-700 font-semibold px-5 py-3 hover:bg-blue-50"
          >
            <UserPlus size={18} /> Daftar <ArrowRight size={18} />
          </button>
          <button
            onClick={openLogin}
            className="inline-flex items-center gap-2 rounded-md border border-white/30 text-white font-semibold px-5 py-3 hover:bg-white/10"
          >
            <LogIn size={18} /> Login
          </button>
        </div>
      </div>

      <AuthModal
        open={open}
        mode={mode}
        onClose={() => setOpen(false)}
        onSwitch={(m) => setMode(m)}
      />
    </section>
  );
}
