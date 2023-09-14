import React from 'react';
import logo from "../fcc_primary_large.svg";
import { Link } from 'react-router-dom';
import "../Oheader.css"
const OtherHeader = () => {
  return (
    <header className="Oheader">
      <div className="Oheader-centered">
        <div className="Ocentered-content">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
    </header>
  );
};

export default OtherHeader;
