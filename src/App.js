import React, { useState } from "react";
import MovieList from "./components/MovieList";
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
    },
    {
      title: "Interstellar",
      description: "Voyage à travers l'espace et le temps.",
      posterURL: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      note: 8.6,
    },
    {
      title: "The Dark Knight",
      description: "Batman affronte le Joker.",
      posterURL: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      note: 9,
    },
  ]);

  // Ajouter un nouveau film
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Filtrer les films
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      (searchNote === "" || movie.note >= parseFloat(searchNote))
  );

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">🎬 Liste des Films</h1>

      {/* Filtre */}
      <Filter setSearchTitle={setSearchTitle} setSearchNote={setSearchNote} />

      {/* Formulaire d'ajout */}
      <AddMovie addMovie={addMovie} />

      {/* Liste des films */}
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
