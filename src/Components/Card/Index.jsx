import React from "react";
import PropTypes from "prop-types";

import demoVideo from "../../assets/demo-video.mp4";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoPlayer from "../VideoPlayer/Index";

const Card = ({ image, title, description, rating, video }) => {
  return (
    <div className="card" style={{ maxWidth: "100%" }}>
      <div className="position">
        {image && <img src={image} className="card-img-top" alt="Card cap" />}
        {video && <VideoPlayer />}
      </div>
      <div className="card-body">
        <div className="d-flex align-items-center mb-2">
          {rating && <span className="text-warning mr-1">{rating}</span>}
          {rating && <span className="text-muted">{rating}</span>}
        </div>
        <h5 className="card-title">{title && title}</h5>
        <p className="card-text text-muted">{description && description}</p>
      </div>
    </div>
  );
};

Card.prototype = {
  image: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  video: PropTypes.any,
};

export default Card;
