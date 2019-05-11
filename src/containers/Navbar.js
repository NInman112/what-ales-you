import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylesheets/navbar.css';

const Navbar = () => {
  return(
    <div className='navbar'>
      <button><NavLink to='/' exact>Home </NavLink></button>
      <button><NavLink to='/favorites' exact> Favorites </NavLink></button>
      <button><NavLink to='/about' exact> About </NavLink></button>
    </div>
  )
}

export default Navbar
