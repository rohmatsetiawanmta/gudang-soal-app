import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";
import DetailSoal from "./pages/DetailSoal";

import JenjangSekolah from "./pages/directory/JenjangSekolah";
import DaftarKelas from "./pages/directory/DaftarKelas";
import DaftarMapel from "./pages/directory/DaftarMapel";
import DaftarUjian from "./pages/directory/DaftarUjian";
import DaftarSubtes from "./pages/directory/DaftarSubtes";
import DaftarTopik from "./pages/directory/DaftarTopik";
import DaftarSubTopik from "./pages/directory/DaftarSubTopik";
import DaftarSoal from "./pages/directory/DaftarSoal";

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" />
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Jalur Materi Sekolah */}
          // src/App.jsx
          {/* Jalur Latihan Soal (Sekolah) */}
          <Route path="/latsol" element={<JenjangSekolah filter="sekolah" />} />
          <Route path="/latsol/:jenjang" element={<DaftarKelas />} />
          <Route path="/latsol/:jenjang/:kelas" element={<DaftarMapel />} />
          <Route
            path="/latsol/:jenjang/:kelas/:mapel"
            element={<DaftarTopik />}
          />
          <Route path="/ujian" element={<JenjangSekolah filter="ujian" />} />
          <Route path="/ujian/:jenjang" element={<DaftarKelas />} />
          <Route path="/ujian/:jenjang/:kelas" element={<DaftarMapel />} />
          <Route
            path="/ujian/:jenjang/:kelas/:mapel"
            element={<DaftarTopik />}
          />
          <Route path="/sub-topik/:slugTopik" element={<DaftarSubTopik />} />
          <Route path="/daftar-soal/:slugSubTopik" element={<DaftarSoal />} />
          {/* ACTION PAGE - Menggunakan ID 8 Karakter (a-z0-9) */}
          <Route path="/soal/:questionId" element={<DetailSoal />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
