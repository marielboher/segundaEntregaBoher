import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import './cartWidget.css'

const CartWidget = () => {
  return (
    <div>
        <LocalMallIcon  className='icon'/>
        <p className='cantidad-productos'>4</p>
    </div>
  )
}

export default CartWidget;