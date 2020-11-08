import React from 'react';
import styles from './styles.module.css'

function Home(props) {
    return (
        <>
            <h1 className={styles.headerText}>This is home site</h1>
            <div className={styles.centerText}>
                <a href="/shop"> Go To Shop</a>
            </div>

            <div className={styles.centerText}>
                <a href="/aboutus"> About Us </a>
            </div>

            <div className={styles.border}></div>
            <div className={styles.spacer}></div>

            <div className={styles.text}>
                <h1 className={styles.WatermelonCucumberHeader}>
                    Watermelon Cucumber
                </h1>
                <p className={styles.productText}>
                21 count bag of “Watermelon Cucumber” scented Laundr Bombs
                </p> 
                <p className={styles.productText}>
                A sweet, cool and refreshing smell for brightening up your day. Great for picnic blankets, overalls, and being in a generally good mood.
                </p>
                <p className={styles.productText}>
                This fragrance has hints of: Crisp Cucumber, Sweet Melon, and Cool Grapefruit
                </p>
            </div>

            <div className={styles.spacer}></div>
            <div className={styles.border}></div>
            <div className={styles.spacer}></div>

            <div className={styles.text}>
                <h1 className={styles.WhiteGardeniaHeader}>
                    White Gardenia
                </h1>
                <p className={styles.productText}>
                21 count bag of “White Gardenia” scented Laundr Bombs
                </p> 
                <p className={styles.productText}>
                A sweet and floral perfume with relaxing notes, best used after a carefree frolic through a field of wildflowers.
                </p>
                <p className={styles.productText}>
                This fragrance has hints of: Gardenia Shrub, Floral Essence, and Apple Water
                </p>
            </div>

            <div className={styles.spacer}></div>
            <div className={styles.border}></div>
            <div className={styles.spacer}></div>

            <div className={styles.text}>
                <h1 className={styles.MahoganyTeakwoodHeader}>
                    Mahogany Teakwood
                </h1>
                <p className={styles.productText}>
                21 count bag of “Mahogany Teakwood” scented Laundr Bombs
                </p> 
                <p className={styles.productText}>
                A great everyday alternative to cologne, or for a getaway to a log cabin hidden deep in a snowy forest.
                </p>
                <p className={styles.productText}>
                This fragrance has hints of: Oak and Mahogany Wood, Boreal Forestry, and Light Musk
                </p>
            </div>
            
            <div className={styles.spacer}></div>
            <div className={styles.border}></div>
            <div className={styles.spacer}></div>

            <div className={styles.text}>
                <h1 className={styles.FreshAirHeader}>
                    Fresh Air
                </h1>
                <p className={styles.productText}>
                21 count bag of “Fresh Air” scented Laundr Bombs
                </p> 
                <p className={styles.productText}>
                A soft, cottony fragrance that smells even cleaner than clean. Great for leaping face-first into a gigantic, fluffy comforter.
                </p>
                <p className={styles.productText}>
                This fragrance has hints of: Cotton, Ozone, and Tropical Fruit
                </p>
            </div>
            
            <div className={styles.spacer}></div>
            <div className={styles.border}></div>
            <div className={styles.spacer}></div>

            <div className={styles.text}>
                <h1 className={styles.CoffeeVanillaHeader}>
                    Coffee Vanilla
                </h1>
                <p className={styles.productText}>
                21 count bag of “Coffee Vanilla” scented Laundr Bombs
                </p> 
                <p className={styles.productText}>
                Smells like the steam rising off of a hot vanilla latte. Great for sitting in an armchair in a quaint neighborhood cafe.
                </p>
                <p className={styles.productText}>
                This fragrance has hints of: Dark Coffee Beans, Vanilla Extract, and Hazelnut Cream
                </p>
            </div>
            
            <div className={styles.spacer}></div>
            <div className={styles.border}></div>
            <div className={styles.spacer}></div>

            <div className={styles.text}>
                <h1 className={styles.EucalyptusTeaTreeHeader}>
                    Eucalyptus Tea Tree
                </h1>
                <p className={styles.productText}>
                21 count bag of “Eucalyptus Tea Tree” scented Laundr Bombs
                </p> 
                <p className={styles.productText}>
                A natural scent inspired by popular aromatherapy oil mixtures. Great for towels, bath robes, and having a “me day.”
                </p>
                <p className={styles.productText}>
                This fragrance has hints of: Tea Tree and Eucalyptus, Natural Herbs, and Bergamot Orange
                </p>
            </div>
            
            <div className={styles.spacer}></div>
            <div className={styles.border}></div>
            <div className={styles.spacer}></div>
            
        </>
    );
}

export default Home;