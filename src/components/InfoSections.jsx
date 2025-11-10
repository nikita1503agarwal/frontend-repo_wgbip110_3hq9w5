export default function InfoSections() {
  return (
    <section id="info" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900">Informasi Pendaftaran</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Berikut persyaratan dan alur PPDB SMK Bakti Nusantara 666. Template ini
          menyiapkan struktur lengkap agar mudah dipindahkan ke Laravel.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-gray-900">Persyaratan</h3>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
              <li>Scan Kartu Keluarga, Akta, Rapor, dan Pas Foto</li>
              <li>NISN aktif</li>
              <li>Email dan nomor HP yang dapat dihubungi</li>
              <li>Mengisi formulir online dengan benar</li>
            </ul>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-gray-900">Alur Pendaftaran</h3>
            <ol className="mt-4 list-decimal list-inside text-gray-700 space-y-1">
              <li>Mengisi formulir online</li>
              <li>Mengunggah dokumen</li>
              <li>Menunggu verifikasi admin</li>
              <li>Cek pengumuman hasil di dashboard</li>
            </ol>
          </div>
        </div>

        <div id="jurusan" className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900">Pilihan Jurusan</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {["RPL (PPLG)", "TKJ (TJKT)", "DKV", "Akuntansi", "Perkantoran", "Teknik Otomotif"].map((major) => (
              <div key={major} className="p-5 border rounded-xl bg-gray-50 hover:bg-white hover:shadow transition">
                <div className="font-semibold text-gray-900">{major}</div>
                <p className="text-sm text-gray-600 mt-1">Kurikulum industri, praktik intensif, dan sertifikasi.</p>
              </div>
            ))}
          </div>
        </div>

        <div id="jadwal" className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900">Jadwal PPDB</h3>
          <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: 'Gelombang 1', time: '1 Jan - 31 Mar 2025' },
              { title: 'Gelombang 2', time: '10 Apr - 31 Mei 2025' },
              { title: 'Pengumuman', time: '15 Juni 2025' },
            ].map((item) => (
              <div key={item.title} className="p-5 border rounded-xl bg-white">
                <div className="font-semibold text-gray-900">{item.title}</div>
                <div className="text-sm text-blue-700 mt-1">{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
