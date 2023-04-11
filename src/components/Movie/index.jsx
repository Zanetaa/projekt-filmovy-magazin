import React from 'react';
import './style.css';
import MovieList from '../MovieList';
import { useParams } from 'react-router-dom';
import { movies } from '../../movie-database.js';

const Movie = () => {
  const { movieId } = useParams();
  const chosenMovie = movies.find((movie) => movie.id === movieId);

  return (
    <div className="container">
      <div className="movies-container">
        <h1>
          {chosenMovie.title} ({chosenMovie.movieId})
        </h1>
        <br />
        <img src={chosenMovie.poster} />
      </div>
      <div className="movie-list">
        <p>
          Year: {chosenMovie.year}({chosenMovie.chosenId})
        </p>
        <p>
          Rating:{chosenMovie.rating}({chosenMovie.chosenId})
        </p>
        <p>
          Director:{chosenMovie.director}({chosenMovie.chosenId})
        </p>
        <p>
          Story line:{chosenMovie.storyline}({chosenMovie.chosenId})
        </p>
        <span className="container">
          <p>
            Cast:
            {chosenMovie.cast.map((cast) => {
              return (
                <li>
                  {cast.actor}
                  {cast.as}
                </li>
              );
            })}
          </p>
        </span>
      </div>
    </div>
  );
};

export default Movie;
