// src/pages/Home.jsx

import React from "react";
import Banner from "../../Components/Banner"; // Assure-toi que ce composant existe
import Cards from "../../Components/Cards"; // Assure-toi que ce composant existe

const Home = () => {
  return (
    <main>
      <Banner page="Home" /> {/* Composant Banner avec la prop page */}
      <Cards /> {/* Utilisation du composant Cards */}
    </main>
  );
};

export default Home;
