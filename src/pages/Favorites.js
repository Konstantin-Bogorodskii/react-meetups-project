import { useContext } from 'react';
import MeetupList from '../components/Meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';

function FavoritesPage() {
  const favortitesCtx = useContext(FavoritesContext);

  let content;

  if (favortitesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favortitesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
export default FavoritesPage;
