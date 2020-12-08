import React from 'react';
import styles from './styles.module.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
                    <h1 className={styles.productTitle_black}>About this Product:</h1>
                    <h2 className={styles.productSubTitle_black}>What's Included:</h2>
                    <p className={styles.productTextETT}>21 count bag of “Eucalyptus Tea Tree” scented Laundr Bombs</p>
                    <h2 className={styles.productSubTitle_black}>Product Description:</h2>
                    <p className={styles.productTextETT}>A natural scent inspired by popular aromatherapy oil mixtures. Great for towels, bath robes, and having a “me day.”</p>
                    <h2 className={styles.productSubTitle_black}>Fragrance Notes:</h2>
                    <p className={styles.productTextETT}>Tea Tree and Eucalyptus, Natural Herbs, Bergamont Orange</p>
                    <h2 className={styles.productSubTitle_black}>Price:</h2>
                    <p className={styles.priceEET}>$18.99</p>
                    <div className={styles.PPButtons}>
                        <button className={styles.addToCart}>
                            Add To Cart
                        </button>
                        <div>
                            <a href="/CVProPage">
                                <ArrowForwardIcon className={styles.nextPP_black}/>
                            </a>
                            <a href="/FAProPage">
                                <ArrowBackIcon className={styles.nextPP_black}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ETTProPage;