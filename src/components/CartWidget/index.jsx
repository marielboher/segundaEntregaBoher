import React, { useContext } from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import './cartWidget.css'
import { CartContext } from '../../contexts/CartContext';

const CartWidget = () => {
  const { cartProducts } = useContext(CartContext);
  console.log("lenght", cartProducts)
  return (
    <div>
        <LocalMallIcon  className='icon'/>
        <p className='cantidad-productos'>{cartProducts ? cartProducts.length : 0}</p>
    </div>
  )
}

export default CartWidget;