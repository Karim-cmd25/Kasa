import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/home";
import About from "../../Pages/about";
import Housing from "../../Pages/housing";
import Error from "../../Pages/Error";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing/:id" element={<Housing />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default Router;
