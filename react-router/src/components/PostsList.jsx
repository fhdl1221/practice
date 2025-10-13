import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const res = await axios.get("https://dummyjson.com/posts");
      const data = res.data.posts;
      setPosts(data);
    }
    getPosts();
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id} className="m-4 p-4 border border-blue-400">
              <h1>Post ID : {post.id}</h1>
              <p>Title : {post.title}</p>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
