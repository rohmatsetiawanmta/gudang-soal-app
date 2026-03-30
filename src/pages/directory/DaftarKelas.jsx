import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DaftarKelas = () => {
  const { jenjang } = useParams();
  const navigate = useNavigate();

  const dataKelas = {
    sd: ["Kelas 1", "Kelas 2", "Kelas 3", "Kelas 4", "Kelas 5", "Kelas 6"],
    smp: ["Kelas 7", "Kelas 8", "Kelas 9"],
    sma: ["Kelas 10", "Kelas 11", "Kelas 12"],
  };

  const listKelas = dataKelas[jenjang] || [];

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
        KELAS {jenjang}
      </h1>
      <p className="text-slate-500 mb-8">
        Pilih tingkatan kelas yang ingin dipelajari.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {listKelas.map((kelas) => (
          <button
            key={kelas}
            onClick={() =>
              navigate(
                `/materi/${jenjang}/${kelas.replace(" ", "-").toLowerCase()}`
              )
            }
            className="p-6 bg-white border-2 border-slate-100 rounded-2xl flex justify-between items-center font-bold text-slate-700 hover:border-blue-500 hover:bg-blue-50 transition-all shadow-sm"
          >
            {kelas} <ChevronRight size={20} className="text-slate-300" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaftarKelas;
