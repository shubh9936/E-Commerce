import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";
import { useEffect } from "react";

const CartContext = createContext();

const intialState = {
  cart: [],
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const addToCart = (id, colors, name, amount, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, colors, name, amount, product },
    });
    // console.log(product);
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const removeAllItem = () => {
    dispatch({ type: "REMOVE_ALL_ITEM", payload: "a" });
  };

//   useEffect(() => {
//     dispatch({ type: "CART_TOTAL_ITEM" });
//   }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, removeAllItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
