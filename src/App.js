import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Shops from './components/Shop/Shop';
import AboutUs from './components/AboutUs/AboutUs';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <div className="NaviBar">
          <a href="/">
          <img src="Laundr-Blue-Logo.png" alt="" className="LaundrBlue"/>
          </a>
          <a href="/shop" className="NaviButtons">
            <h2>Shop All</h2>
          </a>
          <a href="/aboutus" className="NaviButtons">
            <h2>Our Story</h2>
          </a>
          <a href="/faq" className="NaviButtons">
            <h2>FAQ</h2>
          </a>
          <a href="/contact" className="NaviButtons">
            <h2>Contact Us</h2>
          </a>
          <div>
            <AccountCircleIcon  className="Icons"/>
            <ShoppingCartIcon className="Icons"/>
          </div>
        </div>
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/shop" component={Shops} exact/>
            <Route path="/aboutus" component={AboutUs} exact />
            <Route path="/faq" component={FAQ} exact />
            <Route path="/contact" component={Contact} exact />
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
