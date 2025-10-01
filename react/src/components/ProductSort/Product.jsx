import React from "react";

export default function Product({ product }) {
  return (
    <div className="p-4 shadow border w-full m-4 rounded-xl">
      <h3 className="font-bold mb-4">{product.title}</h3>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <p>ID: {product.id}</p>
        <p>가격: ${product.price}</p>
        <p>평점: {product.rating}</p>
        <p>재고: {product.stock}</p>
        <p>카테고리: {product.category}</p>
        <p>브랜드: {product.brand}</p>
      </div>
      <p>{product.description}</p>
    </div>
  );
}
