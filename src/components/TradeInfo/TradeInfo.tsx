import React from 'react';
import Button from '@material-ui/core/Button';

import { getOpposite } from '../../utils';
import { Props } from './TradeInfo.types';
import './TradeInfo.css';

const TradeInfo = ({ onSwitchMode, trade, mode }: Props) => {
  const { username, avatarUrl, rating } = trade[getOpposite(mode)]
  return (
    <div className="trade-info">
      <div className="trade-info__general">
        <p className="trade-info__with">{`You are trading with ${username}`}</p>
        <p>Started 23 min ago</p>
        <Button variant="contained" color="primary">
          Release bitcoins
        </Button>
      </div>

      <div className="trade-info__table">
        <div className="trade-info__tr">
          <div className="trade-info__th">
            <div>
              <img
                className="trade-info__avatar"
                src={`../${avatarUrl}`}
                alt="Opponent avatar"
              />
              <p>{`+${rating.plus} / -${rating.minus}`}</p>
            </div>
          </div>
          <div className="trade-info__th">
            <div>
              <p># of trades</p>
              <p>4</p>
            </div>
          </div>
        </div>
        <div className="trade-info__tr">
          <div className="trade-info__th">
            <p># of trades</p>
          </div>
          <div className="trade-info__th">
            <p>4</p>
          </div>
        </div>
      </div>

      <Button onClick={onSwitchMode} variant="contained" color="primary">
        Switch mode
      </Button>
    </div>
  );
}

export default TradeInfo;
