import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function MovieSearch() {
  const [input, setInput] = useState(""); // 입력값
  const [search, setSearch] = useState(""); // 실제 검색어
  const [movies, setMovies] = useState([]); // 검색 결과

  useEffect(() => {
    async function fetchData() {
      const config = {
        method: "GET",
        url: `${BASE_URL}/search/movie`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          language: "ko-KR",
          page: 1,
          query: search,
        },
      };
      const res = await axios(config);
      setMovies(res.data.results);
    }

    fetchData();
  }, [search]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearch(input);
  }

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)} className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(event) => handleChange(event)}
          className="border p-1 mr-2"
        />
        <button type="submit" className="bg-blue-300 px-3 py-1">
          검색
        </button>
      </form>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Movie movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}
