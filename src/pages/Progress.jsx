import React from "react";
import {
  BarChart2,
  TrendingUp,
  CheckCircle2,
  Clock,
  Award,
  ChevronRight,
} from "lucide-react";

const Progress = () => {
  const stats = [
    {
      label: "Total Soal Dikerjakan",
      value: "142",
      icon: <CheckCircle2 size={24} />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Akurasi Jawaban",
      value: "85%",
      icon: <TrendingUp size={24} />,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Waktu Belajar",
      value: "12j 30m",
      icon: <Clock size={24} />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Peringkat Mingguan",
      value: "#12",
      icon: <Award size={24} />,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const history = [
    {
      mapel: "Matematika",
      topik: "Logaritma Dasar",
      status: "Benar",
      date: "Hari ini, 14:20",
    },
    {
      mapel: "Fisika",
      topik: "Gerak Lurus",
      status: "Salah",
      date: "Hari ini, 10:15",
    },
    {
      mapel: "Matematika",
      topik: "Trigonometri",
      status: "Benar",
      date: "Kemarin",
    },
  ];

  return (
    <div className="pb-24 lg:pb-8">
      <h1 className="text-2xl font-black text-slate-900 mb-2 uppercase">
        Statistik Saya
      </h1>
      <p className="text-slate-500 mb-8 font-medium">
        Pantau perkembangan belajarmu secara real-time.
      </p>

      {/* Grid Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 bg-white border-2 border-slate-100 rounded-3xl shadow-sm"
          >
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${stat.color}`}
            >
              {stat.icon}
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              {stat.label}
            </p>
            <p className="text-2xl font-black text-slate-900 mt-1">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Performa Per Mapel */}
      <div className="bg-white border-2 border-slate-100 rounded-3xl p-8 mb-8">
        <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
          <BarChart2 size={20} className="text-blue-600" /> Performa Mata
          Pelajaran
        </h3>
        <div className="space-y-6">
          {[
            { name: "Matematika", progress: 75, color: "bg-blue-600" },
            { name: "Fisika", progress: 40, color: "bg-blue-500" },
            { name: "Kimia", progress: 60, color: "bg-emerald-500" },
          ].map((item) => (
            <div key={item.name}>
              <div className="flex justify-between text-sm font-bold mb-2">
                <span className="text-slate-700">{item.name}</span>
                <span className="text-slate-400">{item.progress}%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`${item.color} h-full rounded-full transition-all duration-1000`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Riwayat Terakhir */}
      <h3 className="font-bold text-slate-800 mb-4">Riwayat Pengerjaan</h3>
      <div className="space-y-3">
        {history.map((h, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-4 bg-white border-2 border-slate-50 rounded-2xl hover:border-blue-200 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-2 h-2 rounded-full ${
                  h.status === "Benar" ? "bg-emerald-500" : "bg-red-500"
                }`}
              ></div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">{h.topik}</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase">
                  {h.mapel}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-slate-400 font-bold">
                {h.date}
              </span>
              <ChevronRight
                size={18}
                className="text-slate-200 group-hover:text-blue-600 transition-all"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
