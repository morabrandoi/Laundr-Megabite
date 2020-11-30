import React from 'react';
import styles from './styles.module.css'

function MTProPage(props) {
    return (
        <>
            <div className={styles.masterDiv}>
                <div className={styles.imageDiv}>
                    <img src="Tesselations/mahogany_pattern.png" alt="" className={styles.tesselation}/>
                    <img src="Mockups/mahoganymockup.png" alt="" className={styles.image}/>
                    <div className={styles.MTTitle1}>
                        MAHOGANY
                    </div>
                    <div className={styles.MTTitle2}>
                        TEAKWOOD
                    </div>
                </div>
                <div className={styles.infoDivMT}>
                    <h1 className={styles.productTitle}>About this Product:</h1>
                    <h2 className={styles.productSubTitle}>What's Included:</h2>
                    <p className={styles.productText}>21 count bag of “Mahogany Teakwood” scented Laundr Bombs</p>
                    <h2 className={styles.productSubTitle}>Product Description:</h2>
                    <p className={styles.productText}>A great everyday alternative to cologne, or for a getaway to a log cabin hidden deep in a snowy forest.</p>
                    <h2 className={styles.productSubTitle}>Fragrance Notes:</h2>
                    <p className={styles.productText}>Oak and Mahogany Wood, Boreal Forestry, Light Musk</p>
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

export default MTProPage;