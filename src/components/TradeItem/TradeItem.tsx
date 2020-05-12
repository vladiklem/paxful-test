import React from 'react';
import { Link } from 'react-router-dom';

import { Props } from './TradeItem.types';
import './TradeItem.css';

const TradeItem = ({ trade, selected, mode, onReadMessage }: Props) => {
  const { id, paymentMethod, amount, paid } = trade;
  const { username, avatarUrl, newMessages } = trade[mode];
  if (newMessages && selected) {
    onReadMessage(id);
  }
  
  return (
    <li className={`trade-item ${selected && 'trade-item--selected'}`}>
      <Link to={`/trades/${id}`}>
        <div className="trade-item__wrapper">
          <div className="trade-item__info">
            <div
              className={`trade-item__indicator trade-item__indicator--${selected && 'active'} trade-item__indicator--${newMessages && 'unread'}`}
            />
            <div className="trade-item__payment">
              <p>{`${username} is ${mode}ing`}</p>
              <h2 className="trade-item__method">{paymentMethod}</h2>
              <div className="trade-item__amount">
                <p>{`${amount} USD`}</p>
                <p>${`(${amount / 500} BTC)`}</p>
              </div>
            </div>
            </div>
          <div className="trade-item__user">
            <img className="trade-item__avatar" src={`../${avatarUrl}`} alt="User avatar" />
            <p className={`trade-item__status--${paid ? 'paid' : 'not-paid'}`}>{paid ? 'PAID' : 'NOT PAID'}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default TradeItem;
