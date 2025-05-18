import { Link, useLocation } from "react-router-dom";
import style from "./css/MovieList.module.css";
import defaultImage from "../assets/default.png"

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={style.movieList}>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id}>
          <Link className={style.movieLink} to={`/movies/${id}`} state={location}>
            <img
              className={style.movieImg}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultImage
              }
              alt={title}
            />
            <div className={style.movieOverlay}>
              <h3 className={style.movieTitle}>{title}</h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;