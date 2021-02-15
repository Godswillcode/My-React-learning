import React from "react";
import { useParams } from "react-router-dom";

function Product({ data }) {
  const { productName } = useParams();
  // console.log(productId);

  const product = data.find((p) => p.name === productName);
  let productData;

  if (product) {
    productData = (
      <div className="text-center">
        <h3> {product.name} </h3>
        <img src={product.image} alt={product.name} height="300" width="400" />
        <p>{product.description}</p>
        <hr />
        <h4>{product.status}</h4>
      </div>
    );
  } else {
    productData = <h2> Sorry. Product doesn't exist </h2>;
  }



  
  return <div>{productData}</div>;
}

export default Product;
