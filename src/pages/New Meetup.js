import { useHistory } from 'react-router-dom';

import NewMeetupFrom from '../components/Meetups/NewMeetupForm';

function NewMeetupsPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch('https://react-meetups-project-2c623-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupFrom onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
