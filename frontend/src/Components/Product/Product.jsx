/* eslint-disable react/prop-types */
const Product = ({ products }) => {
  return (
    <div className="p-4 border h-[20rem] border-grey shadow-md">
      <div>
        <a href={`/product/${products._id}`}>
          <img src={products.image} alt={products.name} />
        </a>
      </div>
      <div>
        <a href={`/product/${products._id}`}>
          <h3>{products.name}</h3>
        </a>{" "}
        <div>${products.price}</div>
      </div>
    </div>
  );
};

export default Product;
