import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Info,
  ArrowRight,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const DetailSoal = () => {
  const { questionId } = useParams();
  const navigate = useNavigate();

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // Simulasi Data JSON Gabungan
  const databaseSoal = {
    a7b2c9d1: {
      topik: "Logaritma",
      konten:
        "Tentukan nilai dari operasi logaritma berikut ini: \n\n $$ ^3\\log 27 + ^3\\log 1 $$",
      pilihan: [
        { id: "A", teks: "1" },
        { id: "B", teks: "2" },
        { id: "C", teks: "3" },
        { id: "D", teks: "4" },
      ],
      jawabanBenar: "C",
      pembahasan:
        "1. $^3\\log 27 = 3$ (karena $3^3=27$)\n2. $^3\\log 1 = 0$ (karena $3^0=1$)\n3. Jadi, $3 + 0 = 3$.",
    },
  };

  const soal = databaseSoal[questionId] || null;

  useEffect(() => {
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setShowExplanation(false);
  }, [questionId]);

  if (!soal)
    return <div className="p-10 text-center">Soal tidak ditemukan.</div>;

  return (
    <div className="pb-24 lg:pb-8">
      {/* Header Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 font-bold hover:text-blue-600 transition-all text-sm"
        >
          <ChevronLeft size={18} /> Kembali ke Daftar
        </button>
        <span className="text-[10px] font-black text-slate-300 tracking-widest uppercase">
          Question ID: {questionId}
        </span>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* KOLOM KIRI: SOAL & PILIHAN (8/12) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 shadow-sm">
            <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded-md uppercase mb-4 inline-block">
              {soal.topik}
            </span>
            <div className="prose prose-slate max-w-none text-slate-800 font-medium text-lg leading-relaxed">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
              >
                {soal.konten}
              </ReactMarkdown>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {soal.pilihan.map((opt) => {
              const isSelected = selectedAnswer === opt.id;
              const isCorrect = isSubmitted && opt.id === soal.jawabanBenar;
              const isWrong =
                isSubmitted && isSelected && opt.id !== soal.jawabanBenar;

              let statusClass =
                "border-slate-100 bg-white hover:border-blue-200";
              if (isSelected) statusClass = "border-blue-600 bg-blue-50";
              if (isCorrect)
                statusClass =
                  "border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500";
              if (isWrong)
                statusClass = "border-red-500 bg-red-50 ring-1 ring-red-500";

              return (
                <button
                  key={opt.id}
                  disabled={isSubmitted}
                  onClick={() => setSelectedAnswer(opt.id)}
                  className={`p-4 rounded-2xl border-2 flex items-center gap-4 transition-all text-left ${statusClass} ${
                    isSubmitted && !isCorrect && !isWrong ? "opacity-50" : ""
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-black transition-colors ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {opt.id}
                  </div>
                  <span className="font-bold text-slate-700">{opt.teks}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* KOLOM KANAN: ACTIONS & PEMBAHASAN (5/12) */}
        <div className="lg:col-span-5 sticky top-8 space-y-4">
          {!isSubmitted ? (
            <div className="bg-slate-900 rounded-[2rem] p-8 text-white shadow-xl">
              <h3 className="font-black text-xl mb-2 italic">SIAP KIRIM?</h3>
              <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                Pastikan jawabanmu sudah yakin. Kamu akan mendapatkan +20 XP
                jika benar.
              </p>
              <button
                onClick={() => setIsSubmitted(true)}
                disabled={!selectedAnswer}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white rounded-2xl font-black transition-all flex items-center justify-center gap-2 group"
              >
                KONFIRMASI{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          ) : (
            <div className="space-y-4 animate-in slide-in-from-right-4 duration-500">
              {/* Status Card */}
              <div
                className={`p-6 rounded-[2rem] border-2 flex items-center gap-4 ${
                  selectedAnswer === soal.jawabanBenar
                    ? "bg-emerald-50 border-emerald-100 text-emerald-700"
                    : "bg-red-50 border-red-100 text-red-700"
                }`}
              >
                {selectedAnswer === soal.jawabanBenar ? (
                  <CheckCircle2 size={32} />
                ) : (
                  <XCircle size={32} />
                )}
                <div>
                  <p className="font-black text-lg leading-none">
                    {selectedAnswer === soal.jawabanBenar ? "BENAR!" : "SALAH!"}
                  </p>
                  <p className="text-xs font-bold opacity-70 mt-1">
                    {selectedAnswer === soal.jawabanBenar
                      ? "Poin XP telah ditambahkan."
                      : "Jangan menyerah, cek pembahasan!"}
                  </p>
                </div>
              </div>

              {/* Discussion / Explanation Card */}
              <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-6 shadow-sm">
                <button
                  onClick={() => setShowExplanation(!showExplanation)}
                  className="flex items-center justify-between w-full font-black text-slate-800 uppercase tracking-tighter"
                >
                  <span className="flex items-center gap-2">
                    <Lightbulb size={18} className="text-orange-500" />{" "}
                    Pembahasan
                  </span>
                  <span className="text-blue-600 text-[10px]">
                    {showExplanation ? "TUTUP" : "BUKA"}
                  </span>
                </button>

                {showExplanation && (
                  <div className="mt-4 pt-4 border-t border-dashed border-slate-100 prose prose-blue prose-sm max-w-none text-slate-600">
                    <ReactMarkdown
                      remarkPlugins={[remarkMath]}
                      rehypePlugins={[rehypeKatex]}
                    >
                      {soal.pembahasan}
                    </ReactMarkdown>
                  </div>
                )}
              </div>

              {/* Next Action */}
              <button
                onClick={() => navigate(-1)}
                className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl font-black text-sm transition-all uppercase tracking-widest"
              >
                Kembali ke Daftar
              </button>
            </div>
          )}

          {/* Quick Info Card */}
          <div className="p-6 bg-blue-50 rounded-[2rem] border border-blue-100 flex items-start gap-4">
            <Info size={20} className="text-blue-500 mt-1 flex-shrink-0" />
            <p className="text-[11px] text-blue-700 font-medium leading-relaxed">
              <strong>Tahukah kamu?</strong> Menjelaskan kembali soal ini kepada
              orang lain dapat meningkatkan ingatanmu hingga 90%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSoal;
