import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Components/Product/Product";

const HomeScreens = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
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
  );
};

export default HomeScreens;
