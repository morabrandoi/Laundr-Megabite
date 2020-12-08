import React from 'react';
import styles from './styles.module.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
                    <h1 className={styles.productTitle_white}>About this Product:</h1>
                    <h2 className={styles.productSubTitle_white}>What's Included:</h2>
                    <p className={styles.productTextWC}>21 count bag of “Watermelon Cucumber” scented Laundr Bombs</p>
                    <h2 className={styles.productSubTitle_white}>Product Description:</h2>
                    <p className={styles.productTextWC}>A sweet, cool and refreshing smell for brightening up your day. Great for picnic blankets, overalls, and being in a generally good mood.</p>
                    <h2 className={styles.productSubTitle_white}>Fragrance Notes:</h2>
                    <p className={styles.productTextWC}>Crisp Cucumber, Sweet Melon, Cool Grapefruit</p>
                    <h2 className={styles.productSubTitle_white}>Price:</h2>
                    <p className={styles.priceWC}>$18.99</p>
                    <div className={styles.PPButtons}>
                        <button className={styles.addToCart}>
                            Add To Cart
                        </button>
                        <a href="/WGProPage">
                            <ArrowForwardIcon className={styles.nextPP_white}/>
                        </a>
                    </div>
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