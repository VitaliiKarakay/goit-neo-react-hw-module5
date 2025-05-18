import { useEffect, useState } from "react";
import { getMovieBySearch } from "../api/themoviedb";
import MovieList from "../components/MovieList";
import SearchForm from "../components/SearchForm";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchParams.get("query")) {
      return;
    }

    getMovieBySearch(searchParams.get("query")).then((data) => {
      setMovies(data);
    });
  }, [searchParams]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <div className="">
      <SearchForm onSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;