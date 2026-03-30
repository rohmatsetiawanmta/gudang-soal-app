import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  GraduationCap,
  Layers,
  List,
} from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  // Level navigasi: 'jenjang' | 'kelas' | 'mapel' | 'topik' | 'soal'
  const [step, setStep] = useState("jenjang");
  const [selection, setSelection] = useState({
    jenjang: null,
    kelas: null,
    mapel: null,
    topik: null,
  });

  // Data Dummy (Nantinya data ini akan ditarik dari api.php)
  const dataStore = {
    jenjang: [
      { id: "sd", label: "SD / MI", icon: <GraduationCap /> },
      { id: "smp", label: "SMP / MTs", icon: <GraduationCap /> },
      { id: "sma", label: "SMA / MA / SMK", icon: <GraduationCap /> },
    ],
    kelas: {
      sma: ["Kelas 10", "Kelas 11", "Kelas 12"],
      smp: ["Kelas 7", "Kelas 8", "Kelas 9"],
      sd: ["Kelas 1", "Kelas 2", "Kelas 3", "Kelas 4", "Kelas 5", "Kelas 6"],
    },
    mapel: ["Matematika", "Fisika", "Kimia", "Biologi"],
    topik: [
      { id: 1, title: "Eksponen & Logaritma", sub: "12 Sub-topik", count: 120 },
      { id: 2, title: "Persamaan Kuadrat", sub: "8 Sub-topik", count: 85 },
      { id: 3, title: "Trigonometri", sub: "15 Sub-topik", count: 200 },
    ],
  };

  const handleSelect = (key, value) => {
    setSelection({ ...selection, [key]: value });
    if (key === "jenjang") setStep("kelas");
    if (key === "kelas") setStep("mapel");
    if (key === "mapel") setStep("topik");
  };

  const goBack = () => {
    if (step === "kelas") setStep("jenjang");
    if (step === "mapel") setStep("kelas");
    if (step === "topik") setStep("mapel");
  };

  return (
    <div className="pb-24 lg:pb-8">
      {/* Breadcrumbs / Back Button */}
      <div className="flex items-center gap-4 mb-8">
        {step !== "jenjang" && (
          <button
            onClick={goBack}
            className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        <div>
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
            {step === "jenjang"
              ? "Pilih Jenjang"
              : selection.jenjang?.toUpperCase()}
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            {step === "jenjang" && "Pilih tingkat pendidikan untuk memulai"}
            {step === "kelas" &&
              `Pilih tingkatan kelas di ${selection.jenjang}`}
            {step === "mapel" && `Daftar mata pelajaran ${selection.kelas}`}
            {step === "topik" && `Pilih topik materi ${selection.mapel}`}
          </p>
        </div>
      </div>

      {/* Grid Konten Berdasarkan Step */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* STEP 1: JENJANG */}
        {step === "jenjang" &&
          dataStore.jenjang.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelect("jenjang", item.id)}
              className="p-6 bg-white border-2 border-slate-100 rounded-2xl flex flex-col items-center text-center hover:border-blue-500 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="font-bold text-slate-800">{item.label}</span>
            </button>
          ))}

        {/* STEP 2: KELAS */}
        {step === "kelas" &&
          dataStore.kelas[selection.jenjang].map((kls) => (
            <button
              key={kls}
              onClick={() => handleSelect("kelas", kls)}
              className="p-5 bg-white border-2 border-slate-100 rounded-2xl font-bold text-slate-700 hover:border-blue-500 hover:bg-blue-50 transition-all text-left flex justify-between items-center"
            >
              {kls} <ChevronRight size={18} className="text-slate-300" />
            </button>
          ))}

        {/* STEP 3: MAPEL */}
        {step === "mapel" &&
          dataStore.mapel.map((mpl) => (
            <button
              key={mpl}
              onClick={() => handleSelect("mapel", mpl)}
              className="p-6 bg-white border-2 border-slate-100 rounded-2xl flex items-center gap-4 hover:border-blue-500 transition-all group"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                <BookOpen size={24} />
              </div>
              <span className="font-bold text-slate-800">{mpl}</span>
            </button>
          ))}

        {/* STEP 4: TOPIK */}
        {step === "topik" &&
          dataStore.topik.map((tp) => (
            <div
              key={tp.id}
              className="p-6 bg-white border-2 border-slate-100 rounded-2xl hover:border-blue-500 transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Layers size={20} />
                </div>
                <span className="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-500 uppercase">
                  {tp.count} Soal
                </span>
              </div>
              <h3 className="font-bold text-slate-800 mb-1">{tp.title}</h3>
              <p className="text-xs text-slate-400 mb-4">{tp.sub}</p>
              <Link
                to={`/soal-list?topic=${tp.id}`}
                className="w-full py-2 bg-slate-900 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
              >
                <List size={14} /> Buka Daftar Soal
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Courses;
