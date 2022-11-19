import Navbar from "./components/Navbar"
import Photoshoots from "./routes/Photoshoots"
import Home from "./routes/Home"
import Blogs from "./routes/Blogs"
import About from "./routes/About"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photoshoots" element={<Photoshoots />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </>
  )
}

export default App
