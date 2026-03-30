// src/pages/directory/JenjangSekolah.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Book,
  School,
  GraduationCap,
  Target,
  Briefcase,
  ChevronRight,
  Loader2,
} from "lucide-react";
import api from "../../services/api"; // Memanggil middleware Axios

const JenjangSekolah = ({ filter }) => {
  const navigate = useNavigate();
  const [levels, setLevels] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * CONFIGURATION OBJECT
   * Berfungsi sebagai pemeta (mapper) antara data mentah database (slug)
   * dengan elemen visual (Icon, Warna, Judul) di React.
   */
  const uiConfig = {
    sekolah: {
      title: "LATIHAN SOAL SEKOLAH",
      subtitle:
        "Pilih jenjang pendidikan untuk mulai berlatih soal-soal kurikulum.",
      basePath: "/latsol",
      // Mapping icon berdasarkan slug di tabel 'levels'
      icons: {
        sd: {
          icon: <Book size={32} />,
          color: "text-orange-600",
          bg: "bg-orange-50",
        },
        smp: {
          icon: <School size={32} />,
          color: "text-blue-600",
          bg: "bg-blue-50",
        },
        sma: {
          icon: <GraduationCap size={32} />,
          color: "text-red-600",
          bg: "bg-red-50",
        },
      },
    },
    ujian: {
      title: "PERSIAPAN UJIAN",
      subtitle:
        "Pilih jenis ujian masuk atau seleksi profesi yang ingin kamu pelajari.",
      basePath: "/ujian",
      icons: {
        utbk: {
          icon: <Target size={32} />,
          color: "text-purple-600",
          bg: "bg-purple-50",
        },
        cpns: {
          icon: <Briefcase size={32} />,
          color: "text-teal-600",
          bg: "bg-teal-50",
        },
      },
    },
  };

  const currentUI = uiConfig[filter] || uiConfig.sekolah;

  // FETCH DATA MENGGUNAKAN AXIOS
  useEffect(() => {
    const fetchLevels = async () => {
      setLoading(true);
      try {
        // Mengambil data dari api.php berdasarkan kategori (sekolah/ujian)
        const response = await api.get(
          `/api.php?action=get_levels&category=${filter}`
        );
        setLevels(response);
      } catch (error) {
        console.error("Gagal memuat data jenjang:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLevels();
  }, [filter]);

  // TAMPILAN LOADING
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-4" />
        <p className="text-slate-500 font-medium">
          Menghubungkan ke database...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 pb-24">
      {/* Header Section */}
      <div className="mb-10 mt-6 text-center md:text-left">
        <h1 className="text-3xl font-black text-slate-900 mb-2 italic uppercase tracking-tight">
          {currentUI.title}
        </h1>
        <p className="text-slate-500 font-medium max-w-xl">
          {currentUI.subtitle}
        </p>
      </div>

      {/* Grid Menu Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level) => {
          // Cari style icon berdasarkan slug dari database, jika tidak ada pakai default
          const style = currentUI.icons[level.slug] || {
            icon: <Book size={32} />,
            color: "text-slate-600",
            bg: "bg-slate-50",
          };

          return (
            <button
              key={level.id}
              onClick={() => navigate(`${currentUI.basePath}/${level.slug}`)}
              className="group relative flex items-center justify-between p-8 bg-white border-2 border-slate-100 rounded-[2.5rem] hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 text-left overflow-hidden"
            >
              {/* Dekorasi Background saat Hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 group-hover:bg-blue-50" />

              <div className="relative z-10 flex items-center gap-6">
                <div
                  className={`w-16 h-16 ${style.bg} ${style.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-sm`}
                >
                  {style.icon}
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">
                    {filter === "sekolah"
                      ? "Jenjang Pendidikan"
                      : "Kategori Ujian"}
                  </span>
                  <span className="text-xl font-black text-slate-800 leading-tight">
                    {level.name}
                  </span>
                </div>
              </div>

              <div className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                <ChevronRight size={20} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Empty State jika database kosong */}
      {levels.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200 mt-6">
          <p className="text-slate-400 font-bold italic">
            Belum ada data tersedia untuk kategori ini.
          </p>
        </div>
      )}
    </div>
  );
};

export default JenjangSekolah;
