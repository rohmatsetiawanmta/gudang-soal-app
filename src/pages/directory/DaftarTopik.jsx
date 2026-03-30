import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ChevronLeft,
  Layers,
  ArrowRight,
  BookOpen,
  Target,
} from "lucide-react";

const DaftarTopik = () => {
  const navigate = useNavigate();
  const { jenjang, kelas, mapel, ujianId, subtesId } = useParams();

  // Logika untuk menentukan konteks (Sekolah atau Ujian)
  const isUjian = !!ujianId;
  const contextTitle = isUjian
    ? `${ujianId.toUpperCase()} - ${subtesId.replace(/-/g, " ").toUpperCase()}`
    : `${mapel.toUpperCase()} - ${kelas.replace(/-/g, " ").toUpperCase()}`;

  // Data Dummy Topik (Nantinya ditarik dari api.php berdasarkan params)
  // Contoh: if(isUjian) { fetch by subtesId } else { fetch by mapel & kelas }
  const topiks = [
    {
      id: 1,
      name: "Eksponen & Logaritma",
      slug: "eksponen-logaritma",
      subCount: 8,
    },
    {
      id: 2,
      name: "Trigonometri Dasar",
      slug: "trigonometri-dasar",
      subCount: 5,
    },
  ];

  return (
    <div className="pb-24 lg:pb-8">
      {/* Tombol Kembali & Header */}
      <div className="flex flex-col gap-4 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 font-bold hover:text-blue-600 transition-colors group mb-4"
        >
          <div className="p-2 bg-white border border-slate-200 rounded-xl group-hover:border-blue-200 group-hover:bg-blue-50">
            <ChevronLeft size={20} />
          </div>
          <span className="hidden sm:inline">Kembali</span>
        </button>

        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${
              isUjian
                ? "bg-blue-100 text-blue-600"
                : "bg-blue-100 text-blue-600"
            }`}
          >
            {isUjian ? <Target size={28} /> : <BookOpen size={28} />}
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
              {contextTitle}
            </h1>
            <p className="text-sm text-slate-500 font-medium italic">
              Pilih topik utama untuk melihat sub-topik yang lebih spesifik.
            </p>
          </div>
        </div>
      </div>

      {/* Grid Daftar Topik */}
      <div className="grid grid-cols-1 gap-4">
        {topiks.map((t) => (
          <button
            key={t.id}
            onClick={() => navigate(`/sub-topik/${t.slug}`)}
            className="group w-full p-6 bg-white border-2 border-slate-100 rounded-[2rem] flex items-center justify-between hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 text-left"
          >
            <div className="flex items-center gap-5">
              {/* Icon Bulat */}
              <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Layers size={22} />
              </div>

              <div>
                <h3 className="font-black text-slate-800 text-lg group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                  {t.name}
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded">
                    {t.subCount} Sub-Topik
                  </span>
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded">
                    {t.totalSoal} Soal
                  </span>
                </div>
              </div>
            </div>

            {/* Arrow Action */}
            <div className="p-3 rounded-full bg-slate-50 text-slate-300 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
              <ArrowRight
                size={24}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Info Tip di Bawah */}
      <div className="mt-12 p-6 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
        <div className="relative z-10 flex items-center gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <p className="font-bold text-sm">Tips Belajar</p>
            <p className="text-xs text-slate-400">
              Kuasai satu topik hingga tuntas sebelum pindah ke topik berikutnya
              untuk pemahaman yang lebih dalam.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600 rounded-full blur-[60px] opacity-20"></div>
      </div>
    </div>
  );
};

export default DaftarTopik;
