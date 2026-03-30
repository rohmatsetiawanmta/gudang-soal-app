import React from "react";
import { useNavigate } from "react-router-dom";
import { Trophy, Target, Award } from "lucide-react";

const DaftarUjian = () => {
  const navigate = useNavigate();
  const ujianList = [
    {
      id: "utbk",
      label: "UTBK - SNBT",
      desc: "Persiapan Masuk PTN",
      icon: <Target size={32} />,
    },
    {
      id: "cpns",
      label: "CPNS / CASN",
      desc: "Seleksi Calon Aparatur Sipil",
      icon: <Trophy size={32} />,
    },
    {
      id: "kedinasan",
      label: "Sekolah Kedinasan",
      desc: "STAN, STIS, IPDN, dll",
      icon: <Award size={32} />,
    },
  ];

  return (
    <div className="pb-24">
      <h1 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">
        Persiapan Ujian
      </h1>
      <p className="text-slate-500 mb-8">
        Pilih target ujian yang ingin kamu taklukkan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ujianList.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(`/ujian/${item.id}`)}
            className="p-8 bg-white border-2 border-slate-100 rounded-3xl flex flex-col items-center text-center hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all group"
          >
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
              {item.icon}
            </div>
            <span className="font-black text-slate-800 tracking-tight block mb-1">
              {item.label}
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              {item.desc}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaftarUjian;
