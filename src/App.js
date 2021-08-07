import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/New Meetup';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <Switch>
        <MainNavigation />
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupsPage />
        </Route>
        <Route path="/favorite-meetups">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
