import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminPage from './pages/AdminPage';

//Routes to the different pages
import PhotoshootsPage from './pages/PhotoshootsPage';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import AboutPage from './pages/AboutPage';
import ArticleContentPage from './pages/ArticleContentPage';
import ShootPage from './pages/ShootPage';
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
    path: '/a/:articleId',
    element: <ArticleContentPage />,
  },
  {
    path: '/p/:photoshootId',
    element: <ShootPage />,

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
