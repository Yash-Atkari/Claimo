import { claimPoints } from '../api';

export default function ClaimButton({ userId, onClaim }) {
  const handleClick = async () => {
    const res = await claimPoints(userId);
    alert(`Claimed ${res.data.randomPoints} points!`);
    onClaim(res.data.leaderboard);
  };

  return (
    <button onClick={handleClick} disabled={!userId}>Claim</button>
  );
}
