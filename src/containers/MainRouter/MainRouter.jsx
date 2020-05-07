import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Trades from '../../pages/Trades/Trades';

const MainRouter = () => {
  return (
    <main className="main-content">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Trades} /> 
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default MainRouter;