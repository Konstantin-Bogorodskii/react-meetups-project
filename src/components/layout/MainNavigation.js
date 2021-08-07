import { Link } from 'react-router-dom';

function MainNavigation(prop) {
  return (
    <header>
      <div>React Meetups</div>
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
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
