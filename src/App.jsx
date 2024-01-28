import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Popular from "./components/sections/movies/Popular";
import Toprated from "./components/sections/movies/Toprated";
import Upcoming from "./components/sections/movies/Upcoming";
import Airingtoday from "./components/sections/TV Shows/Airingtoday";
import OnAir from "./components/sections/TV Shows/OnAir";
import Populartv from "./components/sections/TV Shows/Populartv";
import Topratedtv from "./components/sections/TV Shows/Topratedtv";


function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>

          {/* Movies */}
          <Route path="/" element={<Popular />} />
          <Route path="/top-rated" element={<Toprated />} />
          <Route path="/upcoming" element={<Upcoming />} />

          {/* TV Shows */}
          <Route path="/airing-today" element={<Airingtoday />} />
          <Route path="/on-air" element={<OnAir />} />
          <Route path="/popular-tv" element={<Populartv />} />
          <Route path="/top-rated-tv" element={<Topratedtv />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
