// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BrandSignUp from './pages/BrandSignUp';
import InfluencerSignUp from './pages/InfluencerSignUp';
import './styles/LandingPage.css';
import './styles/BrandSignUp.css';
import './styles/InfluencerSignUp.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup/brand" element={<BrandSignUp />} />
        <Route path="/signup/influencer" element={<InfluencerSignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
