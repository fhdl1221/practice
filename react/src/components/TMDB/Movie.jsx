import React from "react";

export default function Movie({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <div>{movie.overview}</div>
      <div>{movie.release_date}</div>
      <div>{movie.vote_average}</div>
    </div>
  );
}
