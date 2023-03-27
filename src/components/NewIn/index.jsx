import React from "react";
import { Link } from "react-router-dom";
import "./NewIn.css";

const NewIn = ({
  text,
  title,
  sectionClass,
  bodyClass,
  imgClass,
  imgSrc,
  imgLeft,
}) => {
  return imgLeft ? (
    <div className={sectionClass}>
      <div className="marco-imagen">
        <img src={imgSrc} className={imgClass} />
      </div>
      <div className={bodyClass}>
        <h4>{title}</h4>
        <p>{text}</p>
        <Link to="/category/vases">
        <button className="btn-home">VIEW PRODUCTS</button>
        </Link>
      </div>
    </div>
  ) : (
    <div className={sectionClass}>
      <div className={bodyClass}>
        <h4>{title}</h4>
        <p>{text}</p>
        <Link to="/category/textile">
        <button className="btn-home">VIEW PRODUCTS</button>
        </Link>
      </div>
        <div className="marco-imagen">
          <img src={imgSrc} className={imgClass} />
        </div>
    </div>
  );
};

export default NewIn;
