import { useEffect, useState } from "react";
import { getPopularMovies } from "../api/themoviedb";
import MovieList from "../components/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((movies) => setMovies(movies));
  }, []);

  return <> 
  <h1>Tranding Today</h1>
  <MovieList movies={movies} />
  </>;
};

export default HomePage;