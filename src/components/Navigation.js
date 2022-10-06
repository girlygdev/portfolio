/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import logo from '../images/g_logo.png';

const Navigation = ({ toggleTheme }) => {
  const [active, setActive] = useState('home')

  return (
    <nav className="nav">
      <div className="logo">
        <a href="#">
          <img src={logo} alt='GirlyG.' />
        </a>
      </div>

      <ul className="menu">
        <li className="menu--item">
          <a href="#home" className={`menu--item--link ${active === 'home' && 'active' }`} onClick={e => setActive('home')} >Home</a>
        </li>
        <li className="menu--item">
          <a href="#about" className={`menu--item--link ${active === 'about' && 'active' }`} onClick={e => setActive('about')} > About</a>
        </li>
        <li className="menu--item">
          <a href="#contact" className={`menu--item--link ${active === 'contact' && 'active' }`} onClick={e => setActive('contact')} >Contact</a>
        </li>
        <li className="menu--item">
          <button className="menu--item--theme" onClick={toggleTheme}>
            <i className="fa-solid fa-circle-half-stroke"></i>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation