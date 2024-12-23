// components/MovieList.js
import React from "react";

export const MovieList = ({ movies, toggleFavorite, deleteMovie }) => {
  return movies.length === 0 ? (
    <p className="text-center text-gray-500 text-lg">No movies available. Start by adding a new movie!</p>
  ) : (
    <ul className="space-y-4">
      {movies.map((movie, index) => (
        <li
          key={index}
          className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <span
            className={`${
              movie.favorite
                ? "text-green-700 font-semibold text-lg"
                : "text-gray-800 text-lg"
            }`}
          >
            {movie.name}
          </span>
          <div className="flex space-x-3">
            <button
              className="px-4 py-1 text-sm bg-green-100 text-green-700 rounded-lg font-medium hover:bg-green-200 transition duration-200"
              onClick={() => toggleFavorite(index)}
            >
              {movie.favorite ? "Unfavorite" : "Favorite"}
            </button>
            <button
              className="px-4 py-1 text-sm bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition duration-200"
              onClick={() => deleteMovie(index)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;