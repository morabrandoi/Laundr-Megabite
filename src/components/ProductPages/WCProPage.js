import React from 'react';
import styles from './styles.module.css'

function WCProPage(props) {
    return (
        <>
            <div className={styles.masterDivWC}>
                <div>
                    <h1 className={styles.text}>Watermelon Cucumber Laundr Bomb</h1>
                </div>
            </div>

            <div className={styles.spacer}></div>
            <div className={styles.text}>
                <a href="/"> Go Back to Home page</a>
            </div>
            <div className={styles.spacer}></div>
            
        </>
    );
}

export default WCProPage;