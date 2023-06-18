import { useState, useEffect } from "react";

// components
import CardProducts from "../CardProducts/CardProducts";

const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> setProducts(json))
  })

  //console.log('products', products)

  return (
    <>
    {
      products.map((product) => {
        return (
          <CardProducts key={product.id} product={product} />
        )
      })
    }
    </>
  );
};

export default ItemListContainer;
