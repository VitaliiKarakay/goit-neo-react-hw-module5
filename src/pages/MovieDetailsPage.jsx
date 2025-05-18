import { NavLink, useParams, Outlet } from "react-router-dom";
import { getMovieById } from "../api/themoviedb";
import { useEffect, useState } from "react";
import GoBack from "../components/GoBack";
import style from "./css/MovieDetailsPage.module.css";
import defaultImage from "../assets/default.png"; 

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  return (
    <div className={style.movieDetailsWrapper}>
      <GoBack />
      {movie && (
        <div className={style.movieCard}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultImage
            }
            alt={movie.title}
            width={400}
          />
          <div className={style.movieAttributes}>
            <h2>{movie.title}</h2>
            <p>User score: {movie.vote_average}</p>
            <h3>Overview</h3>
            <p className={style.movieOverview}>{movie.overview}</p>
            <h3>Genres</h3>
            <ul className={style.movieGenres}>
              {movie.genres.map(({ id, name }) => (
                <li className={style.movieGenre} key={id}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <h3>Additional information</h3>
      <div className={style.movieGenres}>
        <NavLink className={style.movieLink} to={`/movies/${movieId}/cast`}>
          Cast
        </NavLink>
        <NavLink className={style.movieLink} to={`/movies/${movieId}/reviews`}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;