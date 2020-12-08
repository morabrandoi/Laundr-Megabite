import React from 'react';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import styles from './styles.module.css'

function Shops(props) {
  const products = [{name:"Watermelon Cucumber",image:"./wc/watermelon_asset.png",route:"WCProPage"},{name:"White Gardenia",image:"./wg/gardenia_asset.png",route:"WGProPage"},{name:"Mahogany Teakwood",image:"./mt/mahogany_asset.png",route:"MTProPage"},{name:"Fresh Air",image:"./fa/freshair_asset.png",route:"FAProPage"},{name:"Coffee Vanilla",image:"./cv/coffee_asset.png",route:"CVProPage"},{name:"Eucalyptus Tea Tree",image:"./et/eucalyptus_asset.png",route:"ETTProPage"}]
    return (
      <div>
      <div className={styles.ShopAllText}>
        <h1 className={styles.Title}>Shop All</h1>
        <div className={styles.TextFill}/>
        <p className={styles.Items}>6 items</p>
      </div>
      <Grid container spacing={9}>
      {
        products.map(product =>
        (<Grid item xs={12} md={6} lg={4} xl={3} >
          <Link className={styles.ProductName} to={`/${product.route}`}>
            <div classname={styles.GridBox} >
              <img src={product.image} alt="" className={styles.GridImage}/>
              <h4>{product.name}</h4>
            </div>
          </Link>
        </Grid>)
      )}
      </Grid>
      </div>
    );
}

export default Shops;
