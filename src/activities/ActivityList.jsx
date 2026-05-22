import ActivityListItem from "./ActivityListItem";

export default function ActivityList({ activities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity} />
      ))}
    </ul>
  );
}
