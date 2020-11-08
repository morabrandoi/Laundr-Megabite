import React from 'react';
import styles from './styles.module.css'

function FAProPage(props) {
    return (
        <>
            <h1 className={styles.headerText}>Fresh Air Laundr Bomb</h1>

            <div className={styles.text}>
                <a href="/"> Go Back to Home page</a>
            </div>
            
        </>
    );
}

export default FAProPage;