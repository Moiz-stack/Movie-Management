// components/MovieInput.js
import React, { useState } from "react";

export const MovieInput = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState("");

  const handleAddMovie = () => {
    addMovie(newMovie);
    setNewMovie("");
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Add a new movie"
        className="border border-gray-300 rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
      />
      <button
        className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg font-medium text-lg hover:bg-blue-600 transition duration-200"
        onClick={handleAddMovie}
      >
        Add Movie
      </button>
    </div>
  );
};

export default MovieInput;