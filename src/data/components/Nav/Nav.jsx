import React from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom';

export default function Nav() {
  return (
   <nav className="mainNav">

<NavLink className={({ isActive }) => {return isActive ? 'big active' : '';}}to="/">Home</NavLink>
<NavLink className={({ isActive }) => {return isActive ? 'big active' : '';}}to="/user">User</NavLink>
<NavLink className={({ isActive }) => {return isActive ? 'big active' : '';}}to="/credit_cards">Credit cards</NavLink>

   </nav>
  )
}
