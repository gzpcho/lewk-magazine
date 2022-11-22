import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import PhotoshootsPage from './routes/PhotoshootsPage';
import HomePage from './routes/HomePage';
import ArticlesPage from './routes/ArticlesPage';
import AboutPage from './routes/AboutPage';
import AdminPage from './routes/AdminPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/articles',
    element: <ArticlesPage />,
  },
  {
    path: '/photoshoots',
    element: <PhotoshootsPage />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
