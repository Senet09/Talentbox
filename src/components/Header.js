import React from 'react';
import logo from "../fcc_primary_large.svg";
import { Link } from 'react-router-dom';

const Header = () => {
  const token = localStorage.getItem('signin-token');

  return (
    <header className="header">
      <div className="header-left">
        <div className="search-bar">
          <input type="text" placeholder="Search 9000+ tutorials" />
        </div>
      </div>
      <div className="header-center">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header-right">
        <button className="menu-button">Menu</button>
        {token ? (
          <button
            className="signin-button"
            onClick={() => {
              localStorage.removeItem('signin-token');
              window.location.reload();
            }}
          >
            Logout
          </button>
        ) : (
      
          <Link to="/signin" className="signin-button">
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
