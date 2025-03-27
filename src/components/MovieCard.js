import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

function MovieCard({ movie, deleteMovie }) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={movie.posterURL} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.description}</p>
          <p className="fw-bold">⭐ Note : {movie.note}/10</p>
          
          {/* Lien vers la page de description */}
          <Link to={`/movie/${movie.title}`} className="btn btn-info me-2">
            ℹ️ Voir Détails
          </Link>

          {/* Bouton de suppression */}
          <button className="btn btn-danger" onClick={handleShow}>
            🗑️ Supprimer
          </button>
        </div>
      </div>

      {/* Modal de confirmation */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmer la suppression</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous sûr de vouloir supprimer <strong>{movie.title}</strong> ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              deleteMovie(movie.title);
              handleClose();
            }}
          >
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MovieCard;
