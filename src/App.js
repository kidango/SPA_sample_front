import React, { useState } from 'react';
import { Button } from "@mui/material";
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const usersList = users.map((user) =>
    <li key={user.email}>
      {user.username}
    </li>
  )

  function getUsers() {
    axios.get('http://localhost:8000/users',
      { auth: {
        username: 'admin',
        password: 'password123'
      }})
    .then(response => {
      setUsers(response.data.results);
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <>
      <Button variant="contained" onClick={getUsers}>Get Users</Button>
      <ul>{usersList}</ul>
    </>
  );
}

export default App;
