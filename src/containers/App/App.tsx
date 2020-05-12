import React from 'react';
import { Provider } from 'react-redux';

import MainRouter from 'containers/MainRouter/MainRouter';
import { store } from '../../store';

import 'styles/normalize.css';
import 'styles/general.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainRouter />
      </Provider>
    </div>
  );
}

export default App;
