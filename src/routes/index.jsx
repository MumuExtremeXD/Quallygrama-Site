import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Tips from "../pages/TipsGrass";

import Tip from "../pages/TipGrass";

/* Variedades de Grama */
import EsmeraldaXD from "../pages/Product/Esmeralda";

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gramas" element={<Products />} />
      <Route path="/dicas" element={<Tips />} />
      <Route path="dicas/:id" element={<Tip />} />

      {/* Variedades de Grama */}
      <Route path="/grama-esmeralda/:id" element={<EsmeraldaXD />} />
    </Routes>
  );
}

export default routes;
