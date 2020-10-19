import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Shops from './components/Shop/Shops';

function App() {
  return (
    <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/shops" component={Shops} exact/>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
