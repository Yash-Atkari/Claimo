export default function UserSelector({ users, selectedUser, setSelectedUser }) {
  return (
    <select onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser} style={{fontSize: '16px'}}>
      <option value="">Select a User</option>
      {users.map(user => (
        <option key={user._id} value={user._id}>{user.name}</option>
      ))}
    </select>
  );
}
