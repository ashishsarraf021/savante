// src/components/InfluencerSignUpForm.js
import React from 'react';
import '../styles/InfluencerSignUp.css';

const InfluencerSignUpForm = () => {
  return (
    <form className="influencer-signup-form">
      <h2>Influencer Sign-Up</h2>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Instagram Handle:
        <input type="text" name="instagramHandle" required />
      </label>
      <label>
        Content Niche:
        <select name="contentNiche">
          <option value="fashion">Fashion</option>
          <option value="beauty">Beauty</option>
          <option value="health">Health</option>
          <option value="technology">Technology</option>
        </select>
      </label>
      <label>
        Followers Count:
        <input type="number" name="followersCount" required />
      </label>
      <label>
        Audience Description:
        <textarea name="audienceDescription" placeholder="The majority of my audience consists of women aged 18-34, primarily from New York City, USA. My niche focuses on sustainable fashion and beauty." required></textarea>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default InfluencerSignUpForm;
