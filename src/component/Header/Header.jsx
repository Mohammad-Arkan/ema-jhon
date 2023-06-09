import React from 'react';
import './Header.css'
import logo from '../../images/logo.svg'

const Header = () => {
    return (
        <nav className='header'>
          <img src={logo} alt="" />
          <div>
            <a href="/shop">Shop</a>
            <a href="/order">Order</a>
            <a href="/inventory">Inventory</a>
            <a href="/login">Loging</a>
          </div>
        </nav>
    );
};

export default Header;