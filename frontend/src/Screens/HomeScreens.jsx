import Products from "../Products";

const HomeScreens = () => {
  return (
    <div>
      <div className="container">
        <h1>Latest Products</h1>
        <div className="grid grid-cols-1 gap-4 md:gap-12 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {Products.map((products) => {
            return (
              <div key={products._id}>
                <div>
                  <div>
                    <h3>{products.name}</h3>
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
