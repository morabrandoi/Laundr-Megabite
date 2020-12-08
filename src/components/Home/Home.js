import React, {useState, useEffect} from "react";
import styles from './styles.module.css';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const products = [
  {route:"WCProPage",textColor:"#ff5656",name:"Watermelon Cucumber",asset:"./wc/watermelon_asset.png",image:"./wc/watermelon_pattern.png",price:"$18.99",description:"A sweet, cool and refreshing smell for brightening up your day. Great for picnic blankets, overalls, and being in a generally good mood.",},
  {route:"WGProPage",textColor:"#c4bd72",name:"White Gardenia",asset:"./wg/gardenia_asset.png",image:"./wg/gardenia_pattern.png",price:"$18.99",description:"A sweet and floral perfume with relaxing notes, best used after a carefree frolic through a field of wildflowers."},
  {route:"MTProPage",textColor:"#5b5b5b",name:"Mahogany Teakwood",asset:"./mt/mahogany_asset.png",image:"./mt/mahogany_pattern.png",price:"$18.99",description:"A great everyday alternative to cologne, or for a getaway to a log cabin hidden deep in a snowy forest."},
  {route:"FAProPage",textColor:"#55b9ce",name:"Fresh Air",asset:"./fa/freshair_asset.png",image:"./fa/freshair_pattern.png",price:"$18.99",description:"A soft, cottony fragrance that smells even cleaner than clean. Great for leaping face-first into a gigantic, fluffy comforter."},
  {route:"CVProPage",textColor:"#ceae69",name:"Coffee Vanilla",asset:"./cv/coffee_asset.png",image:"./cv/vanilla_pattern.png",price:"$18.99",description:"Smells like the steam rising off of a hot vanilla latte. Great for sitting in an armchair in a quaint neighborhood cafe."},
  {route:"ETProPage",textColor:"#48c47e",name:"Eucalyptus Tea Tree",asset:"./et/eucalyptus_asset.png",image:"./et/eucalyptus_pattern.png",price:"$18.99",description:"A natural scent inspired by popular aromatherapy oil mixtures. Great for towels, bath robes, and having a \"me day.\""},
  {route:"WCProPage",textColor:"#ff5656",name:"Watermelon Cucumber",asset:"./wc/watermelon_asset.png",image:"./wc/watermelon_pattern.png",price:"$18.99",description:"A sweet, cool and refreshing smell for brightening up your day. Great for picnic blankets, overalls, and being in a generally good mood.",},
  {route:"WGProPage",textColor:"#c4bd72",name:"White Gardenia",asset:"./wg/gardenia_asset.png",image:"./wg/gardenia_pattern.png",price:"$18.99",description:"A sweet and floral perfume with relaxing notes, best used after a carefree frolic through a field of wildflowers."},
  {route:"MTProPage",textColor:"#5b5b5b",name:"Mahogany Teakwood",asset:"./mt/mahogany_asset.png",image:"./mt/mahogany_pattern.png",price:"$18.99",description:"A great everyday alternative to cologne, or for a getaway to a log cabin hidden deep in a snowy forest."},
  {route:"FAProPage",textColor:"#55b9ce",name:"Fresh Air",asset:"./fa/freshair_asset.png",image:"./fa/freshair_pattern.png",price:"$18.99",description:"A soft, cottony fragrance that smells even cleaner than clean. Great for leaping face-first into a gigantic, fluffy comforter."},
  {route:"CVProPage",textColor:"#ceae69",name:"Coffee Vanilla",asset:"./cv/coffee_asset.png",image:"./cv/vanilla_pattern.png",price:"$18.99",description:"Smells like the steam rising off of a hot vanilla latte. Great for sitting in an armchair in a quaint neighborhood cafe."},
  {route:"ETProPage",textColor:"#48c47e",name:"Eucalyptus Tea Tree",asset:"./et/eucalyptus_asset.png",image:"./et/eucalyptus_pattern.png",price:"$18.99",description:"A natural scent inspired by popular aromatherapy oil mixtures. Great for towels, bath robes, and having a \"me day.\""}]

function Home(props) {
  return (
      <div id="top" className={styles.Home}>
        {products.map((product, key) =>
          (
            <div key={key} className={styles.Product} style={{position:key === products.length - 1 ? "absolute" : "relative" }}>
            <div className={styles.ProductContent}>
              <h3 style={{color:product.textColor}}>{product.name}</h3>
              <h4 style={{color:product.textColor}}>{product.description}</h4>
              <h4 style={{color:product.textColor}}>{product.price}</h4>
              <Button style={{color:product.textColor, borderColor:product.textColor, textTransform: 'capitalize', border: '2px solid'}} variant="outlined">Add to Cart</Button>
            </div>
            <Link className={styles.ProductLink} to={`/${product.route}`}>
              <img className={styles.ProductAsset} src={product.asset}/>
            </Link>
            <img className={styles.ProductPattern} alt="" src={product.image}/>
          </div>
        )
        )}

      </div>
    );
}

export default Home;
