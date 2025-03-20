import React from "react";

function Filter({ setSearchTitle, setSearchNote }) {
  return (
    <div className="d-flex gap-3 mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Rechercher par titre..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <input
        type="number"
        className="form-control"
        placeholder="Note minimale"
        onChange={(e) => setSearchNote(e.target.value)}
      />
    </div>
  );
}

export default Filter;
