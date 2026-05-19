export default function ActivityList({ activities, token }) {
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
      ))}
      {token ? <button>delete</button> : <></>}
    </ul>
  );
}
