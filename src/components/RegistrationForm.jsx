import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function RegistrationForm({ onSwitch }) {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    nisn: '',
    major_choice: '',
    secondary_choice: '',
  });

  const majors = ['RPL (PPLG)', 'TKJ (TJKT)', 'DKV', 'Akuntansi', 'Perkantoran', 'Teknik Otomotif'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // === [EDITABLE] Integrate API call to backend here ===
    alert('Pendaftaran dikirim! (Integrasi API menyusul)');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
          <input
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Nama sesuai ijazah"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            placeholder="email@contoh.com"
            required
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">NISN</label>
          <input
            name="nisn"
            value={form.nisn}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            placeholder="0000000000"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Pilihan Jurusan</label>
          <select
            name="major_choice"
            value={form.major_choice}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="" disabled>Pilih jurusan</option>
            {majors.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Pilihan Cadangan</label>
        <select
          name="secondary_choice"
          value={form.secondary_choice}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Tidak ada</option>
          {majors.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={onSwitch}
          className="text-sm font-medium text-blue-700 hover:text-blue-800"
        >
          Sudah punya akun? Login
        </button>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
        >
          Kirim Pendaftaran <ArrowRight size={18} />
        </button>
      </div>
    </form>
  );
}
