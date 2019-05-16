import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylesheets/navbar.css';

const Navbar = () => {
  return(
    <div className='navbarBack'>
      <NavLink className='buttonNav' to='/' exact>Home </NavLink>
      <NavLink className='buttonNav' to='/favorites' exact> Favorites </NavLink>
      <NavLink className='buttonNav' to='/about' exact> About </NavLink>
    </div>
  )
}

export default Navbar
