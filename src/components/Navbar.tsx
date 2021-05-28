import React from 'react';
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-3">
        <NavLink to="/" className="brand-logo">React-TS</NavLink>
        <ul className="right hide-on-med-and-down">
          <li><NavLink to="/">Tasks</NavLink></li>
          <li><NavLink to="/abouta">About</NavLink></li>

        </ul>
      </div>
    </nav>

  )
}