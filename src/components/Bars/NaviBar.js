import React from 'react';
import styles from './styles.module.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useAuth } from '../../contexts/AuthContext'

function NaviBar(props) {

  // Related to logout
  const { signOut, currentUser } = useAuth();

  async function handleLogout() {
    try {
      await signOut()
      console.log(`currentUser: ${currentUser}`)
      
    } catch {
      console.log("Error with SignOut")
    }
  }

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
          <ExitToAppIcon onClick={handleLogout} className={styles.Icons}/>
          <a href="/signin">
            <AccountCircleIcon className={styles.Icons}/>
          </a>
          <ShoppingCartIcon className={styles.Icons}/>
        </div>
      </div>
  );
}

export default NaviBar;
