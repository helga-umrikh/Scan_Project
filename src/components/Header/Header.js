import React from 'react'
import './Header.css'
import logo from './../../images/logo.svg'
import Navbar from './Navbar'
import Register from './Register'
// import UserBox from './UserBox'

function Header() {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='logo'>
          <img src={logo} alt='logo'/>
        </div>
        <Navbar />
        <Register />
        {/* <UserBox /> */}
      </div>
    </header>
  )
}

export default Header