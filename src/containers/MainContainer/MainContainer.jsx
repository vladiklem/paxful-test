import React from 'react';

import MainRouter from '../MainRouter/MainRouter';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

const MainContainer = () => {
  return (
    <>
      <NavigationBar />
      <MainRouter />
    </>
  );
}

export default MainContainer;
