import React from 'react';
import styles from './styles.module.css'

function Home(props) {
    return (
        <div>
            <h1>This is home site</h1>
            <p className={styles.sampleText}>This is some sample text on the home site</p>
            <p>
                Edit <code>src/App.js</code> and save to reload. 
                <br></br>
                <br></br>
                To deploy to firebase:
                <br></br>make sure you have installed firebase tools via<br></br><br></br>
                <code>npm install -g firebase-tools</code><br></br><br></br>and run 
                <br></br><br></br><code>firebase login</code><br></br><br></br> Once that is set up, you only
                ever need to run <br></br><br></br><code>firebase deploy</code><br></br><br></br>in the
                terminal. Website should update shortly
            </p>
        </div>
    );
}

export default Home;