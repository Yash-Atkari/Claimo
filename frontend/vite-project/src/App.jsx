import { useEffect, useState } from 'react';
import UserSelector from './components/UserSelector';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/Leaderboard';
import AddUserForm from './components/AddUserForm';
import { getLeaderboard, getUsers } from './api';

function App() {
  const [selectedUser, setSelectedUser] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);
  const [users, setUsers] = useState([]);

  const loadLeaderboard = async () => {
    const res = await getLeaderboard();
    setLeaderboard(res.data);
  };

  const loadUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    loadLeaderboard();
    loadUsers();
  });

  return (
    <div style={{margin: "auto", padding: "25px"}}>
      <h1>User Claim Points System</h1>
      <AddUserForm onUserAdded={loadLeaderboard}/>
      <UserSelector users={users} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />&nbsp;&nbsp;
      <ClaimButton userId={selectedUser} onClaim={setLeaderboard} />
      <Leaderboard leaderboard={leaderboard} />
    </div>
  );
}

export default App;
