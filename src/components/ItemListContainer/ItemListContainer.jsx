import { useState, useEffect } from "react";

// components
import CardProducts from "../CardProducts/CardProducts";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  });

  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <CardProducts product={product} />
          </div>
        );
      })}
    </>
  );
};

export default ItemListContainer;
