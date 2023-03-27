import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Productos from "../Productos";
import axios from "axios";
import "./itemListContainer.css";

const ItemListContainer = () => {
  const [productos, setProducto] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/database/bbdd.json");
      if (categoryName) {
        setProducto(
          response.data.filter((producto) => producto.categoria === categoryName)
        );
      } else {
        setProducto(response.data);
      }
    };
    fetchData();
  }, [categoryName]);

  return (
    <div>
      <div className="productos">
        {productos.map((producto) => (
          <Productos key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
