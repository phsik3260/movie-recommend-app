import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=ko&append_to_response=images%2Cvideos`;
    const json = await (await fetch(url)).json();
    setMovie(json);
    setTimeout(() => setLoading(false), 1200);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <NavBar />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className={styles.container}>
            {movie.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.title}
                className={styles.backdrop}
              />
            ) : (
              <div className={styles.backdrop}></div>
            )}
            <div className={styles.movie}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
                className={styles.movie__poster}
              />
              <div className={styles.movie__info}>
                <div className={styles.movie__info__title}>{movie.title}</div>
                <ul className={styles.movie__info__genres}>
                  {movie.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
                <div className={styles.movie__info__releaseDate}>
                  {movie.release_date}
                </div>
                <div className={styles.movie__info__runtime}>
                  {movie.runtime}mins
                </div>
                <div className={styles.movie__info__overview}>
                  {movie.overview}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
