import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, Bookmark } from "lucide-react";

const DaftarSubTopik = () => {
  const { slugTopik } = useParams();
  const navigate = useNavigate();

  const subTopiks = [
    { id: 101, name: "Sifat Logaritma", slug: "sifat-logaritma" },
    { id: 102, name: "Persamaan Logaritma", slug: "persamaan-logaritma" },
  ];

  return (
    <div className="pb-24">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-slate-500 font-bold hover:text-blue-600 transition-colors group mb-4"
      >
        <div className="p-2 bg-white border border-slate-200 rounded-xl group-hover:border-blue-200 group-hover:bg-blue-50">
          <ChevronLeft size={20} />
        </div>
        <span className="hidden sm:inline">Kembali</span>
      </button>

      <h1 className="text-2xl font-black text-slate-900">SUB-TOPIK</h1>
      <p className="text-slate-500 mb-8">
        Pilih sub-materi untuk melihat daftar soal.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subTopiks.map((st) => (
          <button
            key={st.id}
            onClick={() => navigate(`/daftar-soal/${st.slug}`)}
            className="p-6 bg-white border-2 border-slate-100 rounded-3xl flex flex-col items-start hover:border-blue-500 transition-all shadow-sm group"
          >
            <div className="p-2 bg-slate-100 text-slate-500 rounded-lg mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Bookmark size={20} />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">{st.name}</h3>
            <span className="text-[10px] font-black bg-blue-50 text-blue-600 px-2 py-1 rounded-md uppercase">
              {st.questionCount} Soal
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaftarSubTopik;
