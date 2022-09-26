import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Movies from "../components/Movies";
import NavBar from "../components/NavBar";
import styles from "./Upcoming.module.css";

const Upcoming = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getUpcoming = async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1&region=KR`;
    const { results } = await (await fetch(url)).json();
    setMovies(results);
    setTimeout(() => setLoading(false), 1200);
  };

  console.log(movies);

  useEffect(() => {
    getUpcoming();
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
              <Movies key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Upcoming;
