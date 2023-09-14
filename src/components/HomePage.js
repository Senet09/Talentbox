import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from "../cologo.png";
import Header from './Header';

const HomePage = () => {
  const navigate = useNavigate(); 

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#fff',
    fontFamily: 'Roboto Mono, monospace',
    textAlign: 'center',
    marginLeft: '0',
    display: 'inline-block',
    verticalAlign: 'middle',
    textIndent: '0',
  };

  const textStyle = {
    fontSize: '1rem',
    marginBottom: '20px',
    color: '#fff',
    fontFamily: 'Roboto Mono, monospace',
    textAlign: 'center',
    marginLeft: '0',
    display: 'inline-block',
    verticalAlign: 'middle',
    textIndent: '0', 
  };


  const handleGetStartedClick = () => {
    navigate('/signin');
  };

  return (
    <div className="home-page">
      <h1 style={titleStyle}>Learn code for-free.</h1>
      <h1 style={titleStyle}>Build projects.</h1>
      <h1 style={titleStyle}>Earn certifications.</h1>
      <p style={textStyle} className="home-text">
        Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at <br />
        tech companies including:
      </p>
      <div className="cologodiv">
        <img src={logo} alt="Logo" className="cologo" />
      </div>

     
      <button className="custom-button" onClick={handleGetStartedClick}>
        Get Started (it's free)
      </button>
    </div>
  );
};

export default HomePage;
