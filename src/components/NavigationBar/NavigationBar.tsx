import React from 'react';

import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <ul className="navigation-bar__list">
        <li className="navigation-bar__crumb">Overview</li>
        <li className="navigation-bar__crumb">Trades</li>
        <li className="navigation-bar__crumb">Disputes</li>
        <li className="navigation-bar__crumb">Your offers</li>
        <li className="navigation-bar__crumb">My team</li>
        <li className="navigation-bar__crumb">Trade history</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
