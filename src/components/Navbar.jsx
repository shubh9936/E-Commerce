import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';

const Navbar = () => {
   const {total_item} = useCartContext();
  return (
     <div className='nav'>
        <ul>
            <NavLink to="/"><li  >HOME</li></NavLink>
            <NavLink to="/about"><li >ABOUT</li></NavLink>
            <NavLink to="/products"><li >PRODUCTS</li></NavLink>
            <NavLink to="/contact"><li >CONTACT</li></NavLink>
             <NavLink to="/cart">
            <FiShoppingCart className="cart-trolly"/>
            <span>{total_item}</span>
            </NavLink>
        </ul>
     </div>
  )
}

export default Navbar