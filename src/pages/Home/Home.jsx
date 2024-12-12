// src/pages/Home.jsx

import React from "react";
import Banner from "../../Components/Banner";
import Cards from "../../Components/Cards";

const Home = () => {
  return (
    <main>
      <Banner page="Home" /> {/* Composant Banner avec la prop page */}
      <Cards /> {/* Utilisation du composant Cards */}
    </main>
  );
};

export default Home;
