import React from "react";
import { useFilterContext } from "../context/filter_context";

const FilterSection = () => {
  const {
    filters: { text },
    updateFilterValue,
    all_products,
  } = useFilterContext();

  //we need unique data
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });

    return (newVal = ["All", ...new Set(newVal)]);
  };
  const categoryOnlyData = getUniqueData(all_products, "category");

  return (
    <div className="all-filters">
      <div className="filter_search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="search"
          />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div className="filter-category-items">
          {categoryOnlyData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;