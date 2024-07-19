// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="header">
        <div className="brand-name">SAVANTE</div>
        <div className="Head-option"> 
            <div className="header-options">About</div>
            <div className="header-options">Home</div>
            <div className="header-options">Contact Us</div>
            <div className="header-options">Products</div>
        </div>
      </div>
      <div className="body">
        <div className="up-body">
            <div className="tag-line">
            Unleash Perfect Matches <br/>with Savante
            </div>
            <div className="second-tag-line">
            Experience the future of influencer marketing with our innovative AI-driven platform.
            </div>
            <div className="buttons">
              <button className="button">Start as Influencer</button>
              <button className="button">Join as Brand</button>
            </div>
            <div className="video-container">
            <iframe loading="lazy" className="video" src="https://www.youtube.com/embed/-jRkI1nOwbc?si=j-ogcEik2maBCR0O?rel=0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="true"></iframe> 
            </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
