import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Target,
  Zap,
  Trophy,
  ChevronRight,
  Clock,
} from "lucide-react";

const Dashboard = () => {
  // Data dummy untuk ringkasan aktivitas
  const stats = [
    { label: "Soal Terjawab", value: "1,240", color: "text-blue-600" },
    { label: "XP Point", value: "8,420", color: "text-blue-600" },
    { label: "Streak Hari", value: "12", color: "text-emerald-600" },
  ];

  return (
    <div className="pb-24 lg:pb-8">
      {/* Header Welcome */}
      <div className="mb-10">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          Halo, Rohmat! 👋
        </h1>
        <p className="text-slate-500 font-medium">
          Mau asah otak pakai soal apa hari ini?
        </p>
      </div>

      {/* Ringkasan Stats Singkat */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white border-2 border-slate-100 p-4 rounded-3xl shadow-sm"
          >
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
              {stat.label}
            </p>
            <p className={`text-xl font-black ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* DUA PINTU UTAMA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Jalur 1: Materi Sekolah */}
        <Link
          to="/latsol"
          className="group relative p-8 bg-blue-600 rounded-[2rem] text-white shadow-xl shadow-blue-200 overflow-hidden transition-all hover:scale-[1.02] active:scale-95"
        >
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
              <BookOpen size={32} />
            </div>
            <h2 className="text-2xl font-black mb-2 uppercase italic tracking-tighter">
              Materi Sekolah
            </h2>
            <p className="text-blue-100 text-sm font-medium mb-6 opacity-80">
              Pelajari materi harian mulai dari SD, SMP, hingga SMA secara
              lengkap.
            </p>
            <div className="flex items-center gap-2 font-black text-xs bg-white text-blue-600 px-4 py-2 rounded-full w-fit uppercase">
              Mulai Belajar <ChevronRight size={14} />
            </div>
          </div>
          {/* Dekorasi Background */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        </Link>

        {/* Jalur 2: Persiapan Ujian */}
        <Link
          to="/ujian"
          className="group relative p-8 bg-slate-900 rounded-[2rem] text-white shadow-xl shadow-slate-300 overflow-hidden transition-all hover:scale-[1.02] active:scale-95"
        >
          <div className="relative z-10">
            <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50">
              <Target size={32} />
            </div>
            <h2 className="text-2xl font-black mb-2 uppercase italic tracking-tighter">
              Persiapan Ujian
            </h2>
            <p className="text-slate-400 text-sm font-medium mb-6">
              Taklukkan UTBK, SNBT, CPNS, hingga Sekolah Kedinasan dengan bank
              soal akurat.
            </p>
            <div className="flex items-center gap-2 font-black text-xs bg-blue-500 text-white px-4 py-2 rounded-full w-fit uppercase">
              Kejar Target <ChevronRight size={14} />
            </div>
          </div>
        </Link>
      </div>

      {/* Section: Lanjutkan Belajar (Aktivitas Terakhir) */}
      <div className="mb-8">
        <h3 className="text-lg font-black text-slate-800 mb-4 flex items-center gap-2">
          <Clock size={20} className="text-blue-600" /> LANJUTKAN BELAJAR
        </h3>
        <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 flex items-center justify-between hover:border-blue-500 transition-all cursor-pointer group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Zap size={24} />
            </div>
            <div>
              <p className="text-xs font-black text-blue-600 uppercase">
                Terakhir Dipelajari
              </p>
              <h4 className="font-bold text-slate-800">
                Logaritma - Penalaran Matematika
              </h4>
            </div>
          </div>
          <ChevronRight className="text-slate-300 group-hover:text-blue-600" />
        </div>
      </div>

      {/* Leaderboard Mini (Pemanis) */}
      <div className="bg-emerald-50 border-2 border-emerald-100 rounded-3xl p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
            <Trophy size={20} />
          </div>
          <p className="text-sm font-bold text-emerald-800">
            Kamu di peringkat <span className="underline">#12</span> minggu ini!
            Terus semangat!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
