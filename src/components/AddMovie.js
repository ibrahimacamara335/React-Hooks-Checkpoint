import React, { useState } from "react";

function AddMovie({ addMovie }) {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    note: "",
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMovie.title || !newMovie.description || !newMovie.posterURL || !newMovie.note) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    addMovie({ ...newMovie, note: parseFloat(newMovie.note) });
    setNewMovie({ title: "", description: "", posterURL: "", note: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 mb-4">
      <h3>➕ Ajouter un nouveau film</h3>
      <div className="mb-3">
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Titre"
          value={newMovie.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="posterURL"
          className="form-control"
          placeholder="URL de l'affiche"
          value={newMovie.posterURL}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          name="note"
          className="form-control"
          placeholder="Note (ex: 8.5)"
          value={newMovie.note}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Ajouter un film
      </button>
    </form>
  );
}

export default AddMovie;
