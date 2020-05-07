import React from 'react';
import { Provider } from 'react-redux';

import MainContainer from './containers/MainContainer/MainContainer';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainContainer />
      </Provider>
    </div>
  );
}

export default App;
