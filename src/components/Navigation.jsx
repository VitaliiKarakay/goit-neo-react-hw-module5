import { NavLink } from "react-router-dom";
import style from "./css/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.navList}>
        <li>
          <NavLink className={style.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={style.navLink} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;