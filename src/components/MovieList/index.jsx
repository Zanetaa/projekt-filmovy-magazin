import React from 'react';
import './style.css';
import movies from '../../movie-database.js';
import { NavLink } from 'react-router-dom';

const MovieList = () => {
  return (
    <div className="container">
      <div className="movie-list">
        {movies.map((movie) => {
          return (
            <NavLink
              to={`/movies/${movie.id}`}
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
              key={movie.id}
            >
              {movie.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
