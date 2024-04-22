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
                <Link to="/">Go Back</Link>
              </button>
            </div>
            <div className="flex flex-col justify-between md:flex-row">
              <div>
                <img
                  className="w-[25rem]"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="ml-4">
                <div className="mt-4 md:w-3/4">
                  <h1>{product.name}</h1>
                </div>
                <div className="py-2 my-4">
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} Review`}
                  />
                </div>
                <div className="mb-8">
                  <h6 className="italic">Price: {product.price}</h6>
                </div>
                <div className="md:w-3/4">
                  <p>{product.description}</p>
                </div>
              </div>
              <div className="border md:shadow-lg md:px-6 md:py-6 border-grey h-fit">
                <div className="flex items-center">
                  <h6 className="mr-4 md:mr-12">Price:</h6>
                  <h6 className="italic">${product.price}</h6>
                </div>

                <div className="flex items-center mt-6">
                  <h6 className="mr-4 md:mr-12">Status:</h6>
                  <h6 className="italic">
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </h6>
                </div>
                <div className="textCenter">
                  <div className="px-4 py-2 my-8 text-white duration-500 hover:bg-hoverColor bg-mainColor w-fit">
                    <button>Add To Cart</button>
                  </div>
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
