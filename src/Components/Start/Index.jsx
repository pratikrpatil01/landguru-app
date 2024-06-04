import PropTypes from "react-bootstrap/esm/Image";
import { FaStar } from "react-icons/fa";

function Star({ color }) {
  return (
    <div>
      <FaStar color={color} />
    </div>
  );
}

Star.prototype = {
  color: PropTypes.any,
};
export default Star;
