import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PATHS from "../constants/paths";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const limit = 5;
  const page = parseInt(searchParams.get("page") || 1);

  useEffect(() => {
    const sortBy = searchParams.get("sortBy") ?? "id";
    const order = searchParams.get("order") ?? "asc";

    async function getPosts() {
      const skip = (page - 1) * limit;

      const res = await axios.get(
        `https://dummyjson.com/posts?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`
      );
      const data = res.data.posts;
      setPosts(data);
    }
    getPosts();
  }, [searchParams, page]);

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
              handleClick("title", "asc");
            }}
            className="border border-blue-800 p-2 cursor-pointer"
          >
            제목 오름차순
          </button>
          <button
            onClick={() => {
              handleClick("title", "desc");
            }}
            className="border border-blue-800 p-2 cursor-pointer"
          >
            제목 내림차순
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
        {posts.map((post) => {
          return (
            <li key={post.id} className="m-4 p-4 border border-blue-400">
              <Link to={PATHS.DUMMY.getPostDetail(post.id)}>
                Post ID : {post.id}
              </Link>
              <p>Title : {post.title}</p>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
