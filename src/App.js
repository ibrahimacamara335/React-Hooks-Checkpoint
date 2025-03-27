import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails"; // Nouvelle page
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchNote, setSearchNote] = useState("");
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Un thriller de science-fiction par Christopher Nolan.",
      posterURL: "https://m.media-amazon.com/images/I/71u4ibuAdsL._AC_SL1500_.jpg",
      note: 9,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "Interstellar",
      description: "Voyage à travers l'espace et le temps.",
      posterURL: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      note: 8.6,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      title: "The Dark Knight",
      description: "Batman affronte le Joker.",
      posterURL: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      note: 9,
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    },
  ]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const deleteMovie = (title) => {
    setMovies(movies.filter((movie) => movie.title !== title));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">🎬 Liste des Films</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter setSearchTitle={setSearchTitle} setSearchNote={setSearchNote} />
              <AddMovie addMovie={addMovie} />
              <MovieList movies={movies} deleteMovie={deleteMovie} />
            </>
          }
        />
        <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
