import React from 'react';
import styles from './styles.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function FooterBar(props) {
  return (
    <div className={styles.FooterBar}>
      <img src="Laundr-Icon-Blue.png" alt="" className={styles.LaundrBlue}/>
      <div>
        <a href="https://www.facebook.com/laundrofficial" target="blank">
          <FacebookIcon className={styles.Icons}/>
        </a>
        <a href="https://www.instagram.com/laundrofficial/" target="blank">
          <InstagramIcon className={styles.Icons}/>
        </a>
        <a href="https://twitter.com/laundrofficial" target="blank">
          <TwitterIcon className={styles.Icons}/>
        </a>
      </div>
      <div>
        <p className={styles.License}>Insert Laundr License here</p>
      </div>
    </div>
  );
}

export default FooterBar;
