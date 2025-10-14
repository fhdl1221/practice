import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center gap-8 p-4 border-b-2 border-t-2 border-gray-800">
      <Link to="/dummy/products" className="hover:text-yellow-400">
        Products
      </Link>
      <Link to="/dummy/carts" className="hover:text-yellow-400">
        Carts
      </Link>
      <Link to="/dummy/posts" className="hover:text-yellow-400">
        Posts
      </Link>
    </div>
  );
}
