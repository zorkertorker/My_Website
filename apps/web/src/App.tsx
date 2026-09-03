"use client";

import { BrowserRouter as Router, Routes, Route } from "@/lib/router-shim";
import HomePage from "@/views/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
