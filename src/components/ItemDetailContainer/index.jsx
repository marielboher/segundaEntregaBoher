import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./itemDetailContainer.css";
import { CartContext } from "../../contexts/CartContext";

const ItemDetailContainer = ( { data } ) => {
  const { addProduct } = useContext(CartContext)
  const [producto, setProducto] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/database/bbdd.json`)
      .then((res) => res.json())
      .then((data) => {
        const productoEncontrado = data.find((producto) => producto.id == id);
        setProducto(productoEncontrado);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [id]);

  

  // console.log("producto", addProduct)

  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : producto ? (
        <div className="container-details">
          <div className="img-details">
            <img src={producto.imagen} alt={producto.nombre} />
          </div>
          <div className="info-details">
            <h1>{producto.nombre}</h1>
            <p>{producto.descripcion}</p>
            <p>{producto.categoria}</p>
            <p>{producto.precio}</p>
            <button className="btn" onClick={() => addProduct(producto)}>ADD TO BAG</button>

          </div>
        </div>
      ) : (
        <p>No se encontró el producto con ID {id}</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;