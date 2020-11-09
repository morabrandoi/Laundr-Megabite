import React from 'react';
import styles from './styles.module.css'

function ETTProPage(props) {
    return (
        <>
            <div className={styles.masterDivETT}>
                <h1 className={styles.headerText}>Eucalyptus Tea Tree Laundr Bomb</h1>
            </div>

            <div className={styles.spacer}></div>
            <div className={styles.text}>
                <a href="/"> Go Back to Home page</a>
            </div>
            <div className={styles.spacer}></div>
            
        </>
    );
}

export default ETTProPage;