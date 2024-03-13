import React from "react";

import Hero from "../Components/Hero/Hero";
import Item from "../Components/Item/Item";

import popularProducts from "../data/popularProducts";

const Shop = () => {
  return (
    <>
      <Hero />
      {popularProducts.map((product) => {
        return <Item product={product} />;
      })}
    </>
  );
};

export default Shop;
