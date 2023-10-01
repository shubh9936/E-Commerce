import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import { useFilterContext } from "../context/filter_context";
const Sort = () => {
  const { setGridView, setListView, grid_view , filter_products,sorting } = useFilterContext();
  return (
    <div className="sort">
      <div className="view">
        <button className={grid_view ? "active_sort_button" : "sort_button"}onClick={setGridView}>
          <GridViewIcon />
        </button>
        <button className={!grid_view ? "active_sort_button" : "sort_button"} onClick={setListView}>
          <ViewListOutlinedIcon /> 
        </button>
      </div>

      <div className="total_items">
        <p> {filter_products && `${filter_products.length} Products Available`}  </p>
      </div>

      <div className="filter">
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" onClick={sorting}>
            <option value="lowest">price(lowest)</option>
            <option value="highest">price(highest)</option>
            <option value="a-z">price(a-z)</option>
            <option value="z-a">price(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
