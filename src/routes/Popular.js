import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Movie from "../components/Movie";
import NavBar from "../components/NavBar";
import styles from "./Popular.module.css";

const Popular = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getPopular = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1&region=KR`;
    const { results } = await (await fetch(url)).json();
    setMovies(results);
    setTimeout(() => setLoading(false), 1200);
  };

  console.log(movies);

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
      <NavBar />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.container}>
            {movies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Popular;
