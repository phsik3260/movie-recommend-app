import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const API_KEY = "2bdbfd4d9582dc88ecb58370aae3e052";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.results);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.loading}>loading...</div>
      ) : (
        <div className={styles.container}>
          {movies.map((movie) => (
            <Link key={movie.id} to={`detail/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
