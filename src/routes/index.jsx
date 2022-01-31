import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

import Home from "../pages/Home";

const Products = loadable(() => import("../pages/Products"));
const Tips = loadable(() => import("../pages/TipsGrass"));

const EsmeraldaXD = loadable(() => import("../pages/Product/Esmeralda"));
const Tip = loadable(() => import("../pages/TipGrass"));

/* Variedades de Grama */

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
