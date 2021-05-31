import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const counterCtx = useContext(FavoritesContext);

  return (
    <div className={classes.header}>
      <Link to="/" className={classes.links} id={classes.title}>
        React Meetups
      </Link>
      <nav className={classes.nav_bar}>
        <ul className={classes.nav_bar_lists}>
          <li className={classes.list}>
            <Link to="/" className={classes.links}>
              All Meetups
            </Link>
          </li>
          <li className={classes.list} id={classes.link3}>
            <Link to="/newmeetups" className={classes.links}>
              Add New Meetups
            </Link>
          </li>
          <li className={classes.list}>
            <Link to="/favorites" className={classes.links}>
              My Favorites
              <span className={classes.badge}>{counterCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigation;
