import React from "react";
import Product from "./Product";
export const GridView = (props) => {
  const products = props.products;

  // console.log(products);

  return (
 
      <div className="gri">
        {  products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />; //curElem.id is necceassay to pass
        })}
      </div>
  
  );
};
