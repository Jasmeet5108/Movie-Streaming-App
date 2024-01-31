import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movie from "./components/Moviecontainer";
import Footer from "./components/Footer";

const apiKey = import.meta.env.VITE_API_KEY

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route exact path="/" element={<Movie apiKey={apiKey} type="movie" heading1="Movies" heading2="Now Playing" key="now-playing" category="now_playing" />} />
          <Route exact path="/popular" element={<Movie apiKey={apiKey} type="movie" heading1="Movies" heading2="Popular" key="popular" category="popular" />} />
          <Route exact path="/top-rated" element={<Movie apiKey={apiKey} type="movie" heading1="Movies" heading2="Top Rated" key="Top-Rated-Movies" category="top_rated" />} />
          <Route exact path="/upcoming" element={<Movie apiKey={apiKey} type="movie" heading1="Movies" heading2="Upcoming" key="Upcoming" category="upcoming" />} />
          <Route exact path="/airing-today" element={<Movie apiKey={apiKey} type="tv" heading1="Tv Shows" heading2="Airing Today" key="Airing-today" category="airing_today" />} />
          <Route exact path="/on-air" element={<Movie apiKey={apiKey} type="tv" heading1="Tv Shows" heading2="On the Air" key="On air" category="on_the_air" />} />
          <Route exact path="/popular-tv" element={<Movie apiKey={apiKey} type="tv" heading1="Tv Shows" heading2="Popular" key="Popular Tv" category="popular" />} />
          <Route exact path="/top-rated-tv" element={<Movie apiKey={apiKey} type="tv" heading1="Tv Shows" heading2="Top-rated" key="Top-rated-tv" category="top_rated" />} />
        </Routes>

        <Footer />


      </BrowserRouter>
    </>
  )
}

export default App
