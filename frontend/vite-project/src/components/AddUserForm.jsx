import { useState } from 'react';
import { addUser } from '../api';

export default function AddUserForm({ onUserAdded }) {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUser(name);
    setName('');
    onUserAdded();
  };

  return (
    <form onSubmit={handleSubmit} style={{marginBottom: "10px"}}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} style={{lineHeight: "2"}} required />&nbsp;&nbsp;
      <button type="submit">Add User</button>
    </form>
  );
}
