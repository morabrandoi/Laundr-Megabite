import React from 'react';
import styles from './styles.module.css'

function MTProPage(props) {
    return (
        <>
            <h1 className={styles.headerText}>Mahogany Teakwood Laundr Bomb</h1>

            <div className={styles.text}>
                <a href="/"> Go Back to Home page</a>
            </div>
            
        </>
    );
}

export default MTProPage;