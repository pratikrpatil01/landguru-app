import { FaDropbox, FaGoogle, FaPaypal, FaSearch } from "react-icons/fa";
import Star from "../../Components/Start/Index";
import VideoPlayer from "../../Components/VideoPlayer/Index";
import video from "../../assets/demo-video.mp4";
// import { Container } from "react-bootstrap";
import { Container, Col } from "react-bootstrap";

function FirstBlock() {
  return (
    <Container>
      {/*  */}
      <div className="container m-5">
        <div className="row">
          <Col md={5}>
            <Container>
              <div className="d-flex ">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star color="gray" />
                <p className="text-muted">Trusted by over 4,332 students</p>
              </div>
              <h1>Learn Design with Nia Matos</h1>
              <p className="first-block-text">
                Get your blood tests delivered at let home collect sample from
                the victory of the managments that supplies best design system
                guidelines ever.
              </p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Course Name"
                />
                <div className="input-group-append">
                  <span className="input-group-text ml-3" id="basic-addon2">
                    {/* <i className="fas fa-search"></i> */}
                    <FaSearch />
                  </span>
                </div>
              </div>
              <div className="d-flex">
                {/* <p className="text-muted">Sponsored by:</p> */}
                <div className="d-flex align-items-center text-small">
                  {/* <div className="d-flex"> */}

                  <span>Sponsored by:</span>

                  <span className="logo-text ">
                    <FaPaypal />
                    Paypal
                  </span>
                  <span className="logo-text">
                    <FaGoogle />
                    oogle
                  </span>
                  <span className="logo-text">
                    <FaDropbox />
                    Dropbox
                  </span>
                  {/* </div> */}
                </div>
              </div>
            </Container>
          </Col>

          <Col md={4}>
            <div className="h-100 w-100">
              <VideoPlayer video={video} />
            </div>
          </Col>
        </div>
      </div>
    </Container>
  );
}

export default FirstBlock;
