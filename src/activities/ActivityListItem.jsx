import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { deleteActivity } from "../api/activities";
import { syncActivities } from "./ActivitiesPage";

export default function ActivityListItem({ activity }) {
  // grab the token from Authorization context, and the error from State
  const { token } = useAuth();
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
