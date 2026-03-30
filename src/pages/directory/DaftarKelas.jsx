// src/pages/directory/DaftarKelas.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Loader2,
  Layers,
  Sparkles,
  GraduationCap,
  ClipboardPen,
} from "lucide-react";
import api from "../../services/api";

const DaftarKelas = () => {
  const { jenjang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);

  const isUjianPath = location.pathname.includes("/ujian");

  const pageTitle = isUjianPath
    ? "RUMPUN TES"
    : `KELAS ${jenjang?.toUpperCase()}`;

  useEffect(() => {
    const fetchGrades = async () => {
      setLoading(true);
      try {
        const response = await api.get(
          `/api.php?action=get_grades&level=${jenjang}`
        );
        setGrades(response);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    if (jenjang) fetchGrades();
  }, [jenjang]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pb-20 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-100/30 blur-[100px] -z-10 rounded-full" />

      {/* Header Minimalis */}
      <div className="flex items-center gap-3 mb-8 mt-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:text-blue-600 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300"
        >
          <ChevronLeft size={20} className="text-slate-600" />
        </button>
        <div>
          <h1 className="text-2xl font-black text-slate-900 italic uppercase tracking-tighter flex items-center gap-2">
            {pageTitle}
          </h1>
          <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase ml-0.5">
            Pilih kategori untuk memulai
          </p>
        </div>
      </div>

      {/* Grid Ultra-Compact with Animations */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {grades.map((grade) => (
          <button
            key={grade.id}
            onClick={() => navigate(`${grade.slug}`)}
            className="group relative flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl transition-all duration-500 overflow-hidden hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 text-left"
          >
            <div className="absolute -right-4 -bottom-4 w-12 h-12 bg-blue-50 rounded-full scale-0 group-hover:scale-[3] transition-transform duration-700 ease-out opacity-50" />
            <div className="absolute -left-2 -top-2 w-6 h-6 bg-indigo-50 rounded-full scale-0 group-hover:scale-[2] transition-transform duration-500 ease-out opacity-40 delay-75" />

            <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rotate-6">
              {isUjianPath ? (
                <ClipboardPen
                  size={22}
                  className="group-hover:scale-110 transition-transform"
                />
              ) : (
                <GraduationCap
                  size={22}
                  className="group-hover:scale-110 transition-transform"
                />
              )}
            </div>

            {/* Title Only */}
            <div className="relative z-10 flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-black text-slate-700 group-hover:text-blue-600 transition-colors truncate uppercase italic tracking-tight">
                {grade.name}
              </h3>
              <div className="w-0 group-hover:w-8 h-0.5 bg-blue-500 transition-all duration-300 rounded-full mt-0.5" />
            </div>

            <div className="relative z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
              <ChevronRight size={18} className="text-blue-500" />
            </div>
          </button>
        ))}
      </div>

      {grades.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20 opacity-40">
          <LayoutGrid size={40} className="mb-2 text-slate-300" />
          <p className="text-center text-slate-400 text-sm font-bold italic tracking-tighter">
            BELUM ADA DATA TERSEDIA
          </p>
        </div>
      )}
    </div>
  );
};

export default DaftarKelas;
