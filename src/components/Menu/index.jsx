import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  <nav className="menu">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/reviews">Reviews</NavLink>
    <NavLink to="/articles">Articles</NavLink>
    <NavLink to="/movies/1">Movies</NavLink>
  </nav>;
};

export default Menu;
