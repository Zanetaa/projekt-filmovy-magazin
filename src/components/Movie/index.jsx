import React from 'react';
import './style.css';
import MovieList from '../MovieList';
import { useParams } from 'react-router-dom';
import { movies } from '../../movie-database.js';

const Movie = () => {
  const { id } = useParams();
  const chosenMovie = movies.find((movie) => movie.id === Number(id));

  return (
    <div className="container">
      <div className="movies-container">
        <h1>{chosenMovie.title}</h1>
        <br />
        <img src={chosenMovie.poster} />
      </div>
      <div className="movie-list">
        <p>Year: {chosenMovie.year}</p>
        <p>Rating: {chosenMovie.rating}</p>
        <p>Director: {chosenMovie.director}</p>
        <p>Story line: {chosenMovie.storyline}</p>
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
