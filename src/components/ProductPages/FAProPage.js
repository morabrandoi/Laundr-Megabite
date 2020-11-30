import React from 'react';
import styles from './styles.module.css'

function FAProPage(props) {
    return (
        <>
            <div className={styles.masterDiv}>
                <div className={styles.imageDiv}>
                    <img src="Tesselations/freshair_pattern.png" alt="" className={styles.tesselation}/>
                    <img src="Mockups/freshair_asset.png" alt="" className={styles.FAimage}/>
                    <div className={styles.FATitle1}>
                        FRESH
                    </div>
                    <div className={styles.FATitle2}>
                        AIR
                    </div>
                </div>
                <div className={styles.infoDivFA}>
                    <h1 className={styles.productTitle}>About this Product:</h1>
                    <h2 className={styles.productSubTitle}>What's Included:</h2>
                    <p className={styles.productText}>21 count bag of “Fresh Air” scented Laundr Bombs</p>
                    <h2 className={styles.productSubTitle}>Product Description:</h2>
                    <p className={styles.productText}>A soft, cottony fragrance that smells even cleaner than clean. Great for leaping face-first into a gigantic, fluffy comforter.</p>
                    <h2 className={styles.productSubTitle}>Fragrance Notes:</h2>
                    <p className={styles.productText}>Cotton, Ozone, Tropical Fruit</p>
                    <button className={styles.addToCart}>
                        Add To Cart
                    </button>
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