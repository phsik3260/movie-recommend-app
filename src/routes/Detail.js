import React, { useState, useEffect } from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const API_KEY = "2bdbfd4d9582dc88ecb58370aae3e052";

export default function Detail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,images`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovie(json);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className={styles.poster}
          />
          <div className={styles.info}>
            <div className={styles.title}>{movie.original_title}</div>
            <ul className={styles.genres}>
              {movie.genres.map((genre, index) => (
                <li className={styles.genre} key={index}>
                  {genre.name}
                </li>
              ))}
            </ul>
            <div className={styles.overview}>{movie.overview}</div>
          </div>
        </div>
      )}
    </>
  );
}
