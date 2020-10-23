import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Shops from './components/Shop/Shop';
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
          <h2 className="NaviButtons">Our Story</h2>
          <h2 className="NaviButtons">Contact</h2>
          <h2 className="NaviButtons">FAQ</h2>
          <div>
            <AccountCircleIcon  className="Icons"/>
            <ShoppingCartIcon className="Icons"/>
          </div>
        </div>
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/shop" component={Shops} exact/>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
