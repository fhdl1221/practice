import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import Post from "./Post";
import axios from "axios";

export default function Container() {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [number, setNumber] = useState(0);
  const [inputNumber, setInputNumber] = useState(0);

  useEffect(() => {
    async function getInfo() {
      const res1 = await axios.get(`https://dummyjson.com/posts/${number}`);
      const res2 = await axios.get(
        `https://dummyjson.com/comments/post/${number}`
      );

      setPost(res1["data"]);
      setComments(res2["data"]["comments"]);
    }
    getInfo();
  }, [number]);

  function handleChange(event) {
    setInputNumber(event.target.value);
  }

  function handleClick() {
    setNumber(inputNumber);
  }

  return (
    <div className="p-3">
      <div className="flex gap-3 items-center mb-4">
        <span className="text-xl">글 번호</span>
        <input
          value={inputNumber}
          onChange={(event) => handleChange(event)}
          type="number"
          name="number"
          className="border-1"
        />
        <button
          onClick={() => handleClick()}
          type="submit"
          className="bg-blue-300 p-2"
        >
          검색
        </button>
      </div>
      <div className="mb-5">{post && <Post post={post}></Post>}</div>
      <div>
        <h2 className="font-bold text-xl mb-3">댓글</h2>
        {comments.length > 0 ? (
          comments.map((comment) => <Comment comment={comment}></Comment>)
        ) : (
          <p>댓글이 없습니다.</p>
        )}
      </div>
    </div>
  );
}
