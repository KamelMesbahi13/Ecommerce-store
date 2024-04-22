import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Rating from "../Rating/Rating";

const Product = ({ products }) => {
  return (
    <div className="p-4 border md:h-[23rem] lg:h-[21rem] shadow-md border-grey">
      <div>
        <Link to={`/product/${products._id}`}>
          <img src={products.image} alt={products.name} />
        </Link>
      </div>
      <div>
        <Link to={`/product/${products._id}`}>
          <h3 className="mt-4 mb-2 font-bold">{products.name}</h3>
        </Link>{" "}
        <div>
          <Rating
            value={products.rating}
            text={`${products.numReviews} reviews`}
          />
        </div>
        <div className="italic font-bold">${products.price}</div>
      </div>
    </div>
  );
};

Product.propTypes = {
  products: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    numReviews: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
