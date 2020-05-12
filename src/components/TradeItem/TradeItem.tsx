import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getOpposite } from '../../utils';
import { Props } from './TradeItem.types';
import './TradeItem.css';

const TradeItem = ({ trade, selected, mode, onReadMessage }: Props) => {
  const { id, paymentMethod, amount, paid } = trade;
  const { newMessages } = trade[mode];
  const { username, avatarUrl } = trade[getOpposite(mode)];

  useEffect(() => {
    if (newMessages && selected) {
      onReadMessage(id);
    }
  }, [newMessages, selected, id, onReadMessage]);
  
  return (
    <li className={`trade-item ${selected && 'trade-item--selected'}`}>
      <Link className="trade-item__link" to={`/trades/${id}`}>
        <div className="trade-item__wrapper">
          <div className="trade-item__info">
            <div
              className={`
                trade-item__indicator
                trade-item__indicator--${selected && 'active'}
                trade-item__indicator--${newMessages && 'unread'}
              `}
            />
            <div className="trade-item__payment">
              <p className="trade-item__username">{username}</p>
              <h2 className="trade-item__method">{paymentMethod}</h2>
              <div className="trade-item__amount">
                <p>{`${amount} USD`}</p>
                <p>${`(${amount / 500} BTC)`}</p>
              </div>
            </div>
            </div>
          <div className="trade-item__user">
            <img
              className="trade-item__avatar"
              src={`../${avatarUrl}`}
              alt="User avatar"
            />
            <p className={`
              trade-item__status
              trade-item__status--${paid ? 'paid' : 'not-paid'}
            `}>
              {paid ? 'PAID' : 'NOT PAID'}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default TradeItem;
