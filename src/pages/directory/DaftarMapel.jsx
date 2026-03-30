import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, BookText } from "lucide-react";

const DaftarMapel = () => {
  const { jenjang, kelas } = useParams();
  const navigate = useNavigate();

  const mapels = [
    "Matematika",
    "Fisika",
    "Kimia",
    "Biologi",
    "Ekonomi",
    "Geografi",
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
      <h1 className="text-2xl font-black text-slate-900 uppercase">
        {kelas.replace("-", " ")}
      </h1>
      <p className="text-slate-500 mb-8">Pilih mata pelajaran.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mapels.map((mp) => (
          <button
            key={mp}
            onClick={() =>
              navigate(`/materi/${jenjang}/${kelas}/${mp.toLowerCase()}`)
            }
            className="p-6 bg-white border-2 border-slate-100 rounded-2xl flex items-center gap-4 hover:border-blue-600 hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
              <BookText size={24} />
            </div>
            <span className="font-bold text-slate-800">{mp}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaftarMapel;
