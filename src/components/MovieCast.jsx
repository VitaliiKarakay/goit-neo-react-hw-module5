import { useParams } from "react-router-dom";
import style from "./css/MovieCast.module.css";
import { getMovieCast } from "../api/themoviedb";
import { useEffect, useState } from "react";
import defaultImage from "../assets/defaultCast.jpg"

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCast(movieId).then((cast) => setCast(cast));
  }, [movieId]);
  return (
    <ul className={style.castList}>
      {cast &&
        cast.map(({ id, profile_path, name, character }) => (
          <li key={id} className={style.castItem}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : defaultImage
              }
              alt={name}
              width={100}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
};

export default MovieCast;