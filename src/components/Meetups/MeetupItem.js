import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

import Card from '../ui/Card';
import styles from './MeetupItem.module.css';

function MeetupItem(props) {
  const favortitesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favortitesCtx.itemIsFavorite(props.id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favortitesCtx.removeFavorite(props.id);
    } else {
      favortitesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
