// src/components/BrandSignUpForm.js
import React from 'react';
import '../styles/BrandSignUp.css';

const BrandSignUpForm = () => {
  return (
    <form className="brand-signup-form">
      <h2>Brand Sign-Up</h2>
      <label>
        Brand Name:
        <input type="text" name="brandName" required />
      </label>
      <label>
        Website URL:
        <input type="url" name="websiteUrl" required />
      </label>
      <label>
        Niche/Industry:
        <select name="niche">
          <option value="fashion">Fashion</option>
          <option value="beauty">Beauty</option>
          <option value="health">Health</option>
          <option value="technology">Technology</option>
        </select>
      </label>
      <label>
        Company Size:
        <select name="companySize">
          <option value="startup">Startup</option>
          <option value="small">Small</option>
          <option value="mid">Mid</option>
          <option value="large">Large</option>
        </select>
      </label>
      <label>
        Instagram Handle:
        <input type="text" name="instagramHandle" required />
      </label>
      <label>
        Brand Description:
        <textarea name="brandDescription" placeholder="Our brand, Acme Fashion, is dedicated to creating stylish, sustainable clothing for modern women. We believe in eco-friendly practices and ethical production, ensuring that our products not only look good but also do good. Our core values include sustainability, transparency, and quality craftsmanship. Our target market consists of women aged 18-35 who are conscious about the environment and seek fashionable yet sustainable wardrobe options." required></textarea>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default BrandSignUpForm;
