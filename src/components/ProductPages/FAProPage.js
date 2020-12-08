import React from 'react';
import styles from './styles.module.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
                    <h1 className={styles.productTitle_white}>About this Product:</h1>
                    <h2 className={styles.productSubTitle_white}>What's Included:</h2>
                    <p className={styles.productTextFA}>21 count bag of “Fresh Air” scented Laundr Bombs</p>
                    <h2 className={styles.productSubTitle_white}>Product Description:</h2>
                    <p className={styles.productTextFA}>A soft, cottony fragrance that smells even cleaner than clean. Great for leaping face-first into a gigantic, fluffy comforter.</p>
                    <h2 className={styles.productSubTitle_white}>Fragrance Notes:</h2>
                    <p className={styles.productTextFA}>Cotton, Ozone, Tropical Fruit</p>
                    <h2 className={styles.productSubTitle_white}>Price:</h2>
                    <p className={styles.priceFA}>$18.99</p>
                    <div className={styles.PPButtons}>
                        <button className={styles.addToCart}>
                            Add To Cart
                        </button>
                        <div>
                            <a href="/ETTProPage">
                                <ArrowForwardIcon className={styles.nextPP_white}/>
                            </a>
                            <a href="/MTProPage">
                                <ArrowBackIcon className={styles.nextPP_white}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FAProPage;