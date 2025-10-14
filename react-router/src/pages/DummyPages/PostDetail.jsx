import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PATHS from "../../constants/paths";

export default function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function getPosts() {
      const res = await axios.get(`https://dummyjson.com/posts/${postId}`);
      setPost(res.data);
    }
    getPosts();
  }, [postId]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white border-2 border-amber-400 shadow-lg rounded-lg p-6 max-w-md w-full">
        <Link to={PATHS.DUMMY.POSTS} className="text-blue-400 mb-4 inline-block">
          게시글 목록 페이지로 이동
        </Link>
        <h1 className="text-2xl font-bold mb-4">게시글 상세 페이지</h1>
        <p className="mb-2">
          <strong>게시글 ID:</strong> {post.id}
        </p>
        <p className="mb-2">
          <strong>게시글 제목:</strong> {post.title}
        </p>
        <p className="mb-2">{post.body}</p>
        <p className="mb-2">
          <strong>Tags:</strong> {post.tags.join(", ")}
        </p>
      </div>
    </div>
  );
}
