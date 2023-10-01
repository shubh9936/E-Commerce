import React from 'react'
import { useCartContext } from '../context/cart_context'
 import CartItem from './CartItem';
 import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Cart = () => {
  const {cart , removeAllItem} = useCartContext();
  console.log(cart);
  return (
    <>
    <div className='cart-heading'>   
      <p>Item</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Subtotal</p>
      <p>Remove</p>
       
    </div>
    <hr/>

    <div className="cart-item">
      {cart.map((curElem)=>{
        return <CartItem key = {curElem.id} {...curElem}/>
      })}
    </div>

    <hr/>

    <div className="continue-shopping">
      <NavLink to="/products">
        <Button   variant='contained'  > CONTINUE SHOPPING</Button>
        </NavLink>
      </div>

      <div className="clear-cart">
      <Button   variant='contained' onClick={()=>removeAllItem}  > CLEAR CART</Button>
      </div>

      
    </>
  )
}

export default Cart