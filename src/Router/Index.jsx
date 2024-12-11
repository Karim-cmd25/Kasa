import React from "react";
import { Routes, Route } from "react-router-dom";

// Importation des pages
import Home from "../pages/Home";
import About from "../pages/About";
import Details from "../pages/Details";
import Error from "../pages/Error";

const Router = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} /> {/* Page d'accueil */}
        <Route path="/about" element={<About />} /> {/* Page à propos */}
        <Route path="/details/:id" element={<Details />} />{" "}
        {/* Page des détails avec paramètre dynamique */}
        <Route path="/*" element={<Error />} />{" "}
        {/* Page d'erreur pour les routes non trouvées */}
      </Routes>
    </div>
  );
};

export default Router;
