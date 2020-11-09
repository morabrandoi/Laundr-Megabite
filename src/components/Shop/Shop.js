import React from 'react';
import styles from './styles.module.css'

function Shops(props) {
    return (
      <div className={styles.ShopAllText}>
        <h1 className={styles.Title}>Shop All</h1>
        <div className={styles.TextFill}>
        </div>
        <p className={styles.Items}>6 items</p>
      </div>
    );
}

export default Shops;
