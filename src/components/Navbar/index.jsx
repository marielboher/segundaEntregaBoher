import "./navbar.css";
import CartWidget from "../CartWidget";
import Logo from "../../assets/multimedia/logo-cropped.svg";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  const closeNav = () => {
    setIsNavOpen(false);
  }


  return (
    <>
      <div className="info-envio">
        <p>FREE SHIPPING | FREE NO-HASSLE RETURNS</p>
      </div>
      <div className="nav-container">
        <div className="nav-wrapper">
          <div className="icon-logo">
            <Link to="/">
              <img src={Logo} className="logo"></img>
            </Link>
          </div>
          <div className="icon-mobile">
            <input type="checkbox" id="checkbox" />
            <label for="checkbox" class="toggle"  onClick={toggleNav}>
              <div class="bars" id="bar1"></div>
              <div class="bars" id="bar2"></div>
              <div class="bars" id="bar3"></div>
            </label>
          </div>
          <div className={isNavOpen ? "menu" : "menu-click"}>
            <div className="menu-item">
              <ul className="shop">
                <li>
                  <Link to="/products" onClick={closeNav}>SHOP ALL</Link>
                </li>
                <li className="hover-menu">
                  <Link>CATEGORIES</Link>
                  <ul className="sub-menu">
                    <Link to="/category/chair">
                      <li onClick={closeNav}>CHAIR</li>
                    </Link>
                    <Link to="/category/lamps">
                      <li onClick={closeNav}>LAMPS</li>
                    </Link>
                    <Link to="/category/textile">
                      <li onClick={closeNav}>TEXTILE</li>
                    </Link>
                    <Link to="/category/vases">
                      <li onClick={closeNav}>VASES</li>
                    </Link>
                  </ul>
                </li>
              </ul>
              <div className="cart-container icon">
                <Link to="/cart">
                  <div className="cart" onClick={closeNav}>
                    <CartWidget />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;




// import "./navbar.css";
// import CartWidget from "../CartWidget";
// import Logo from "../../assets/multimedia/logo-cropped.svg";
// import { Link } from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';

// const Navbar = () => {
//   return (
//     <>
//      <div className="info-envio">
//         <p>FREE SHIPPING | FREE NO-HASSLE RETURNS</p>
//       </div>
//       <div className="nav-container">
//         <div className="nav-wrapper">
//           <div className="icon-logo">
//           <img src={Logo} className="logo"></img>
//           </div>
//           <div className="icon-mobile">
//             <MenuIcon/>
//           </div>
//           <div className="menu">
//             <div className="menu-item">
//             <ul className="shop">
//             <li>
//               <Link to="/products">SHOP ALL</Link>
//             </li>
//             <li className="hover-menu">
//               <Link>CATEGORIES</Link>
//               <ul className="sub-menu">
//                 <Link to="/category/chair">
//                   <li>CHAIR</li>
//                 </Link>
//                 <Link to="/category/lamps">
//                   <li>LAPMS</li>
//                 </Link>
//                 <Link to="/category/textile">
//                   <li>TEXTILE</li>
//                 </Link>
//                 <Link to="/category/vases">
//                   <li>VASES</li>
//                 </Link>
//               </ul>
//             </li>
//           </ul>
//           <div className="cart">
//             <Link to="/cart">
//               <CartWidget/>
//             </Link>
//           </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div className="header">
//         <div className="barra-nav">
//           <Link to="/" className="cont-logo">
//             <img src={Logo} className="logo"></img>
//           </Link>
//           <div className="icon-mobile">
//           <MenuIcon/>
//           </div>
//           <ul className="shop">
//             <li>
//               <Link to="/products">SHOP ALL</Link>
//             </li>
//             <li className="hover-menu">
//               <Link>CATEGORIES</Link>
//               <ul className="sub-menu">
//                 <Link to="/category/chair">
//                   <li>CHAIR</li>
//                 </Link>
//                 <Link to="/category/lamps">
//                   <li>LAPMS</li>
//                 </Link>
//                 <Link to="/category/textile">
//                   <li>TEXTILE</li>
//                 </Link>
//                 <Link to="/category/vases">
//                   <li>VASES</li>
//                 </Link>
//               </ul>
//             </li>
//           </ul>
//           <div className="cart">
//             <Link to="/cart">
//               <CartWidget/>
//             </Link>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default Navbar;

