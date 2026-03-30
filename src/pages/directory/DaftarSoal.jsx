import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, PlayCircle, CheckCircle, Clock } from "lucide-react";

const DaftarSoal = () => {
  const { slugSubTopik } = useParams(); // Mengambil slug dari URL
  const navigate = useNavigate();

  // Data Dummy dengan 8-character Question ID (qid)
  const soals = [
    {
      id: 1,
      qid: "a7b2c9d1",
      title: "Logaritma Dasar: Sifat Penjumlahan",
      level: "Mudah",
      solved: true,
      time: "5 Menit",
    },
    {
      id: 2,
      qid: "k9v2m1z8",
      title: "Logaritma Dasar: Sifat Pengurangan",
      level: "Sedang",
      solved: false,
      time: "8 Menit",
    },
    {
      id: 3,
      qid: "x5r1n0p4",
      title: "Persamaan Logaritma Sederhana",
      level: "Sulit",
      solved: false,
      time: "12 Menit",
    },
  ];

  return (
    <div className="pb-24 lg:pb-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-blue-600 font-bold mb-4 hover:underline"
      >
        <ChevronLeft size={20} /> Kembali
      </button>

      <div className="mb-8">
        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
          DAFTAR SOAL
        </h1>
        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-1">
          Sub-Topik: {slugSubTopik.replace(/-/g, " ")}
        </p>
      </div>

      <div className="space-y-3">
        {soals.map((s) => (
          <div
            key={s.id}
            onClick={() => navigate(`/soal/${s.qid}`)} // ENTRY POINT: Menggunakan qid
            className="p-5 bg-white border-2 border-slate-100 rounded-[1.5rem] flex items-center justify-between hover:border-blue-400 cursor-pointer shadow-sm group transition-all"
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-2 rounded-xl ${
                  s.solved
                    ? "bg-green-50 text-green-500"
                    : "bg-slate-50 text-slate-300 group-hover:text-blue-600 group-hover:bg-blue-50"
                }`}
              >
                {s.solved ? (
                  <CheckCircle size={24} />
                ) : (
                  <PlayCircle size={24} />
                )}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">
                  {s.title}
                </h4>
                <div className="flex items-center gap-3 mt-1">
                  <span
                    className={`text-[10px] font-black uppercase ${
                      s.level === "Mudah"
                        ? "text-emerald-500"
                        : s.level === "Sedang"
                        ? "text-orange-500"
                        : "text-red-500"
                    }`}
                  >
                    {s.level}
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
                    <Clock size={10} /> {s.time}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-slate-200 group-hover:text-blue-200 transition-colors italic font-black text-xs uppercase tracking-widest">
              #{s.qid}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaftarSoal;
