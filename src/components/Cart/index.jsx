import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import DeleteIcon from '@mui/icons-material/Delete';
import './cart.css'

const Cart = () => {
  const { cartProducts, addProduct, decrease, handleDelete } = useContext(CartContext);
 

  return (
    <div className="container-cart">
    <div className="marco-cart">
        {cartProducts && cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <div className="cart-items" key={product.id}>
              <div className="imagen-cart">
                <img src={product.imagen} alt={product.nombre} />
                </div>
                <div className="producto">
                  <p>{product.nombre}</p>
                </div>
                <div className="cantidad">
                  <p className="counter" onClick={() => decrease(product)}>-</p>
                  <p>{product.quantity}</p>
                  <p className="counter" onClick={() => addProduct(product)}>+</p>
                </div>
                <div className="precio">
                  <p>{product.precio * product.quantity}</p>
                </div>
                <div className="cancelar">
                  {console.log(product.id)}
                  <button onClick={() => handleDelete(product.id)}><DeleteIcon className="btn-delete"/></button>
                </div>
            </div>
          ))
        ) : (
          <p className="no-products">There are no products in the cart.</p>
        )}
    </div>
  </div>
  );
};

export default Cart;


