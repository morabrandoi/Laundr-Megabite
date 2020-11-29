import React from 'react';
import styles from './styles.module.css'

function FAProPage(props) {
    return (
        <>
            <div className={styles.masterDiv}>
                <div className={styles.imageDiv}>
                    <h1 className={styles.text}>
                        Image/Animation goes here
                    </h1>
                </div>
                <div className={styles.infoDivFA}>
                    <h1 className={styles.productTitle}>About this Product:</h1>
                    <h2 className={styles.productSubTitle}>What's Included:</h2>
                    <p className={styles.productText}>21 count bag of “Fresh Air” scented Laundr Bombs</p>
                    <h2 className={styles.productSubTitle}>Product Description:</h2>
                    <p className={styles.productText}>A soft, cottony fragrance that smells even cleaner than clean. Great for leaping face-first into a gigantic, fluffy comforter.</p>
                    <h2 className={styles.productSubTitle}>Fragrance Notes:</h2>
                    <p className={styles.productText}>Cotton, Ozone, Tropical Fruit</p>
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

export default FAProPage;