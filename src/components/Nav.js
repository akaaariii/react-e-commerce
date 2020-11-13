import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <nav>
      <h1>Pino's Bakery</h1>
      <div className='nav-icon' onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        <li><NavLink to='/' onClick={handleClick}>Home</NavLink></li>
        <li><NavLink to='/products' onClick={handleClick}>Products</NavLink></li>
        <li><NavLink to='/about' onClick={handleClick}>About</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav;