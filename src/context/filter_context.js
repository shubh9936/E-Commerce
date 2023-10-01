import { createContext, useContext } from "react";
import { useProductContext } from "./productcontext";
import { useReducer } from "react";
import { useEffect } from "react";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();
const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: false,
  sorting_value:"highest",
  filters:{
    text : " ",
    category : "all",
    company:"all",
  }, 
};

 
export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  // console.log(products);

  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log(state.filters.text);


  // to set grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  // to set list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };
   
  //sorting
  const sorting = (event)=>{
    let userValue = event.target.value;
    dispatch({type:"GET_SORT_VALUE" , payload:userValue});
  }
 
  //update the f
  const updateFilterValue = (event)=>{
    let name = event.target.name;
    let value = event.target.value;
    
    return dispatch({type:"UPDATE_FILTERS_VALUE" , payload : {name,value}});

  };

  useEffect(()=>{
     dispatch({type:"FILTER_PRODUCTS"});
     dispatch({type:"SORTING_PRODUCTS",payload:products});
  },[products , state.sorting_value , state.filters]); 

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products }); //dispatch reducer function ke andar action ko call karta hai
  }, [products]);
  // console.log(state.filter_products); 

  return (
     <FilterContext.Provider 
    value={{ 
      ...state,
       setGridView ,
       setListView,
       sorting,
       updateFilterValue,
       }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};