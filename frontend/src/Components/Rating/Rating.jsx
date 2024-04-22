import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";

const Rating = ({ value, text }) => {
  return (
    <div>
      <div className="container">
        <div className="rating">
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
          <span className="rating-text">{text && text}</span>
        </div>
      </div>
    </div>
  );
};

export default Rating;
