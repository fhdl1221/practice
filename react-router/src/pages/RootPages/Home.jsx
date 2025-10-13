import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex gap-4 justify-center m-2">
      <Link to="/dummy/products" className="m-2">
        Products 페이지로 이동
      </Link>
      <br />
      <Link to="/dummy/carts" className="m-2">
        Carts 페이지로 이동
      </Link>
      <br />
      <Link to="/dummy/posts" className="m-2">
        Posts 페이지로 이동
      </Link>
    </div>
  );
}
