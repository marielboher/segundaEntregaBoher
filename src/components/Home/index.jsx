import "./home.css";
import fondo from "../../assets/multimedia/home3.jpeg";
import Jarron from"../../assets/multimedia/jarron2.webp"
import Textile from "../../assets/multimedia/textil3.webp";
import NewIn from "../NewIn";
import Featured from "../Featured";
import ItemListContainer from "../ItemListContainer";
import { useEffect, useState } from "react";
import axios from "axios";

const DATABASE = '/database/bbdd.json';

const Home = () => {

    const [productos, setProductos] = useState([]);
  
    const getProd = async () => {
      try {
        const response = await axios(DATABASE);
        setProductos(response.data);
      } catch (error) {
        console.log("ERROR: " + error);
      }
    };
      
    useEffect(() => {
      getProd();
    }, []);
  
  const textKitchen = "Stock your home with our cooking and decoration essentials designed to last and look beautiful in your home. Whether you are searching for a gift or simply wanting to add aesthetic to your home, we have a variety of unique products to choose from."
  const textKids ="Give your home a makeover with our beautiful collection of textiles designed to last and bring comfort to your home! Whether you're looking for a quick update for your living room, bedroom, or any other room in the house, our collection of textiles has everything you need to create an inviting and stylish space."

  return (
    <div className="container-home">
      <div className="home">
        <div className="info">
          <p>WE CREATE EXCEPTIONAL PIECES THAT DEFINE SPACES.</p>
        </div>
        <img src={fondo} className="imagen-inicio" />
      </div>
      <div className="new-in">
        <h4>NEW IN-STORE</h4>
      </div>
      <NewIn
      title={"VASES"}
      text={textKitchen}
      sectionClass={"section-1"}
      bodyClass={"kitchen"}
      imgClass={"imagen-kitchen"}
      imgSrc={Jarron}
      imgLeft={true}/>
      <NewIn 
      title={"TEXTILES"}
      text={textKids}
      sectionClass={"section-2"}
      bodyClass={"kids"}
      imgClass={"imagen-kitchen"}
      imgSrc={Textile}
      imgLeft={false}/>
      <Featured productos={productos}/>
     </div>
  );
};

export default Home;
