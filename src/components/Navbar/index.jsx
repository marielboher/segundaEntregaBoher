import "./navbar.css";
import CartWidget from "../CartWidget";
import Logo from "../../assets/multimedia/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="info-envio">
        <p>FREE SHIPPING | FREE NO-HASSLE RETURNS</p>
      </div>
      <div className="header">
        <div className="barra-nav">
          <Link to="/" className="cont-logo">
            <img src={Logo} className="logo"></img>
          </Link>
          <ul className="shop">
            <li>
              <Link to="/products">SHOP ALL</Link>
            </li>
            <li className="hover-menu">
              <Link>CATEGORIES</Link>
              <ul className="sub-menu">
                <Link to="/category/chair">
                  <li>CHAIR</li>
                </Link>
                <Link to="/category/lamps">
                  <li>LAPMS</li>
                </Link>
                <Link to="/category/textile">
                  <li>TEXTILE</li>
                </Link>
                <Link to="/category/vases">
                  <li>VASES</li>
                </Link>
              </ul>
            </li>
            <li>
              <Link>CONTACT</Link>
            </li>
          </ul>
          <ul className="sing-in">
            <li>
              <Link>SING-IN</Link>
            </li>
          </ul>
          <div className="cart">
            <Link to="/cart">
              <CartWidget/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
