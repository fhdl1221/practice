import React from "react";

export default function Post({ post }) {
  return (
    <div className="border p-4">
      <h2 className="text-2xl font-bold mb-2">
        No. {post.id} {post.title}
      </h2>
      <p className="mb-3">{post.body}</p>
      <div className="text-sm text-gray-500">userId: {post.userId}</div>
      <div className="text-sm text-gray-500">views: {post.views}</div>
    </div>
  );
}
