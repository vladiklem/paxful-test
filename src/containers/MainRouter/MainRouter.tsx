import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Trades from '../../pages/Trades/Trades';
import './MainRouter.css';

const MainRouter = () => {
  return (
    <main className="main-content">
      <Router>
        <Switch>
          <Route path="/trades/:id" exact component={Trades} /> 
          <Redirect to="/trades/1" />
        </Switch>
      </Router>
    </main>
  );
};

export default MainRouter;