import { Link } from "react-router-dom";
import "./productos.css";

const Productos = ({ producto }) => {
  return (
    <Link to={`/item/${producto.id}`}>
      <div className="card-prod">
        <div>
          <img src={producto.imagen} alt={producto.nombre} />
          <div className="hover">
            <h5>{producto.nombre}</h5>
            <p>Precio: ${producto.precio}</p>
          </div>
        </div>
      </div>
    </Link>

    
  );
};

export default Productos;


