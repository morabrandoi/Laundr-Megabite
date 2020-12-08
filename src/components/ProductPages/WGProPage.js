import React from 'react';
import styles from './styles.module.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
                    <h1 className={styles.productTitle_black}>About this Product:</h1>
                    <h2 className={styles.productSubTitle_black}>What's Included:</h2>
                    <p className={styles.productTextWG}>21 count bag of “White Gardenia” scented Laundr Bombs</p>
                    <h2 className={styles.productSubTitle_black}>Product Description:</h2>
                    <p className={styles.productTextWG}>A sweet and floral perfume with relaxing notes, best used after a carefree frolic through a field of wildflowers.</p>
                    <h2 className={styles.productSubTitle_black}>Fragrance Notes:</h2>
                    <p className={styles.productTextWG}>Gardenia Shrub, Floral Essence, Apple Water</p>
                    <h2 className={styles.productSubTitle_black}>Price:</h2>
                    <p className={styles.priceWG}>$18.99</p>
                    <div className={styles.PPButtons}>
                        <button className={styles.addToCart}>
                            Add To Cart
                        </button>
                        <div>
                            <a href="/MTProPage">
                                <ArrowForwardIcon className={styles.nextPP_black}/>
                            </a>
                            <a href="/WCProPage">
                                <ArrowBackIcon className={styles.nextPP_black}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default WGProPage;