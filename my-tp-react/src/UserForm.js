import React, { useState } from 'react';

function UserForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") return;

    setUsers([...users, username]); 
    setUsername("");
    setPassword("");
  };

  const handleDelete = (indexToDelete) => {
    setUsers(users.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h3>Authentication Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <h4>Users List</h4>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserForm;
