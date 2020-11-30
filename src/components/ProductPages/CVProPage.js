import React from 'react';
import styles from './styles.module.css'

function CVProPage(props) {
    return (
        <>
            <div className={styles.masterDiv}>
                <div className={styles.imageDiv}>
                    <img src="Tesselations/vanilla_pattern.png" alt="" className={styles.tesselation}/>
                    <img src="Mockups/coffeeMockup.png" alt="" className={styles.image}/>
                    <div className={styles.CVTitle1}>
                        COFFEE
                    </div>
                    <div className={styles.CVTitle2}>
                        VANILLA
                    </div>
                </div>
                <div className={styles.infoDivCV}>
                    <h1 className={styles.productTitle}>About this Product:</h1>
                    <h2 className={styles.productSubTitle}>What's Included:</h2>
                    <p className={styles.productText}>21 count bag of “Coffee Vanilla” scented Laundr Bombs</p>
                    <h2 className={styles.productSubTitle}>Product Description:</h2>
                    <p className={styles.productText}>Smells like the steam rising off of a hot vanilla latte. Great for sitting in an armchair in a quaint neighborhood cafe.</p>
                    <h2 className={styles.productSubTitle}>Fragrance Notes:</h2>
                    <p className={styles.productText}>Dark Coffee Beans, Vanilla Extract, Hazelnut Cream</p>
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

export default CVProPage;