import React from "react";
import "./style.css";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <>
      <header>
        <img className="logo" src={Logo} alt="Logo" />
        <nav>
          <ul className="nav_links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Tours</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
