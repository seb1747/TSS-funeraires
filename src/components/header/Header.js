import React from "react";
import Navbar from "../Navbar/Navbar";
import "./header.css";
import Logo from "../../images/logo.jpg";

export default function header() {
  return (
    <header className="header_Wrapper">
      <div className="logo">
        <img className="logoImg" src={Logo} alt=" logo de l'entreprise" />
      </div>
      <Navbar />
    </header>
  );
}
