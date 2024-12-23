import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MovieInput from "./components/MovieInput";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem("movies");
    return savedMovies ? JSON.parse(savedMovies) : [];
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const addMovie = (newMovie) => {
    if (newMovie.trim() !== "") {
      setMovies([...movies, { name: newMovie, favorite: false }]);
    }
  };

  const toggleFavorite = (index) => {
    const updatedMovies = [...movies];
    updatedMovies[index].favorite = !updatedMovies[index].favorite;
    setMovies(updatedMovies);
  };

  const deleteMovie = (index) => {
    const updatedMovies = movies.filter((_, i) => i !== index);
    setMovies(updatedMovies);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <Header title="Movie Recommendation App" />
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-lg p-6">
        <MovieInput addMovie={addMovie} />
        <MovieList
          movies={movies}
          toggleFavorite={toggleFavorite}
          deleteMovie={deleteMovie}
        />
      </div>
    </div>
  );
};

export default App;