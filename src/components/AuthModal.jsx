import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, LogIn, UserPlus } from 'lucide-react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

export default function AuthModal({ open, mode = 'register', onClose, onSwitch }) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => (document.body.style.overflow = '');
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* === [EDITABLE] Backdrop color/opacity === */}
          <motion.div
            className="absolute inset-0 bg-gray-900/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-2xl mx-4 overflow-hidden rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          >
            {/* Header with gradient gray -> gold */}
            {/* === [EDITABLE] Header gradient === */}
            <div className="relative h-28 bg-gradient-to-r from-gray-100 via-gray-200 to-amber-200">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.7),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.5),transparent_40%)]" />
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white/80 p-2 text-gray-700 shadow hover:bg-white"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                {mode === 'register' ? (
                  <UserPlus className="text-blue-700" size={22} />
                ) : (
                  <LogIn className="text-blue-700" size={22} />
                )}
                <h3 className="text-lg font-bold text-gray-900">
                  {mode === 'register' ? 'Formulir Pendaftaran' : 'Masuk Akun'}
                </h3>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white px-4 pt-4">
              <div className="inline-flex rounded-lg border p-1 bg-gray-50">
                <button
                  onClick={() => onSwitch('register')}
                  className={`px-4 py-2 text-sm font-semibold rounded-md transition ${
                    mode === 'register'
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-gray-700 hover:text-blue-700'
                  }`}
                >
                  Daftar
                </button>
                <button
                  onClick={() => onSwitch('login')}
                  className={`px-4 py-2 text-sm font-semibold rounded-md transition ${
                    mode === 'login'
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-gray-700 hover:text-blue-700'
                  }`}
                >
                  Login
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="bg-white p-4 md:p-6">
              {mode === 'register' ? <RegistrationForm onSwitch={() => onSwitch('login')} /> : <LoginForm onSwitch={() => onSwitch('register')} />}
            </div>

            {/* Footer accent */}
            {/* === [EDITABLE] Footer gradient === */}
            <div className="h-2 bg-gradient-to-r from-blue-600 via-sky-400 to-amber-400" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
