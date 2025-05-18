import { Link } from "react-router-dom";
import style from "./css/NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={style.notFoundWrapper}>
      <h1>404 - Not Found</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFoundPage;