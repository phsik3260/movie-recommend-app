import React from "react";
import styles from "./Movie.module.css";
import { Link } from "react-router-dom";

const Movie = ({ movie, genres }) => {
  return (
    <Link to={`/movie/${movie.id}`} style={{ all: "unset" }}>
      <div key={movie.id} className={styles.movie}>
        <div className={styles.movie__poster}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className={styles.movie__info}>
          <h2 className={styles.movie__info__title}>{movie.title}</h2>
          <ul className={styles.movie__info__genres}>
            {movie.genre_ids.map((id) => {
              const result = genres.find((genre) => genre.id === id);
              return <li key={id}>{result.name}</li>;
            })}
          </ul>
          <div className={styles.movie__info__releaseDate}>
            {movie.release_date}
          </div>
          <div className={styles.movie__info__overview}>{movie.overview}</div>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
