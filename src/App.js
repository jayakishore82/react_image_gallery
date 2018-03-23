import React, { Component } from 'react';
import {BrowserRouter,
        Route,
        Switch          } from 'react-router-dom';

import Menu from './Menu';
import Cats from './Cats';



const App = () => (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Switch>
          <Route  path="/cats" component={Cats} />

        </Switch>
      </div>
    </BrowserRouter>
)






export default App;
