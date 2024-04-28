import { useGetProductsQuery } from "../../slices/productApiSlice";
import Loader from "../Components/Loader/Loader";
import Product from "../Components/Product/Product";

const HomeScreens = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <>
          <div className="textCenter">
            <Loader />
          </div>
        </>
      ) : error ? (
        <div>
          <h2>{error?.data?.message || error.error}</h2>
        </div>
      ) : (
        <>
          <div>
            <div className="container">
              <h1 className="my-12">Latest Products</h1>
              <div className="grid grid-cols-1 gap-4 md:gap-12 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((products) => {
                  return (
                    <div key={products._id}>
                      <div>
                        <div>
                          <Product products={products} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomeScreens;
