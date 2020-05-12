import React from 'react';

import { Props } from './MessageItem.types';
import './MessageItem.css';

const MessageItem = ({ message, currentUser, avatarUrl }: Props) => {
  const { text } = message;
  const subclass = currentUser ? '--current-user' : '';

  return (
    <div className={`message-item message-item${subclass}`}>
      <div className={`
        message-item__text-wrapper
        message-item__text-wrapper${subclass}
      `}>
        <p>{text}</p>
      </div>
      <img className="message-item__sender-avatar" src={`../${avatarUrl}`} alt="Sender avatar"/>
    </div>
  );
}

export default MessageItem;