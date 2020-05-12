import React from 'react';

import TradeItem from '../TradeItem/TradeItem';
import { Props } from './TradeList.types';
import './TradeList.css';

const TradeList = (props: Props) => {
  const { list, mode, selectedId, onReadMessage } = props;
  return (
    <div className="trade-list">
      <ul className="trade-list__list">
        {list.map(trade => (
          <TradeItem
            key={trade.hash}
            trade={trade}
            mode={mode}
            selected={selectedId === trade.id}
            onReadMessage={onReadMessage}
          />
        ))}
      </ul>
    </div>
  );
}

export default TradeList;