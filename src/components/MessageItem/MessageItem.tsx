import React from 'react';

import { Props } from './MessageItem.types';
import './MessageItem.css';

const MessageItem = ({ message, userId }: Props) => {
  const { text, senderId } = message;
  const subclass = userId === senderId ? 'message-item--sender' : '';

  return (
    <div className={`message-item ${subclass}`}>
      <p>{text}</p>
    </div>
  );
}

export default MessageItem;