// src/components/Header/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"; // Import des styles du Header

const Header = () => {
  return (
    <header className="header">
      <h1>MonSite</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;