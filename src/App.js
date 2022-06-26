import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail";

function App() {
  return (
    <div className="py-2 px-3 md:py-6 md:px-20 text-darkBlue bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetail />} />
      </Routes>
    </div>
  );
}

export default App;
