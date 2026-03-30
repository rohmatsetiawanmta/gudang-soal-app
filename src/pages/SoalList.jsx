import React, { useState } from "react";
import {
  ChevronLeft,
  Search,
  CheckCircle2,
  Circle,
  Filter,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SoalList = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("Semua");

  // Data Dummy Soal (Nantinya ditarik dari api.php berdasarkan ?topic=id)
  const subTopiks = [
    "Semua",
    "Logaritma Dasar",
    "Sifat Logaritma",
    "Persamaan Logaritma",
  ];

  const daftarSoal = [
    {
      id: 1,
      title: "Menghitung Nilai Logaritma Dasar",
      sub: "Logaritma Dasar",
      level: "Mudah",
      status: "done",
      points: 10,
    },
    {
      id: 2,
      title: "Penerapan Sifat Perkalian Logaritma",
      sub: "Sifat Logaritma",
      level: "Sedang",
      status: "pending",
      points: 20,
    },
    {
      id: 3,
      title: "Menentukan Himpunan Penyelesaian Persamaan",
      sub: "Persamaan Logaritma",
      level: "Sulit",
      status: "pending",
      points: 30,
    },
    {
      id: 4,
      title: "Operasi Pembagian pada Logaritma",
      sub: "Sifat Logaritma",
      level: "Mudah",
      status: "done",
      points: 10,
    },
  ];

  const filteredSoal =
    activeFilter === "Semua"
      ? daftarSoal
      : daftarSoal.filter((s) => s.sub === activeFilter);

  return (
    <div className="pb-24 lg:pb-8">
      {/* Header & Back Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Eksponen & Logaritma
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              SMA Kelas 10 • Matematika
            </p>
          </div>
        </div>

        {/* Search Mini */}
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Cari soal..."
            className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:border-blue-500 outline-none w-full md:w-64"
          />
        </div>
      </div>

      {/* Filter Sub-Topik (Horizontal Scroll di Mobile) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
          {subTopiks.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeFilter === filter
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* List Soal Items */}
      <div className="grid grid-cols-1 gap-3">
        {filteredSoal.map((soal) => (
          <div
            key={soal.id}
            className="group bg-white border-2 border-slate-100 rounded-2xl p-4 flex items-center justify-between hover:border-blue-400 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              {/* Status Icon */}
              <div
                className={`${
                  soal.status === "done" ? "text-blue-500" : "text-slate-200"
                }`}
              >
                {soal.status === "done" ? (
                  <CheckCircle2
                    size={24}
                    fill="currentColor"
                    className="text-blue-500 fill-blue-50"
                  />
                ) : (
                  <Circle size={24} />
                )}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                      soal.level === "Mudah"
                        ? "bg-green-50 text-green-600"
                        : soal.level === "Sedang"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {soal.level}
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold tracking-wider">
                    {soal.sub}
                  </span>
                </div>
                <h3 className="font-bold text-slate-800 text-sm md:text-base group-hover:text-blue-600 transition-colors">
                  {soal.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:block text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase">
                  Poin
                </p>
                <p className="text-sm font-black text-slate-700">
                  +{soal.points}
                </p>
              </div>
              <div className="p-2 bg-slate-50 rounded-xl text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredSoal.length === 0 && (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen size={40} className="text-slate-200" />
          </div>
          <h3 className="font-bold text-slate-800">Soal belum tersedia</h3>
          <p className="text-sm text-slate-500">
            Kami sedang menyiapkan soal untuk sub-topik ini.
          </p>
        </div>
      )}
    </div>
  );
};

export default SoalList;
