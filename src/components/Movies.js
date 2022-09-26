import React from "react";
import styles from "./Movies.module.css";

const Movies = ({ movie }) => {
  return (
    <div key={movie.id} className={styles.movie}>
      <div className={styles.movie__poster}>
        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
      </div>
      <div className={styles.movie__info}>
        <h2 className={styles.movie__info__title}>{movie.title}</h2>
        <div className={styles.movie__info__releaseDate}>
          {movie.release_date}
        </div>
        <div className={styles.movie__info__overview}>{movie.overview}</div>
      </div>
    </div>
  );
};

export default Movies;
