import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Movies from "../components/Movies";
import styles from "./Home.module.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getNowPlaying = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1&region=KR`;
    const { results } = await (await fetch(url)).json();
    setMovies(results);
    setLoading(false);
  };

  console.log(movies);

  useEffect(() => {
    getNowPlaying();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          {movies.map((movie) => (
            <Movies key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
