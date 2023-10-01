import React from "react";
import { useProductContext } from "../context/productcontext";
import Product from "./Product";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  console.log(featureProducts)
  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <div className="feature_services">
      <div className="head">
        <p>CHECK NOW!</p>
        <h1>Our Feature Services</h1>
      </div>
      <div className="feature_images">
        {featureProducts.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default FeatureProduct;
