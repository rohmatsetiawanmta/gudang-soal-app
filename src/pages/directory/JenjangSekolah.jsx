import React from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, School, Book } from "lucide-react";

const JenjangSekolah = () => {
  const navigate = useNavigate();
  const jenjangs = [
    { id: "sd", label: "SD / MI", icon: <Book size={32} /> },
    { id: "smp", label: "SMP / MTs", icon: <School size={32} /> },
    { id: "sma", label: "SMA / MA / SMK", icon: <GraduationCap size={32} /> },
  ];

  return (
    <div className="pb-24">
      <h1 className="text-2xl font-black text-slate-900 mb-2">PILIH JENJANG</h1>
      <p className="text-slate-500 mb-8">
        Pilih tingkat pendidikan untuk mulai mencari soal.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {jenjangs.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(`/materi/${item.id}`)}
            className="p-8 bg-white border-2 border-slate-100 rounded-3xl flex flex-col items-center text-center hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all group"
          >
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
              {item.icon}
            </div>
            <span className="font-black text-slate-800 tracking-tight">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default JenjangSekolah;
