import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './index.css'; 
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Routes to the different pages
import PhotoshootsPage from './routes/PhotoshootsPage';
import HomePage from './routes/HomePage';
import ArticlesPage from './routes/ArticlesPage';
import AboutPage from './routes/AboutPage';
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);