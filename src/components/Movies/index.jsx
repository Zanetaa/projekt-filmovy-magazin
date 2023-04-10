import React from 'react';
import './style.css';
import MovieList from '../MovieList';
import { Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <div className="container">
      <div className="movie">
        <MovieList />
        <Outlet />
      </div>
    </div>
  );
};

export default Movies;
