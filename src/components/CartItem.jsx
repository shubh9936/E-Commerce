import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import { useCartContext } from "../context/cart_context";


const CartItem = ({ id, name, amount, colors, image, price, max }) => {
  const [amoun, setAmount] = useState(amount);
  const {removeItem } = useCartContext();

  const setDecrease = () => {
    amoun > 1 ? setAmount(amoun - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amoun < max ? setAmount(amoun + 1) : setAmount(max);
  };

  return (
    <div className="carty">
      <div className="cart-image-name">
        <figure>
          <img src={image} alt="myimg" />
        </figure>
        <h4>{name}</h4>
      </div>

      <div className="item-price">
        <p>₹{price}</p>
      </div>

      <div className="item-quantity">
        <p>
          <AddIcon className="ad" onClick={setIncrease}>
            {" "}
          </AddIcon>
          <div className="amo" >{amoun}</div>
          <RemoveIcon className="remo" onClick={setDecrease}>
            {" "}
          </RemoveIcon>
        </p>
      </div>

      <div className="subTotal">₹{price * amoun}</div>

      <div className="remove-item">
        <DeleteOutlineTwoToneIcon  onClick={()=>removeItem(id)}/>
      </div>


    </div>
  );
};

export default CartItem;
