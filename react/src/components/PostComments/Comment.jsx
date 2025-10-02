import React from "react";

export default function Comment({ comment }) {
  return (
    <div className="mb-4 border-l-4 border-blue-400 p-3 bg-sky-50">
      <div className="font-bold mb-3">{comment.body}</div>
      <div className="text-gray-400">{comment.user.username}</div>
      <div>{comment.likes}</div>
    </div>
  );
}
