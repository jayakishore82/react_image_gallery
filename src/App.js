import React from 'react';
import {BrowserRouter,
        Route,
        Switch,
        Redirect} from 'react-router-dom';

import Search from './Search';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';

const App = () => (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" render={() => <Redirect to='/search/cats'/>} />
          <Route exact path="/search/:searchWord" component={PhotoContainer} />
          <Route exact path="/search" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
)

export default App;
