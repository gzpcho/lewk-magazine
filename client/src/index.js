import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./styles.css";
import { createBrowserRouter,
        RouterProvider,
      } from "react-router-dom";
import "./index.css";
import Photoshootspage from "./routes/Photoshoots";
import Homepage from "./routes/Home";
import Blogspage from "./routes/Blogs";
import Navbar from "./components/Navbar"
import Aboutpage from "./routes/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/about",
    element: <Aboutpage />,
  },
  {
    path: "/blogs",
    element: <Blogspage />,
  },
  {
    path: "/photoshoots",
    element: <Photoshootspage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
