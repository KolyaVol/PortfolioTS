import React from 'react'
import './Header.css'

export default function Header() {

  return (
    <header>
        <ul>
            <li className='logo'>LOGO</li>
            <li>ABOUT ME</li>
            <li>MY PROJECTS</li>
            <li>CONTACTS</li>
            <li>
              <span>EN</span>
              <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
              </label>
            </li>
            <li>
              <span>DARK</span>
              <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
              </label>
            </li>
        </ul>
    </header>
  )
}
