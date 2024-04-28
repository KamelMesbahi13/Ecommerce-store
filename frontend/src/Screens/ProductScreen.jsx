import { Link, useParams } from "react-router-dom";
import Rating from "../Components/Rating/Rating";
import { useGetProductDetailsQuery } from "../../slices/productApiSlice";
import Loader from "../Components/Loader/Loader";

const ProductScreen = () => {
  const { id: productId } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

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

            {isLoading ? (
              <>
                <div className="textCenter">
                  <Loader />
                </div>
              </>
            ) : error ? (
              <>
                {" "}
                <h2>{error?.data?.message || error.error}</h2>
              </>
            ) : (
              <div className="flex flex-col justify-between md:flex-row">
                <div>
                  <img
                    className="w-[60rem]"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="mb-8 md:mb-0 md:ml-4">
                  <div className="mt-4 md:w-3/4">
                    <h1>{product.name}</h1>
                  </div>
                  <div className="py-2 my-4">
                    <Rating
                      value={product.rating || 0}
                      text={`${product.numReviews} Review`}
                    />
                  </div>
                  <div className="mb-4">
                    <h6 className="italic">Price: ${product.price}</h6>
                  </div>
                  <div className="md:w-3/4">
                    <p>{product.description}</p>
                  </div>
                </div>
                <div className="px-6 py-6 border shadow-lg border-grey h-fit">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
