import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";

const Progress = () => (
  <div className="p-4 font-bold">Halaman Progress (Coming Soon)</div>
);
const Courses = () => (
  <div className="p-4 font-bold">Halaman Daftar Soal (Coming Soon)</div>
);
const Profile = () => (
  <div className="p-4 font-bold">Halaman Profil (Coming Soon)</div>
);

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" />
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
