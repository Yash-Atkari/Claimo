export default function Leaderboard({ leaderboard }) {
  return (
    <div>
      <h2>Leaderboard</h2>
      <ol>
        {leaderboard.map((user, index) => (
          <li key={user._id}>
            {user.name} - {user.totalPoints} points (Rank #{index + 1})
          </li>
        ))}
      </ol>
    </div>
  );
}
