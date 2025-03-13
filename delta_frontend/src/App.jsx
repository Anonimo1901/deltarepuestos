import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gestionr from "./pages/Gestionr";
import Gestions from "./pages/Gestions";
import Gestionp from "./pages/Gestionp";
import Encabezado from "./components/Encabezado";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Encabezado />



      <Routes>
        <Route path="/" element={<Gestionr />} />
        <Route path="/GestionRepuesto" element={<Gestionr />} />
        <Route path="/GestionStock" element={<Gestions />} />
        <Route path="/GestionProveedores" element={<Gestionp />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
