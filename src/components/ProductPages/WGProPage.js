import React from 'react';
import styles from './styles.module.css'

function WGProPage(props) {
    return (
        <>
            <div className={styles.masterDivWG}>
                <div>
                    <h1 className={styles.headerText}>White Gardenia Laundr Bomb</h1>
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

export default WGProPage;