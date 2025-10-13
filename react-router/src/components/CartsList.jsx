import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function CartsList() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    async function getCarts() {
      const res = await axios.get("https://dummyjson.com/carts");
      const data = res.data.carts;
      setCarts(data);
    }
    getCarts();
  }, []);

  return (
    <div>
      <ul>
        {carts.map((cart) => (
          <li key={cart.id} className="m-4 p-4 border border-blue-400">
            <h3>Cart ID: {cart.id}</h3>
            <p>Total: {cart.total}</p>
            <p>Products: {cart.totalProducts}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
