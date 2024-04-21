import Products from "../Products";
import Product from "../Components/Product/Product";

const HomeScreens = () => {
  return (
    <div>
      <div className="container">
        <h1 className="my-12">Latest Products</h1>
        <div className="grid grid-cols-1 gap-4 md:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {Products.map((products) => {
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
  );
};

export default HomeScreens;
