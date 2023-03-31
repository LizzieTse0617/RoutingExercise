import React from 'react';
import UserItem from './UserItem';
import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './User.css';
//material-UI
import Grid from '@mui/material/Grid';

export default function User() {
  const { uid } = useParams();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (users.length === 0) {
      fetch('https://random-data-api.com/api/v2/users?size=20')
        .then((res) => res.json())
        .then((users) => {
          setUsers(users);
        })
        .catch(console.error);
    }
  }, []);

  const user = users.find((u) => u.uid === uid);

  return (
    <main>
      <Grid className="user" container spacing={2}>
        <Grid item xs={4}>
          {/* UserList */}

          <ul className="userItemList">
            <h2>User Page</h2>
            <h3>User List</h3>
            {users.length > 0 ? (
              users.map((user) => <UserItem key={user.uid} user={user} />)
            ) : (
              <li>No detail found</li>
            )}
          </ul>
        </Grid>
        <Grid className="userDetail" item xs={8}>
          {/* UserDetail */}
          <Outlet
            className="userDetail"
            context={
              user &&
              user.first_name &&
              user.last_name &&
              user.email &&
              user.avatar &&
              user.phone_number
                ? user
                : null
            }
          />
        </Grid>
      </Grid>
    </main>
  );
}
