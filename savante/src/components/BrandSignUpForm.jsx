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
      Partner with Savante to elevate and <br/> expand your brand exponentially.
      </div>
      <div className="second-tag-line">
      Submit your brand details and uncover the perfect influencers who align with brand vibe and value proposition!
      </div>
      <div className="details">
        <div className="row">
          <div className="input-group">
            <label>Brand Name:</label>
            <input type="text" name="name" placeholder="Brand Name" required />
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
            <label>Company Size:</label>
            <select name="contentNiche">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              {/* <option value="technology">Technology</option> */}
            </select>
          </div>
          <div className="input-group">
            <label>Website Url:</label>
            <input type="text" name="followersCount" required placeholder="brand.com"/>
          </div>
        </div>
        <div className="row">
          <div className="input-group full-width">
            <label>Brand Description:</label>
            <textarea
              name="audienceDescription"
              id="audienceDescription"
              placeholder="Our brand, Acme Fashion, is dedicated to creating stylish,
              sustainable clothing for modern women. We believe in eco-friendly
              practices and ethical production, ensuring that our products not
              only look good but also do good. Our core values include
              sustainability, transparency, and quality craftsmanship. Our target
              market consists of women aged 18-35 who are conscious about the
              environment and seek fashionable yet sustainable wardrobe options."
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
