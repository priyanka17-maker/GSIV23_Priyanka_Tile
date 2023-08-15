import React, { createContext, useState } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies, searchResults, setSearchResults }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;