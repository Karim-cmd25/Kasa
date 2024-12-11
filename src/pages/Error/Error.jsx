// src/pages/Error.jsx

import React from "react";
import { Link } from "react-router-dom"; // Import de Link pour la navigation
import "../styles/Error.scss"; // Import du fichier SCSS

function Error() {
  return (
    <div className="error-container">
      <h1>Page Not Found</h1>
      <p>Désolé, la page que vous recherchez n'existe pas.</p>
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
}

export default Error;
