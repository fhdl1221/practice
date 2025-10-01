import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

export default function ProductContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get("https://dummyjson.com/products");
      const data = res["data"];
      setProducts(data["products"]);
    }
    getProducts();
  }, []);

  function productSort(key, asc) {
    const newSort = [...products].sort((a, b) => {
      if (asc === true) {
        if (a[key] < b[key]) return -1;
        else if (a[key] > b[key]) return 1;
        else return 0;
      }
      if (asc === false) {
        if (a[key] < b[key]) return 1;
        else if (a[key] > b[key]) return -1;
        else return 0;
      }
    });
    setProducts(newSort);
  }

  return (
    <div>
      <div className="flex gap-3 m-4">
        <button
          onClick={() => productSort("id", true)}
          className="bg-blue-400 px-3 py-1 rounded-xl text-white"
        >
          ID↑
        </button>
        <button
          onClick={() => productSort("id", false)}
          className="bg-blue-400 px-3 py-1 rounded-xl text-white"
        >
          ID↓
        </button>
        <button
          onClick={() => productSort("price", true)}
          className="bg-green-400 px-3 py-1 rounded-xl text-white"
        >
          가격↑
        </button>
        <button
          onClick={() => productSort("price", false)}
          className="bg-green-400 px-3 py-1 rounded-xl text-white"
        >
          가격↓
        </button>
        <button
          onClick={() => productSort("rating", true)}
          className="bg-yellow-400 px-3 py-1 rounded-xl text-white"
        >
          평점↑
        </button>
        <button
          onClick={() => productSort("rating", false)}
          className="bg-yellow-400 px-3 py-1 rounded-xl text-white"
        >
          평점↓
        </button>
      </div>
      {products.map((product) => {
        return <Product key={product.id} product={product}></Product>;
      })}
    </div>
  );
}
