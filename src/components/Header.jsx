 import React from 'react';
 import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
 
 const Header = () => {
   return (
      <div className='hea'>
        <NavLink to="/">
          <img src='./images/logo.jpeg' alt='l'/>
        </NavLink>
        <Navbar/>
        
      </div>
   )
 }
 
 export default Header