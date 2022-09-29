import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import NowPlaying from "./routes/NowPlaying";
import Popular from "./routes/Popular";
import Upcoming from "./routes/Upcoming";

const App = () => {
  const [genres, setGenres] = useState([]);

  const getGenres = async () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=ko`;
    const { genres } = await (await fetch(url)).json();
    setGenres(genres);
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<NowPlaying genres={genres} />} />
        <Route path="/now-playing" element={<NowPlaying genres={genres} />} />
        <Route path="/upcoming" element={<Upcoming genres={genres} />} />
        <Route path="/popular" element={<Popular genres={genres} />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
