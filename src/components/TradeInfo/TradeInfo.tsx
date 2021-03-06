import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

import {
  getOpposite,
  getRandomTime,
  getStatus,
  convertUSDtoBTC
} from '../../utils';
import { useBTC } from 'data/server';
import { Props } from './TradeInfo.types';
import './TradeInfo.css';

const TradeInfo = ({ onSwitchMode, trade, mode }: Props) => {
  const [time, setTime] = useState<number>(0);
  const { username, avatarUrl, rating } = trade[getOpposite(mode)]
  const { paid, hash, amount } = trade;
  const { data, error } = useBTC(time);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newTime = getRandomTime(10000, 60000);
      setTime(newTime);
    }, time);
    return () => {
      clearTimeout(timeout);
    }
  }, [time]);

  return (
    <div className="trade-info">
      <div className="trade-info__general">
        <p className="trade-info__with">{`You are trading with ${username}`}</p>
        <p className="trade-info__started">Started 23 min ago</p>
        <Button variant="contained" color="primary">
          Release bitcoins
        </Button>
      </div>

      <div className="trade-info__table">
        <div className="trade-info__tr">
          <div className="trade-info__th">
            <div className="trade-info__column">
              <img
                className="trade-info__avatar"
                src={`../${avatarUrl}`}
                alt="Opponent avatar"
              />
              <p>{`+${rating.plus} / -${rating.minus}`}</p>
            </div>
          </div>
          <div className="trade-info__th">
            <div className="trade-info__column">
              <p className="trade-info__title"># of trades</p>
              <p>4</p>
            </div>
          </div>
        </div>
        <div className="trade-info__tr">
          <div className="trade-info__th">
            <div className="trade-info__column">
              <p className="trade-info__title">TRADE STATUS</p>
              <p>{getStatus(paid).toUpperCase()}</p>
            </div>
          </div>
          <div className="trade-info__th">
            <div className="trade-info__column">
              <p className="trade-info__title">TRADE HASH</p>
              <p>{hash}</p>
            </div>
          </div>
        </div>
        <div className="trade-info__tr">
          <div className="trade-info__th">
            <div className="trade-info__column">
              <p className="trade-info__title">AMOUN USD</p>
              <p>{amount}</p>
            </div>
          </div>
          <div className="trade-info__th">
            <div className="trade-info__column">
              <p className="trade-info__title">AMOUNT BTC</p>
              <p>{data ? convertUSDtoBTC(amount, data.bpi.USD.rate_float) : '-'}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="trade-info__btc">
        <h3 className="trade-info__title">currency rate</h3>
        {(error || !data) ? (
          <p className="trade-info__rate">Some error was occured, please try later.</p>
        ) : (
         <p className="trade-info__rate">{`1 BTC = ${data.bpi.USD.rate} USD`}</p>
        )}
      </div>
      <Button
        onClick={onSwitchMode}
        variant="contained"
        color="primary"
      >
        Switch mode
      </Button>
    </div>
  );
}

export default TradeInfo;
