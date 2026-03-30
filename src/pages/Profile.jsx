import React from "react";
import {
  User,
  Settings,
  LogOut,
  GraduationCap,
  Mail,
  ShieldCheck,
  ChevronRight,
  Camera,
} from "lucide-react";

const Profile = () => {
  const user = {
    name: "Rohmat Setiawan",
    email: "rohmat@ui.ac.id",
    school: "Universitas Indonesia",
    level: "S2 MTI",
    xp: 1250,
  };

  return (
    <div className="pb-24 lg:pb-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">
        Profil Akun
      </h1>

      {/* Profile Header */}
      <div className="bg-white border-2 border-slate-100 rounded-3xl p-8 mb-8 shadow-sm flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        <div className="relative group">
          <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-blue-200">
            {user.name.charAt(0)}
          </div>
          <button className="absolute -bottom-2 -right-2 p-2 bg-white border-2 border-slate-100 rounded-xl text-slate-500 hover:text-blue-600 shadow-sm transition-all">
            <Camera size={16} />
          </button>
        </div>

        <div className="text-center md:text-left flex-1">
          <h2 className="text-2xl font-black text-slate-900">{user.name}</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
            <div className="flex items-center gap-1.5 text-slate-500 text-sm font-medium">
              <Mail size={16} /> {user.email}
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 text-sm font-medium">
              <GraduationCap size={16} /> {user.level} - {user.school}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl text-center min-w-[120px]">
          <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
            Total XP
          </p>
          <p className="text-2xl font-black text-blue-700">{user.xp}</p>
        </div>
      </div>

      {/* Account Settings Menu */}
      <div className="space-y-4">
        <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest ml-2">
          Pengaturan Akun
        </h3>

        {[
          {
            icon: <User size={20} />,
            label: "Edit Profil",
            desc: "Ubah nama, instansi, dan foto profil",
          },
          {
            icon: <ShieldCheck size={20} />,
            label: "Keamanan",
            desc: "Ubah password dan autentikasi",
          },
          {
            icon: <Settings size={20} />,
            label: "Preferensi",
            desc: "Notifikasi dan tampilan aplikasi",
          },
        ].map((menu, idx) => (
          <button
            key={idx}
            className="w-full p-5 bg-white border-2 border-slate-50 rounded-2xl flex items-center justify-between hover:border-blue-200 group transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-50 text-slate-400 rounded-xl group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                {menu.icon}
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-800 text-sm">{menu.label}</p>
                <p className="text-xs text-slate-400">{menu.desc}</p>
              </div>
            </div>
            <ChevronRight
              size={20}
              className="text-slate-200 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
            />
          </button>
        ))}

        <button className="w-full p-5 bg-red-50 border-2 border-red-50 rounded-2xl flex items-center gap-4 hover:border-red-200 group transition-all mt-8">
          <div className="p-3 bg-white text-red-500 rounded-xl shadow-sm">
            <LogOut size={20} />
          </div>
          <span className="font-bold text-red-600 text-sm uppercase tracking-wider">
            Keluar Akun
          </span>
        </button>
      </div>

      <div className="mt-12 text-center">
        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
          Gudang Soal v1.0.0 Alpha
        </p>
      </div>
    </div>
  );
};

export default Profile;
