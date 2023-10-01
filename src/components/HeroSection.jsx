import React from 'react'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom';
const HeroSection = (props) => {
  return (
    <div> 
        <div className='hero'>
            <p className='para'>WELCOME TO</p>
            <h1> {props.title}</h1>
            
            <img src='./images/hero.jpg' alt='error' />
             
            <p className='par'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, blanditiis vitae commodi soluta deserunt labore sequi modi assumenda amet impedit obcaecati nihil enim voluptates eaque quis sunt fugiat incidunt iure,   </p>
            <NavLink to="/products">
            <Button color='primary' variant='contained'> SHOP NOW</Button>
            </NavLink>
            {/* <button>SHOP NOW</button> */}
            
        </div>
    </div>
  )
}

export default HeroSection;