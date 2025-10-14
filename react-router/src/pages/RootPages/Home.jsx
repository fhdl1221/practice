import React from "react";
import { Link } from "react-router-dom";
import PATHS from "../../constants/paths";

export default function Home() {
  return (
    <div className="flex justify-center gap-8 p-4 border-b-2 border-t-2 border-gray-800">
      <Link to={PATHS.DUMMY.PRODUCTS} className="hover:text-yellow-400">
        Products
      </Link>
      <Link to={PATHS.DUMMY.CARTS} className="hover:text-yellow-400">
        Carts
      </Link>
      <Link to={PATHS.DUMMY.POSTS} className="hover:text-yellow-400">
        Posts
      </Link>
    </div>
  );
}
