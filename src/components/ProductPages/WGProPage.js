import React from 'react';
import styles from './styles.module.css'

function WGProPage(props) {
    return (
        <>
            <div className={styles.masterDiv}>
                <div className={styles.imageDiv}>
                    <img src="Tesselations/gardenia_pattern.png" alt="" className={styles.tesselation}/>
                    <img src="Mockups/gardeniaMockup.png" alt="" className={styles.image}/>
                    <div className={styles.WGTitle1}>
                        WHITE
                    </div>
                    <div className={styles.WGTitle2}>
                        GARDENIA
                    </div>
                </div>
                <div className={styles.infoDivWG}>
                    <h1 className={styles.productTitle}>About this Product:</h1>
                    <h2 className={styles.productSubTitle}>What's Included:</h2>
                    <p className={styles.productText}>21 count bag of “White Gardenia” scented Laundr Bombs</p>
                    <h2 className={styles.productSubTitle}>Product Description:</h2>
                    <p className={styles.productText}>A sweet and floral perfume with relaxing notes, best used after a carefree frolic through a field of wildflowers.</p>
                    <h2 className={styles.productSubTitle}>Fragrance Notes:</h2>
                    <p className={styles.productText}>Gardenia Shrub, Floral Essence, Apple Water</p>
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