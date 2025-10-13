import React from "react";
import ProductsList from "../../components/ProductsList";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="m-4 p-2 border"
      >
        홈 페이지로 이동
      </button>
      <ProductsList></ProductsList>
    </div>
  );
}
