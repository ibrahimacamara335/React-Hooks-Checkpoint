import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function MovieDetails({ movies }) {
  const { title } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.title === title);

  if (!movie) {
    return <h2 className="text-center mt-5">Film non trouvé !</h2>;
  }

  return (
    <div className="container mt-4">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>

      {/* Vidéo de la bande-annonce */}
      <div className="ratio ratio-16x9">
        <iframe
          src={movie.trailer}
          title={movie.title}
          allowFullScreen
        ></iframe>
      </div>

      {/* Bouton pour revenir à la page d'accueil */}
      <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>
        ⬅️ Retour à l'accueil
      </button>
    </div>
  );
}

export default MovieDetails;
