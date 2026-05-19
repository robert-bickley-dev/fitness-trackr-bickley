import { useState } from "react";
import { createActivity, deleteActivity } from "../api/activities";

export default function ActivityList({ activities, token }) {
  const [error, setError] = useState(null);





  return (
    <ul>
      {activities.map((activity) => (
      
      ))}
    </ul>
  );
}