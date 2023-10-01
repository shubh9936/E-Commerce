import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import { useCartContext } from "../context/cart_context";
import CartAmountToggle from "./CartAmountToggle";

const MyCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, colors, stock, name } = product;

  // const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <>
      {/* <div className="select-colo">
        <div className="color">
          <p>
            {colors.map((curColor, index) => {
              return (
                <button
                  key={index}
                  style={{ backgroundColor: curColor }}
                  // className={color===curColor? "btnStyleactive" : "btnstyle"}
                  className="btnstyle"
                  onClick={() => setColor(curColor)}
                >
                  {color === curColor ? <DoneIcon /> : null}
                </button>
              );
            })}
          </p>
        </div>
      </div> */}

      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <div>
        <NavLink
          to="/cart"
          onClick={() => addToCart(id, colors, name, amount, product)}
        >
          <button>ADD TO CART</button>
        </NavLink>
      </div>
    </>
  );
};

export default MyCart;
