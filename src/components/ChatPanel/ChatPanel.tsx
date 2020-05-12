import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import MessageItem from '../../components/MessageItem/MessageItem';
import { getOpposite } from '../../utils';
import { Props } from './ChatPanel.types';
import { MessageItemT } from '../../store/trades/reducer.types';
import './ChatPanel.css';

const useStyles = makeStyles(() => ({
 deleteButton: {
   position: 'absolute',
   left: 0,
   top: '30%',
 },
 messageInput: {
   flexGrow: 1,
   paddingRight: 20,
 }
}));

const ChatPanel = ({
  trade,
  userId,
  mode,
  messageText,
  onSendMessage,
  onDeleteTrade,
  setMessageText
}: Props) => {
  const { id, paymentMethod, chatHistory } = trade;
  const { avatarUrl: currentUserAvatar } = trade[mode];
  const { username, rating, avatarUrl } = trade[getOpposite(mode)];
  const onClickSend = () => messageText && onSendMessage(id);
  const onClickDelete = () => onDeleteTrade(id);
  const classes = useStyles();

  return (
    <div className="chat-panel">
      <div className="chat-panel__top-bar">
        <Button
          className={classes.deleteButton}
          onClick={onClickDelete}
          variant="contained"
          color="primary"
        >
          delete
        </Button>
        <div className="chat-panel__info">
          <h2 className="chat-panel__info-method">{paymentMethod}</h2>
          <div className="chat-panel__info-user">
            <p>{`${username}  +${rating.plus} / -${rating.minus}`}</p>
          </div>
        </div>
      </div>
      <div className="chat-panel__history">
        {chatHistory.map((message: MessageItemT) => {
          const currentUser = message.senderId === userId;

          return (
            <MessageItem
              key={message.ts}
              message={message}
              currentUser={currentUser}
              avatarUrl={currentUser ? currentUserAvatar : avatarUrl}
            />
          )
        })}
      </div>
      <div className="chat-panel__send-panel">
        <TextField
          className={classes.messageInput}
          onChange={
            (
              event: React.ChangeEvent<HTMLInputElement>
            ) => setMessageText(event.target.value)
          }
          value={messageText}
        />
        <Button onClick={onClickSend} variant="contained" color="primary">
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatPanel;
