import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={movie.posterURL} className="card-img-top" alt={movie.title} width={200} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <p className="fw-bold">⭐ Note : {movie.note}/10</p>
      </div>
    </div>
  );
}

export default MovieCard;
