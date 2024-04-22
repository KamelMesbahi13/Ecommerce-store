import { useParams } from "react-router-dom";
import Products from "../Products";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = Products.find((i) => i._id === productId);

  return (
    <div>
      <div className="container">
        <div>
          <div>
            <div>
              <button>Go Back</button>
            </div>
            <div className="flex">
              <div>
                <img src={product.image} alt={product.name} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
