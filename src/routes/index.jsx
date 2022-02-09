import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

import Home from "../pages/Home";

const Products = loadable(() => import("../pages/Products"));
const Tips = loadable(() => import("../pages/TipsGrass"));

const Tip = loadable(() => import("../pages/TipGrass"));
const Project = loadable(() => import("../pages/Projects"));

const NotFound = loadable(() => import("../pages/NotFound"));
const Terms = loadable(() => import("../pages/Terms"));

/* Variedades de Grama */
const EsmeraldaGrass = loadable(() => import("../pages/Product/Esmeralda"));
const SaoCarlosGrass = loadable(() => import("../pages/Product/SaoCarlos"));
const SantoAgostinhoGrass = loadable(() =>
  import("../pages/Product/SantoAgostinho")
);

const BermudasGrass = loadable(() => import("../pages/Product/Bermudas"));
const CoreanaGrass = loadable(() => import("../pages/Product/Coreana"));
const DiscoveryGrass = loadable(() => import("../pages/Product/Discovery"));

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dicas" element={<Tips />} />
      <Route path="/dicas/:id" element={<Tip />} />
      <Route path="/projeto-educacional" element={<Project />} />
      <Route path="/termos" element={<Terms />} />
      <Route path="/gramas" element={<Products />} />
      {/* Variedades de Grama */}
      <Route path="/grama-esmeralda/:id" element={<EsmeraldaGrass />} />
      <Route path="/grama-sao-carlos/:id" element={<SaoCarlosGrass />} />
      <Route
        path="/grama-santo-agostinho/:id"
        element={<SantoAgostinhoGrass />}
      />
      <Route path="/grama-bermudas/:id" element={<BermudasGrass />} />
      <Route path="/grama-coreana/:id" element={<CoreanaGrass />} />
      <Route path="/grama-discovery/:id" element={<DiscoveryGrass />} />
      {/* NotFound */}
      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}

export default routes;
