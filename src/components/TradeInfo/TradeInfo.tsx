import React from 'react';
import Button from '@material-ui/core/Button';

import { Props } from './TradeInfo.types';
import './TradeInfo.css';

const TradeInfo = (props: Props) => {
  const { onSwitchMode } = props;
  
  return (
    <div className="trade-info">
      <h2>Info</h2>
      <Button onClick={onSwitchMode} variant="contained" color="primary">
        Switch mode
      </Button>
    </div>
  );
}

export default TradeInfo;
