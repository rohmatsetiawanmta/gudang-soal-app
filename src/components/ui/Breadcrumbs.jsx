import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  // Daftar path yang tidak boleh diklik karena butuh ID (mencegah halaman kosong)
  const nonClickablePaths = [
    "sub-topik",
    "daftar-soal",
    "soal",
    "materi",
    "ujian",
  ];

  return (
    <nav className="flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-slate-400 mb-6 overflow-x-auto no-scrollbar whitespace-nowrap py-1">
      <Link
        to="/"
        className="hover:text-blue-600 transition-colors flex items-center gap-1"
      >
        <Home size={14} />
      </Link>

      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isNonClickable = nonClickablePaths.includes(value.toLowerCase());

        // Format teks: hapus dash dan rapikan kata
        let displayName = value.replace(/-/g, " ");
        if (/^[a-z0-9]{8}$/.test(value)) {
          displayName = value;
        }
        // Custom Penamaan agar lebih user-friendly
        if (value === "materi") displayName = "MATERI";
        if (value === "ujian") displayName = "UJIAN";
        if (value === "soal") displayName = "SOAL";

        return (
          <React.Fragment key={to}>
            <ChevronRight size={12} className="text-slate-300 flex-shrink-0" />

            {last || isNonClickable ? (
              /* Jika halaman terakhir atau path kategori tanpa ID, jangan jadikan Link */
              <span
                className={`${
                  last ? "text-blue-600" : "text-slate-400"
                } max-w-[150px]`}
              >
                {displayName}
              </span>
            ) : (
              <Link to={to} className="hover:text-slate-600 transition-colors">
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
