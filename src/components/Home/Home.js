import React from 'react';
import styles from './styles.module.css'

function Home(props) {
    return (
        <>
            <h1 className={styles.headerText}>This is home site</h1>
            <div className={styles.text}>
                <a href="/shop"> Go To Shop</a>
                
            </div>
        </>
    );
}

export default Home;