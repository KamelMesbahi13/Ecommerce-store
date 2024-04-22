import { Link, useParams } from "react-router-dom";
import Products from "../Products";
import Rating from "../Components/Rating/Rating";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = Products.find((i) => i._id === productId);

  return (
    <div>
      <div className="container">
        <div>
          <div>
            <div>
              <button>
                <Link to="/" />
                Go Back
              </button>
            </div>
            <div className="flex">
              <div>
                <img
                  className="w-[25rem]"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="ml-4">
                <div className="w-3/4">
                  <h1>{product.name}</h1>
                </div>
                <div>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} Review`}
                  />
                </div>
                <div>
                  <h6>Price: {product.price}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
