import React from 'react';
import styles from './styles.module.css'

function Shops(props) {
    return (
        <>
            <h1 className={styles.headerText}>This is shop site</h1>
            <div className={styles.text}>
                <a href="/"> Go Back to Home page</a>
            </div>
        </>
    );
}

export default Shops;