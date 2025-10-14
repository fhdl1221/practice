import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PATHS from "../../constants/paths";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    async function getProduct() {
      const res = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      setProduct(res.data);
    }
    getProduct();
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white border-2 border-amber-400 shadow-lg rounded-lg p-6 max-w-md w-full">
        <Link
          to={PATHS.DUMMY.PRODUCTS}
          className="text-blue-400 mb-4 inline-block"
        >
          상품 목록 페이지로 이동
        </Link>
        <h1 className="text-2xl font-bold mb-4">상품 상세 페이지</h1>
        <p className="mb-2">
          <strong>상품 ID:</strong> {product.id}
        </p>
        <p className="mb-2">
          <strong>상품 제목:</strong> {product.title}
        </p>
        <p className="mb-2">
          <strong>상품 가격:</strong> {product.price}
        </p>
        <p className="mb-2">
          <strong>상품 설명:</strong> {product.description}
        </p>
      </div>
    </div>
  );
}
