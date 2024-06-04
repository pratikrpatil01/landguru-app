import Star from "../../Components/Start/Index";
import VideoPlayer from "../../Components/VideoPlayer/Index";
import demoVideo from "../../assets/demo-video.mp4";
// import { Container } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Sliders from "../../Components/Slider/Index";

function ThirdBlock() {
  return (
    <Container>
      {/*  */}
      <div className="container m-5">
        <div className="container">
          <Row className="mb-4">
            <Col md={6}>
              <Sliders limit={1.5}>
                <div className="container">
                  <VideoPlayer video={demoVideo} />
                  <div className="d-flex">
                    <Star color="yellow" />
                    <Star color="yellow" />
                    <Star color="yellow" />
                    <Star color="yellow" />
                    <Star color="yellow" />
                    <span>5.0 (392 reviews)</span>
                  </div>
                  <div>
                    <h6>
                      How to work with prototype design with adobe xd featuring
                      tools
                    </h6>
                  </div>
                  <div>
                    <span>{/* <FaEye /> */}</span>
                    2,538 students watched
                  </div>
                </div>
                <div className="container">
                  <VideoPlayer video={demoVideo} />
                  <div className="d-flex">
                    <Star color="yellow" />
                    <Star color="yellow" />
                    <Star color="yellow" />
                    <Star color="yellow" />
                    <Star color="yellow" />
                    <span>5.0 (392 reviews)</span>
                  </div>
                  <div>
                    <h6>
                      How to work with prototype design with adobe xd featuring
                      tools
                    </h6>
                  </div>
                  <div>
                    <span>{/* <FaEye /> */}</span>
                    2,538 students watched
                  </div>
                </div>
              </Sliders>
            </Col>

            <Col md={5}>
              <Container>
                <p style={{ color: "#EF9E48" }}>FREE TUTORIAL</p>
                <h1>More than thousand of free tutorial upload every weeks</h1>
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

export default ThirdBlock;
