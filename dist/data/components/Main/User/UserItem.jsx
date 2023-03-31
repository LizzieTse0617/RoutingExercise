import React from 'react';
import { NavLink } from 'react-router-dom';
//material-UI icon
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';

export default function UserItem({ user }) {
  return (
    <section className="useritem">
      <NavLink
        className={({ isActive }) => {
          return isActive ? 'big active' : '';
        }}
        to={`/user/${user.uid}`}
      >
        <SentimentSatisfiedAltOutlinedIcon>
          star
        </SentimentSatisfiedAltOutlinedIcon>
        {user.first_name} {user.last_name}
      </NavLink>
    </section>
  );
}
