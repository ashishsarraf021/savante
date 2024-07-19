import React from "react";
import PropTypes from "prop-types";
import "../styles/Card.css";

const Card = ({ imageUrl, name, feedback }) => {
  return (
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="card-content">
        <h3 className="card-name">{name}</h3>
        <p className="card-feedback">{feedback}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
};

export default Card;
