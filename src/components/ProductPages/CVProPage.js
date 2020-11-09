import React from 'react';
import styles from './styles.module.css'

function CVProPage(props) {
    return (
        <>
            <div className={styles.masterDivCV}>
                <h1 className={styles.headerText}>Coffee Vanilla Laundr Bomb</h1>
            </div>

            <div className={styles.spacer}></div>
            <div className={styles.text}>
                <a href="/"> Go Back to Home page</a>
            </div>
            <div className={styles.spacer}></div>
            
        </>
    );
}

export default CVProPage;