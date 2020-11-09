import React from 'react';
import styles from './styles.module.css'

function FAProPage(props) {
    return (
        <>
            <div className={styles.masterDivFA}>
                <h1 className={styles.headerText}>Fresh Air Laundr Bomb</h1>
            </div>

            <div className={styles.spacer}></div>
            <div className={styles.text}>
                <a href="/"> Go Back to Home page</a>
            </div>
            <div className={styles.spacer}></div>
            
        </>
    );
}

export default FAProPage;