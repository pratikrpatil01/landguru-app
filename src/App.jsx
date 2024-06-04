import Slider from "./Components/Slider/Index";
import VideoPlayer from "./Components/VideoPlayer/Index";
import demoVideo from "./assets/demo-video.mp4";
import Accordion from "./Components/Accordion/Index";
import "./App.css";
import Header from "./Components/Header/Index";
import Star from "./Components/Start/Index";
import FirstBlock from "./Screen/Main-content/First_Block";
import { FaEye } from "react-icons/fa";
import SecondBlock from "./Screen/Main-content/SecondBLock";
import ThirdBlock from "./Screen/Main-content/ThirdBlock";

function App() {
  return (
    <>
      <div className="firstBlock">
      <Header />
        <FirstBlock />
      </div>
      <Slider title="Tutorials that people love most" limit={3}>
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
              How to work with prototype design with adobe xd featuring tools
            </h6>
          </div>
          <div>
            <span>
              <FaEye />
            </span>
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
            <Star color="" />
            <span>4.5 (524 reviews)</span>
          </div>
          <div>
            <h6>
              Create multiple artboard by using figma prototyping tools
              development
            </h6>
          </div>
          <div>
            <span>
              <FaEye />
            </span>
            3,532 students watched
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
              Convert your web layout theming easily with sketch zeplin
              extension
            </h6>
          </div>
          <div>
            <span>
              <FaEye />
            </span>
            1,037 students watched
          </div>
        </div>{" "}
      </Slider>
      <SecondBlock />
      <ThirdBlock />
      <Accordion />

    </>
  );
}

export default App;
