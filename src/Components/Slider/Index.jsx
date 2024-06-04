import PropTypes from "prop-types";
import Slider from "react-slick";
import "./Index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Sliders = ({ limit, children, title }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: limit,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    adaptiveHeight: true,
  };

  return (
    <div className="container mt-5">
      <div>
        <p className="text-center sub-heading ">QUALITY FEATURES</p>
      </div>
      <div>
        <h2 className="text-center">{title}</h2>
      </div>
      <br />
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

Sliders.prototype = {
  title: PropTypes.string,
  limit: PropTypes.number,
  children: PropTypes.any,
};

export default Sliders;
