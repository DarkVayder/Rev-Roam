import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>REV-Roam</div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Explore</li>
            <li>About Us</li>
            <li className='nav-contact'>Contact</li>
        </ul>
    </div>
  )
}


export default Nav
