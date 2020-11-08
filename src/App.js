import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Shops from './components/Shop/Shop';
import NaviBar from './components/Bars/NaviBar'
import "./App.css";

function App() {
  return (
    <div className="App">
      <NaviBar/>
      <BrowserRouter>
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
    </div>
  );
}

export default App;
