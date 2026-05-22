import { useState } from "react";
import { deleteActivity } from "../api/activities";

export default function ActivityList({ activities, token }) {
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity} token={token} />
      ))}
    </ul>
  );
}

export function ActivityListItem({ activity, token, syncActivities }) {
  // grab the token from prop, and the error from State
  const [error, setError] = useState(null);

  // handler function to connect deleteActivity API function to button form action
  const tryDeleteActivity = async () => {
    // clear any lingering error messages upon new try
    setError(null);

    try {
      // offer token in order to delete specific activity
      await deleteActivity(token, activity.id);
      // wait until this API call is finished, then update local state to API current server state
      syncActivities();
    } catch (e) {
      // if the token doesn't authorize deletion, display a message to the user
      setError(e.message);
    }
  };

  // if there is a token: display a button connected to tryDeleteActivity
  // if there is an error: display the error in an alert paragraph
  return (
    <li className="activity">
      <p>{activity.name}</p>
      {token && <button onClick={tryDeleteActivity}>delete</button>}
      {error && <p role="alert">{error}</p>}
    </li>
  );
}
