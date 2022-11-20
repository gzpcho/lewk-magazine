import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./styles.css";
import { createBrowserRouter,
        RouterProvider,
      } from "react-router-dom";
import "./index.css";
import Photoshoots from "./routes/Photoshoots";
import Home from "./routes/Home";
import Blogs from "./routes/Blogs";
import About from "./routes/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/photoshoots",
        element: <Photoshoots />,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
