import React from "react";
import PostsList from "../components/PostsList";
import { useNavigate } from "react-router-dom";

export default function Posts() {
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
      <PostsList></PostsList>
    </div>
  );
}
