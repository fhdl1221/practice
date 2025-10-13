import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get("https://dummyjson.com/products");
      const data = res.data.products;
      setProducts(data);
    }
    getProducts();
  });

  return (
    <div>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id} className="m-4 p-4 border border-blue-400">
              <h1>Product ID : {product.id}</h1>
              <p>Title:{product.title}</p>
              <p>{product.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
