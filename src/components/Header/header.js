import React from "react";
import "./style.css";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <>
      <div className="Header">
        <img src={Logo} />
        <p>Tours</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </>
  );
}
