import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylesheets/navbar.css';

const Navbar = () => {
  return(
    <div className='navbar'>
      <NavLink to='/' exact>Home </NavLink>
      <NavLink to='/login' exact> Login </NavLink>
      <NavLink to='/search' exact> Search </NavLink>
      <NavLink to='/about' exact> About </NavLink>
    </div>
  )
}

export default Navbar
