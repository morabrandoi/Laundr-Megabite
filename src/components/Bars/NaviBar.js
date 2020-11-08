import React from 'react';
import "./App.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function NaviBar(props) {
  return (
    <>
      <div className="NaviBar">
        <a href="/">
        <img src="Laundr-Blue-Logo.png" alt="" className="LaundrBlue"/>
        </a>
        <a href="/shop" className="NaviButtons">
          <h2>Shop All</h2>
        </a>
        <a href="/aboutus" className="NaviButtons">
          <h2>Our Story</h2>
        </a>
        <a href="/faq" className="NaviButtons">
          <h2>FAQ</h2>
        </a>
        <a href="/contact" className="NaviButtons">
          <h2>Contact Us</h2>
        </a>
        <div>
          <AccountCircleIcon  className="Icons"/>
          <ShoppingCartIcon className="Icons"/>
        </div>
      </div>
    </>
  );
}

export default NaviBar;
