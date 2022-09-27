import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Movie from "../components/Movie";
import NavBar from "../components/NavBar";
import styles from "./Upcoming.module.css";

const Upcoming = ({ genres }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getUpcoming = async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1&region=KR`;
    const { results } = await (await fetch(url)).json();
    setMovies(results);
    setTimeout(() => setLoading(false), 1200);
  };

  // console.log(movies);

  useEffect(() => {
    getUpcoming();
  }, []);

  return (
    <>
      <NavBar />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className={styles.container}>
            {movies.map((movie) => (
              <Movie key={movie.id} movie={movie} genres={genres} />
            ))}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Upcoming;
