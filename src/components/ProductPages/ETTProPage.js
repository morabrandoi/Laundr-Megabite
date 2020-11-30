import React from 'react';
import styles from './styles.module.css'

function ETTProPage(props) {
    return (
        <>
            <div className={styles.masterDiv}>
                <div className={styles.imageDiv}>
                    <img src="Tesselations/eucalyptus_pattern.png" alt="" className={styles.tesselation}/>
                    <img src="Mockups/eucalyptusMockup.png" alt="" className={styles.image}/>
                    <div className={styles.ETTTitle1}>
                        EUCALYPTUS
                    </div>
                    <div className={styles.ETTTitle2}>
                        TEA TREE
                    </div>
                </div>
                <div className={styles.infoDivETT}>
                    <h1 className={styles.productTitle}>About this Product:</h1>
                    <h2 className={styles.productSubTitle}>What's Included:</h2>
                    <p className={styles.productText}>21 count bag of “Eucalyptus Tea Tree” scented Laundr Bombs</p>
                    <h2 className={styles.productSubTitle}>Product Description:</h2>
                    <p className={styles.productText}>A natural scent inspired by popular aromatherapy oil mixtures. Great for towels, bath robes, and having a “me day.”</p>
                    <h2 className={styles.productSubTitle}>Fragrance Notes:</h2>
                    <p className={styles.productText}>Tea Tree and Eucalyptus, Natural Herbs, Bergamont Orange</p>
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

export default ETTProPage;