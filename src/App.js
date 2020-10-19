import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Shops from './components/Shop/Shop';

function App() {
  return (
    <BrowserRouter>
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
