import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Shops from './components/Shop/Shop';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <div className="NaviBar">
    <h2>Shop All</h2>
    <h2>Our Story</h2>
    <h2>Contact</h2>
    <h2>FAQ</h2>
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
