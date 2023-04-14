import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import "./cart.css";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const Cart = () => {
  const { cartProducts, addProduct, decrease, handleDelete } =
    useContext(CartContext);

  const order = {
    buyer: {
      name: "Mariel",
      email: "marielbpher@gmail.com",
      phone: "123123",
      adress: "roma 12",
    },
    items: cartProducts.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    // total: totalprice()
  };

  const getOrder = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

  return (
    <div className="container-cart">
      <div className="marco-cart">
        {cartProducts && cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <div className="cart-items" key={product.id}>
              <div className="imagen-cart">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="producto">
                <p>{product.title}</p>
              </div>
              <div className="cantidad">
                <p className="counter" onClick={() => decrease(product)}>
                  -
                </p>
                <p>{product.quantity}</p>
                <p className="counter" onClick={() => addProduct(product)}>
                  +
                </p>
              </div>
              <div className="precio">
                <p>$ {(product.price * product.quantity).toFixed(2)}</p>
              </div>
              <div className="cancelar">
                {console.log(product.id)}
                <button onClick={() => handleDelete(product.id)}>
                  <DeleteIcon className="btn-delete" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">There are no products in the cart.</p>
        )}
        <div className="vaciar-carrito">
          <button>Delete all</button>
        </div>
      </div>
      <div className="cont-finalizar">
        <button className="finalizar-compra" onClick={getOrder}>Finalizar compra</button>
      </div>
    </div>
  );
};

export default Cart;
