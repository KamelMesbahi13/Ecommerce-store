import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";

const Rating = ({ value, text }) => {
  return (
    <div>
      <div>
        <div className="flex items-center mb-1 rating">
          <div className="flex">
            <span>
              {value >= 1 ? (
                <FaStar />
              ) : value >= 0.5 ? (
                <FaStarHalfAlt />
              ) : (
                <FaRegStar />
              )}
            </span>

            <span>
              {value >= 2 ? (
                <FaStar />
              ) : value >= 1.5 ? (
                <FaStarHalfAlt />
              ) : (
                <FaRegStar />
              )}
            </span>

            <span>
              {value >= 3 ? (
                <FaStar />
              ) : value >= 2.5 ? (
                <FaStarHalfAlt />
              ) : (
                <FaRegStar />
              )}
            </span>

            <span>
              {value >= 4 ? (
                <FaStar />
              ) : value >= 3.5 ? (
                <FaStarHalfAlt />
              ) : (
                <FaRegStar />
              )}
            </span>

            <span>
              {value >= 5 ? (
                <FaStar />
              ) : value >= 4.5 ? (
                <FaStarHalfAlt />
              ) : (
                <FaRegStar />
              )}
            </span>
          </div>

          <span className="rating-text">{text && text}</span>
        </div>
      </div>
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string,
};

export default Rating;
