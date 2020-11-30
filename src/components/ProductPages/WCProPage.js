import React from 'react';
import styles from './styles.module.css'

function WCProPage(props) {
    return (
        <>
            <div className={styles.masterDiv}>
                <div className={styles.imageDiv}>
                    <img src="Tesselations/watermelon_pattern.png" alt= "" className={styles.tesselation}/>
                    <img src="Mockups/watermelonMockup.png" alt="" className={styles.image}/>
                    <div className={styles.WCTitle1}>
                        WATERMELON
                    </div>
                    <div className={styles.WCTitle2}>
                        CUCUMBER
                    </div>
                </div>

                <div className={styles.infoDivWC}>
                    <h1 className={styles.productTitle}>About this Product:</h1>
                    <h2 className={styles.productSubTitle}>What's Included:</h2>
                    <p className={styles.productText}>21 count bag of “Watermelon Cucumber” scented Laundr Bombs</p>
                    <h2 className={styles.productSubTitle}>Product Description:</h2>
                    <p className={styles.productText}>A sweet, cool and refreshing smell for brightening up your day. Great for picnic blankets, overalls, and being in a generally good mood.</p>
                    <h2 className={styles.productSubTitle}>Fragrance Notes:</h2>
                    <p className={styles.productText}>Crisp Cucumber, Sweet Melon, Cool Grapefruit</p>
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