import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NowPlaying from "./routes/NowPlaying";
import Popular from "./routes/Popular";
import Upcoming from "./routes/Upcoming";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NowPlaying />} />
        <Route path="/now-playing" element={<NowPlaying />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </Router>
  );
};

export default App;
