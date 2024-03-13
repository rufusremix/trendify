import React from "react";
import "./Item.css";

const Item = ({ product }) => {
  return (
    <>
      <div className="item">
        <img src={product.image} alt="product"></img>
        <p>{product.name}</p>
        <div className="item-price">
          <div className="new-price">₹{product.new_price}</div>
          <div className="old-price">₹{product.old_price}</div>
        </div>
      </div>
    </>
  );
};

export default Item;
