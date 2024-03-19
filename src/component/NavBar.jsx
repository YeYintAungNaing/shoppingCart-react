import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(){
  return (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/profile">Profile</Link>
        </li>
        <li>
            <Link to="/cart">Cart</Link>
        </li>
        <li>
            <Link to="/FAQ">FAQ</Link>
        </li>
    </ul>
  )
}

export default NavBar