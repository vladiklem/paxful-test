import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Message from '../../components/MessageItem/MessageItem';
import { getOpposite } from '../../utils';
import { Props } from './ChatPanel.types';
import { MessageItem } from '../../store/trades/reducer.types';
import './ChatPanel.css';

const ChatPanel = ({
  trade,
  userId,
  mode,
  onSendMessage,
  onDeleteTrade,
  setMessageText
}: Props) => {
  const { id, paymentMethod, chatHistory } = trade;
  const { username, rating } = trade[getOpposite(mode)];
  const onClickSend = () => onSendMessage(id);
  const onClickDelete = () => onDeleteTrade(id);

  return (
    <div className="chat-panel">
      <div className="chat-panel__top-bar">
        <Button
          className="chat-panel__delete"
          onClick={onClickDelete}
          variant="contained"
          color="primary"
        >
          delete
        </Button>
        <div className="chat-panel__info">
          <h2 className="chat-panel__info-method">{paymentMethod}</h2>
          <div className="chat-panel__info-user">
            <p>{username}</p>
            <span>
              {`+${rating.plus} / -${rating.minus}`}
            </span>
          </div>
        </div>
      </div>
      <div className="chat-panel__history">
        {chatHistory.map((message: MessageItem) => (
          <Message key={message.ts} message={message} userId={userId} />
        ))}
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="Standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMessageText(event.target.value)}/>
        <Button onClick={onClickSend} variant="contained" color="primary">
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatPanel;
