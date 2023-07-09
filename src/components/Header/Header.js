import React from 'react'
import './Header.css'
import logo from './../../images/logo.svg'
import Navbar from './Navbar'
import Register from './Register'
import UserBox from './UserBox'
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';

function Header() {
  const user = useSelector(selectUser);
  return (
    <header className='header'>
      <div className='header-container px-5'>
        <div className='logo'>
          <img src={logo} alt='logo'/>
        </div>
        <Navbar />
        { user ? <UserBox /> : <Register/>}
      </div>
    </header>
  )
}

export default Header