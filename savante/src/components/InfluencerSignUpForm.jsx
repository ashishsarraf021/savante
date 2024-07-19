import React from "react";
import "../styles/InfluencerSignUp.css";
import Swal from "sweetalert2";

const InfluencerSignUpForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Details Saved!",
      text: "Your details are saved. Our team will reach out to you within 5 minutes.",
      confirmButtonText: "OK",
      customClass: {
        popup: "my-swal-popup",
        title: "my-swal-title",
        content: "my-swal-content",
        confirmButton: "my-swal-button",
      },
    });
  };
  return (
    <form className="influencer-signup-form">
      <div className="tag-line">
        Join Savante's Innovative <br />
        Influencers Community
      </div>
      <div className="second-tag-line">
        Submit your details and discover the perfect brands that match your
        interests and content!
      </div>
      <div className="details">
        <div className="row">
          <div className="input-group">
            <label>Name:</label>
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <label>Instagram Handle:</label>
            <input
              type="text"
              name="instagramHandle"
              placeholder="Your Insta Handle"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="input-group">
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="99xxxxxxxx"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label>Content Niche:</label>
            <select name="contentNiche">
              <option value="fashion">Fashion</option>
              <option value="beauty">Beauty</option>
              <option value="health">Health</option>
              <option value="technology">Technology</option>
            </select>
          </div>
          <div className="input-group">
            <label>Followers Count:</label>
            <input type="number" name="followersCount" required />
          </div>
        </div>
        <div className="row1">
          <div className="input-group">
            <label>Audience Description:</label>
            <textarea
              name="audienceDescription"
              id="audienceDescription"
              placeholder="The majority of my audience consists of women aged 18-34, primarily from New York City, USA. My niche focuses on sustainable fashion and beauty."
              required
            ></textarea>
          </div>
        </div>
      </div>
      <button type="submit" className="button" onClick={handleSubmit}>
        Submit Details
      </button>{" "}
      <br />
      <br />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-company">
            <h1>SAVANTE</h1>
            <p>
              &copy; {new Date().getFullYear()} Savante. All rights reserved.
            </p>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </form>
  );
};

export default InfluencerSignUpForm;
