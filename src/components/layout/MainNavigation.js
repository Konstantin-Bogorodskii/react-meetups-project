import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
  const favortitesCtx = useContext(FavoritesContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/" alt="asd">
              All Meetups
            </Link>
          </li>
          <li>
            <Link to="/new-meetup" alt="asd">
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link to="/favorite-meetups" alt="asd">
              My Favorites
              <span className={styles.badge}>{favortitesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
