import React from "react";
import FilterSection from "./FilterSection";
import ProductList from "./ProductList";
import Sort from "./Sort";
import { useFilterContext } from "../context/filter_context";

const Products = () => {
  const {filter_products} = useFilterContext();
  // console.log (filter_products);
  return (
    <div className="allProducts">
      <div className="first">
        <FilterSection />
      </div>
      <div className="second">
        <div className="sort-filter">
          <Sort />
        </div>
        <div className="main-product">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Products;
