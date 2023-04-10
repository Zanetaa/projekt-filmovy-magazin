import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Reviews from './components/Reviews';
import Articles from './components/Articles';
import Menu from './components/Menu';
import Movies from './components/Movies';
import Movie from './components/Movie';

const App = () => {
  return (
    <div className="container">
      <Menu />
      <Outlet />
    </div>
  );
};

const ErrorPage = () => {
  return (
    <main>
      <h2>404: Tady nic není</h2>
      <p>Asi jste se spletli</p>
    </main>
  );
};

const router = createBrowserRouter({
  path: '/',
  element: <App />,
  errorElemtn: <ErrorPage />,
  children: [
    { path: '/', element: <Home /> },
    { path: '/articles', element: <Articles /> },
    { path: '/reviews', element: <Reviews /> },
    {
      path: '/movies',
      element: <Movies />,
      children: [
        {
          path: '/movies/:id',
          element: <Movie />,
        },
      ],
    },
  ],
});

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
