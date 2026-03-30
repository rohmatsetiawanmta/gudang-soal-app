import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, BrainCircuit, Calculator, FileText } from "lucide-react";

const DaftarSubtes = () => {
  const { ujianId } = useParams();
  const navigate = useNavigate();

  // Data dinamis berdasarkan ujianId
  const subtesData = {
    utbk: [
      {
        id: "pk",
        label: "Pengetahuan Kuantitatif",
        icon: <Calculator size={24} />,
      },
      {
        id: "pm",
        label: "Penalaran Matematika",
        icon: <BrainCircuit size={24} />,
      },
      { id: "pbm", label: "PBM & PPU", icon: <FileText size={24} /> },
    ],
    // Bisa ditambah cpns, dll
  };

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
        {ujianId} - DAFTAR SUBTES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {(subtesData[ujianId] || []).map((sub) => (
          <button
            key={sub.id}
            onClick={() => navigate(`/ujian/${ujianId}/${sub.id}`)}
            className="p-6 bg-white border-2 border-slate-100 rounded-2xl flex items-center gap-4 hover:border-blue-500 hover:shadow-md transition-all group"
          >
            <div className="w-14 h-14 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
              {sub.icon}
            </div>
            <span className="font-bold text-slate-800 text-lg">
              {sub.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaftarSubtes;
