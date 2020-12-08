import React from 'react';
import styles from './styles.module.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
                    <h1 className={styles.productTitle_black}>About this Product:</h1>
                    <h2 className={styles.productSubTitle_black}>What's Included:</h2>
                    <p className={styles.productTextCV}>21 count bag of “Coffee Vanilla” scented Laundr Bombs</p>
                    <h2 className={styles.productSubTitle_black}>Product Description:</h2>
                    <p className={styles.productTextCV}>Smells like the steam rising off of a hot vanilla latte. Great for sitting in an armchair in a quaint neighborhood cafe.</p>
                    <h2 className={styles.productSubTitle_black}>Fragrance Notes:</h2>
                    <p className={styles.productTextCV}>Dark Coffee Beans, Vanilla Extract, Hazelnut Cream</p>
                    <h2 className={styles.productSubTitle_black}>Price:</h2>
                    <p className={styles.priceCV}>$18.99</p>
                    <div className={styles.PPButtons}>
                        <button className={styles.addToCart}>
                            Add To Cart
                        </button>
                        <div className={styles.arrowButtons}>
                            <a href="/ETTProPage">
                                <ArrowBackIcon className={styles.nextPP_black}/>
                            </a>
                        </div>
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

export default CVProPage;