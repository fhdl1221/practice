import React from "react";

export default function ProductCard({ product }) {
  function isStock(stock) {
    if (stock === true) {
      return <span className="text-green-600">재고 있음</span>;
    } else {
      return <span className="text-red-600">품절</span>;
    }
  }

  function tagArray(tags) {
    return tags.map((tag) => {
      return <span className="bg-blue-100 rounded-4xl px-3 py-1">{tag}</span>;
    });
  }

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="font-bold mb-1">{product.name}</h2>
      <p className="text-green-600 font-bold mb-1">{product.price}</p>
      <p className="mb-1">재고: {isStock(product.inStock)}</p>
      <p className="mb-2">평점: {product.rating}</p>
      <div className="flex flex-wrap gap-2">{tagArray(product.tags)}</div>
    </div>
  );
}
