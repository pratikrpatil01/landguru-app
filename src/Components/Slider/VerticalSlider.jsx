import Slider from "react-slick";
import "./Index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

const VerticalSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };

  return (
    <div className="container thirdBlock mt-5">
      <Slider {...settings}>
        <div className="container ">
          <Row className="mb-4">
            <Col md={6}>
              <div className="card text-center">
                <div className="card-body">
                  <h2 className="card-title box-title-1">150+</h2>
                  <p className="card-text">
                    Free online tutorials videos avaialble
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="card text-center mt-5">
                <div className="card-body">
                  <h2 className="card-title box-title-2">80K+</h2>
                  <p className="card-text">We have more than students</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="container">
          <Row className="mb-4">
            <Col md={6}>
              <div className="card text-center">
                <div className="card-body">
                  <h2 className="card-title box-title-3">90+</h2>
                  <p className="card-text">Daily updated blog post maintain</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="card text-center mt-5">
                <div className="card-body">
                  <h2 className="card-title box-title-4">& 3M</h2>
                  <p className="card-text">
                    {" "}
                    Job posted everydays with qualification
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="container">
          <Row className="mb-4">
            <Col md={6}>
              <div className="card text-center">
                <div className="card-body">
                  <h2 className="card-title box-title-1">150+</h2>
                  <p className="card-text">
                    Free online tutorials videos avaialble
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="card text-center mt-5">
                <div className="card-body">
                  <h2 className="card-title box-title-2">80K+</h2>
                  <p className="card-text">We have more than students</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="container">
          <Row className="mb-4">
            <Col md={6}>
              <div className="card text-center">
                <div className="card-body">
                  <h2 className="card-title box-title-3">90+</h2>
                  <p className="card-text">Daily updated blog post maintain</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="card text-center mt-5">
                <div className="card-body">
                  <h2 className="card-title box-title-4">& 3M</h2>
                  <p className="card-text">
                    {" "}
                    Job posted everydays with qualification
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Slider>
    </div>
  );
};

export default VerticalSlider;
