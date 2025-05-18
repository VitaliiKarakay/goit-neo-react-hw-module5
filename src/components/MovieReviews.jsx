import { useParams } from "react-router-dom";
import style from "./css/MovieReviews.module.css";
import { getMovieReviews } from "../api/themoviedb";
import { useEffect, useState } from "react";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then((reviews) => setReviews(reviews));
  }, [movieId]);
  return (
    <ul className={style.reviewsList}>
      {reviews && reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id} className={style.reviewItem}>
            <h3 className={style.reviewTitle}>{author}</h3>
            <p className={style.reviewText}>{content}</p>
          </li>
        ))
      ) : (
        <li className={style.reviewItem}>
          <p>{"We don't have any reviews for this movie."}</p>
        </li>
      )}
    </ul>
  );
};

export default MovieReviews;