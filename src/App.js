import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NaviBar from './components/Bars/NaviBar'
import Shops from './components/Shop/Shop';
import AboutUs from './components/AboutUs/AboutUs';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import FooterBar from './components/Bars/FooterBar'
import "./App.css";
import WCProPage from './components/ProductPages/WCProPage';
import WGProPage from './components/ProductPages/WGProPage';
import MTProPage from './components/ProductPages/MTProPage';
import FAProPage from './components/ProductPages/FAProPage';
import CVProPage from './components/ProductPages/CVProPage';
import ETTProPage from './components/ProductPages/ETTProPage';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <NaviBar/>
      <div className="Content">
        <BrowserRouter>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/shop" component={Shops} exact/>
              <Route path="/aboutus" component={AboutUs} exact />
              <Route path="/faq" component={FAQ} exact />
              <Route path="/contact" component={Contact} exact />
              <Route path="/WCProPage" component={WCProPage} exact />
              <Route path="/WGProPage" component={WGProPage} exact />
              <Route path="/MTProPage" component={MTProPage} exact />
              <Route path="/FAProPage" component={FAProPage} exact />
              <Route path="/CVProPage" component={CVProPage} exact />
              <Route path="/ETTProPage" component={ETTProPage} exact />
            </Switch>
        </BrowserRouter>
      </div>
      <div className="Fill"/>
      <FooterBar/>
    </div>
  );
}

export default App;
