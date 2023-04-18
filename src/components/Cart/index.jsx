import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import "./cart.css";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import Form from "../Form/form";

const Cart = () => {
  const { cartProducts, addProduct, decrease, handleDelete, getTotalQuantity, getTotalPrice, clear } =
    useContext(CartContext);
    const [buyerData, setBuyerData] = useState({})

    const handleSubmit = (data) => {
      setBuyerData(data);
      getOrder()
    };
    const onSubmit = (data) => {
      setBuyerData(data);
    };

    const order = {
      buyer: buyerData && {
        name: buyerData.name || '',
        email: buyerData.email || '',
        phone: buyerData.phone || '',
        adress: buyerData.adress || '',
      },
      items: cartProducts.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
      }))
    };
 

    const getOrder = () => {
      if (buyerData.name && buyerData.email && buyerData.phone && buyerData.adress && cartProducts.length > 0) {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({ id }) => console.log(id));
        console.log(order);
      }
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
                <button onClick={() => handleDelete(product.id)}>
                  <DeleteIcon className="btn-delete" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">There are no products in the cart.</p>
        )}
        <div className="total-cant">
          <p>quantity of products: {getTotalQuantity(cartProducts)}</p>
        </div>
        <div className="total-price">
          <p>total price: ${getTotalPrice(cartProducts)}</p>
        </div>
        <div className="vaciar-carrito">
          <button className="button-modal" onClick={() => clear()}>Delete all</button>
        </div>
      </div>
      <div className="button-container">
        <p>You must first complete the form to finalize the order</p>
      <button type="button" className="button-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Complete form
      </button>
      </div>
      <div className="modal modal-personalizado" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body login">
            <Form onSubmit={handleSubmit} buyerData={buyerData} setBuyerData={setBuyerData}/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Cart;
