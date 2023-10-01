import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'; 
const CartAmountToggle = ({amount,setDecrease,setIncrease}) => {
  return (
    <div className='quan'> 
        <RemoveIcon className='muiremove'   onClick={()=>setDecrease()}    /> 
        <div className='myq'>{amount}</div>
       <AddIcon  className='muiadd' onClick={()=>setIncrease()}/> 
    </div>
  )
}

export default CartAmountToggle