import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Reviews from './components/Reviews';
import Articles from './components/Articles';
import Menu from './components/Menu';

const App = () => {
  return (
    <div className="container">
      <Menu />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter({
  path: '/',
  element: <App />,
  children: [
    { path: '/', element: <Home /> },
    { path: '/articles', element: <Articles /> },
    { path: '/reviews', element: <Reviews /> },
    { path: '/reviews', element: <Reviews /> },
  ],
});

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
