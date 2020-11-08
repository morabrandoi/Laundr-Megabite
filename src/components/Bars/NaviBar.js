import React from 'react';
import styles from './styles.module.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function NaviBar(props) {
  return (
      <div className={styles.NaviBar}>
        <a href="/">
        <img src="Laundr-Blue-Logo.png" alt="" className={styles.LaundrBlue}/>
        </a>
        <a href="/shop" className={styles.NaviButtons}>
          <h2>Shop All</h2>
        </a>
        <a href="/aboutus" className={styles.NaviButtons}>
          <h2>Our Story</h2>
        </a>
        <a href="/faq" className={styles.NaviButtons}>
          <h2>FAQ</h2>
        </a>
        <a href="/contact" className={styles.NaviButtons}>
          <h2>Contact Us</h2>
        </a>
        <div>
          <AccountCircleIcon  className={styles.Icons}/>
          <ShoppingCartIcon className={styles.Icons}/>
        </div>
      </div>
  );
}

export default NaviBar;
