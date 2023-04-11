import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <nav className="menu">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/reviews"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Reviews
        </NavLink>
        <NavLink
          to="/articles"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Articles
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Menu;
