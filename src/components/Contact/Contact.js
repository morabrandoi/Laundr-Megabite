import React from 'react';
import styles from './styles.module.css'

function Contact(props) {
    return (
        <>
            <h1 className={styles.headerText}>Contact Information</h1>

            
            <p>They have an E-mail Box here.... Have no idea what to do.  May be another API or just get an email address for them</p>
            <div className={styles.text}>
                <a href="/shop"> Go To Shop</a>
            </div>

            <div className={styles.text}>
                <a href="/aboutus"> About Us </a>
            </div>
            
        </>
    );
}

export default Contact;