import { Link } from "react-router-dom";
import "./productos.css";

const Productos = ({ producto }) => {
  return (
    <Link to={`/item/${producto.id}`} className="padd-10">
      <div className="card-prod">
        <div>
          <img src={producto.image} alt={producto.title} />
          <div className="hover">
            <h5>{producto.title}</h5>
            <p>Precio: ${producto.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Productos;
