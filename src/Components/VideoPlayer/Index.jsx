import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import PropTypes from "prop-types";

const VideoPlayer = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <video
      ref={videoRef}
      width="100%"
      height="auto"
      style={{ display: "block" }}
      onClick={isPlaying ? handleStop : handlePlay}
    >
      <source src={video} type="video/mp4" />
    </video>
  );
};

VideoPlayer.prototype = {
  video: PropTypes.any.isRequired,
};
export default VideoPlayer;
