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
            <div className="px-4 py-2 my-8 text-white duration-500 hover:bg-hoverColor bg-mainColor w-fit">
              <button>
                <Link to="/" />
                Go Back
              </button>
            </div>
            <div className="flex flex-col md:flex-row">
              <div>
                <img
                  className="w-[25rem]"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="md:ml-4">
                <div className="mt-4 md:w-3/4">
                  <h1>{product.name}</h1>
                </div>
                <div className="py-4 my-4 md:my-8 border-y">
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} Review`}
                  />
                </div>
                <div>
                  <h6 className="italic">Price: {product.price}</h6>
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
