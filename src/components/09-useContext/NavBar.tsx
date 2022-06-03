import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Use Context</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <NavLink className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')} to='/About'>About</NavLink>
            <NavLink className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')} to='/Login' >Login</NavLink>
            </div>
        </div>
        </nav>
  )
}