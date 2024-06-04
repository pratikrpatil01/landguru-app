// import { Container } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import VerticalSlider from "../../Components/Slider/VerticalSlider";

function SecondBlock() {
  return (
    <Container>
      {/*  */}
      <div className="container m-5">
        <div className="container">
          <Row className="mb-4">
            <Col md={6}>
              <VerticalSlider />
            </Col>

            <Col md={5}>
              <Container>
                <p style={{ color: "#EF9E48" }}>CORE FEATURE</p>
                <h1>
                  Smart jackpots that you may love this anytime & anywhere
                </h1>
                <p className="first-block-text">
                  Get your tests delivered at let home collect sample from the
                  victory of the managments that supplies best design system
                  guidelines ever. Get your tests delivered at let home collect
                  sample.
                </p>
                <div className="input-group mb-3">
                  <button className="bg-red explore-btn">
                    Explore details
                  </button>
                </div>
              </Container>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default SecondBlock;
