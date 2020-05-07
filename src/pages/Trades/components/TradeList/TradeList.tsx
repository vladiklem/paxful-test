import React from 'react';

const TradeList = props => {
  const { list } = props;
  return (
    <div>
      {list.map(trade => <p>{trade.name}</p>)}
    </div>
  );
}

export default TradeList;