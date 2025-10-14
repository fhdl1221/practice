import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const limit = 5;
  const page = parseInt(searchParams.get("page") || 1);

  useEffect(() => {
    const sortBy = searchParams.get("sortBy") ?? "id";
    const order = searchParams.get("order") ?? "asc";

    const skip = (page - 1) * limit;

    async function getProducts() {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`
      );
      const data = res.data.products;
      setProducts(data);
    }
    getProducts();
  }, [searchParams]);

  function handleClick(sortBy, order) {
    setSearchParams({ sortBy: sortBy, order: order, page: 1 });
  }

  function handlePage(newPage) {
    setSearchParams((prev) => {
      const sortBy = prev.get("sortBy") ?? "id";
      const order = prev.get("order") ?? "asc";
      return { sortBy, order, page: newPage };
    });
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 m-4">
          <button
            onClick={() => {
              handleClick("price", "asc");
            }}
            className="border border-blue-800 p-2 cursor-pointer"
          >
            가격 오름차순
          </button>
          <button
            onClick={() => {
              handleClick("price", "desc");
            }}
            className="border border-blue-800 p-2 cursor-pointer"
          >
            가격 내림차순
          </button>
          <button
            onClick={() => {
              handleClick("id", "asc");
            }}
            className="border border-blue-800 p-2 cursor-pointer"
          >
            ID 오름차순
          </button>
          <button
            onClick={() => {
              handleClick("id", "desc");
            }}
            className="border border-blue-800 p-2 cursor-pointer"
          >
            ID 내림차순
          </button>
        </div>
        <div className="flex gap-4 m-4">
          <button
            onClick={() => handlePage(1)}
            className="border p-2 cursor-pointer"
          >
            초기화
          </button>
          <button
            onClick={() => handlePage(page - 1)}
            className="border p-2 cursor-pointer"
          >
            이전
          </button>
          <span className="p-2">{page}</span>
          <button
            onClick={() => handlePage(page + 1)}
            className="border p-2 cursor-pointer"
          >
            다음
          </button>
        </div>
      </div>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id} className="m-4 p-4 border border-blue-400">
              <Link to={`/dummy/products/${product.id}`}>
                Product ID : {product.id}
              </Link>
              <p>Title: {product.title}</p>
              <p>Price: {product.price}</p>
              <p>{product.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
