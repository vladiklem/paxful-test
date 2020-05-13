import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import DrawerPanel from './components/DrawerPanel/DrawerPanel';
import Header from 'components/Header/Header';
import TradeList from 'components/TradeList/TradeList';
import TradeInfo from 'components/TradeInfo/TradeInfo';
import ChatPanel from 'components/ChatPanel/ChatPanel';
import { addMessage, deleteTrade, readMessage } from 'store/trades/actions';
import { setMode } from 'store/user/actions';
import { AppState } from 'store/reducer.types';
import { TradeItemT } from 'store/trades/reducer.types';
import { getOpposite } from '../../utils';
import './Trades.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: '28%',
      flexShrink: 0,
    },
  },
  content: {
    flexGrow: 1,
  },
}));

const Trades = () => {
  const [listOpen, setListOpen] = useState<boolean>(false);
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const [messageText, setMessageText] = useState<string>('');
  const dispatch = useDispatch();
  const trades = useSelector((state: AppState) => state.trades);
  const { id: userId, mode } = useSelector((state: AppState) => state.user);
  const { id } = useParams();
  const classes = useStyles();
  const idExist = trades.some((trade: TradeItemT) => trade.id === id);
  const currentTrade = trades.find((trade: TradeItemT) => trade.id === id) || trades[0];

  const handleInfoToggle= useCallback(() => {
    setInfoOpen(!infoOpen)
  }, [setInfoOpen, infoOpen]);

  const handleListToggle= useCallback(() => {
    setListOpen(!listOpen)
  }, [setListOpen, listOpen]);

  const onSendMessage = useCallback((tradeId: string) => {
    dispatch(addMessage(
      tradeId,
      messageText,
      userId,
      getOpposite(mode)
    ));
    setMessageText('');
  }, [dispatch, setMessageText, messageText, userId, mode]);

  const onDeleteTrade = useCallback((tradeId: string) => {
    if (trades.length > 1) {
      dispatch(deleteTrade(tradeId));
    }
  }, [trades, dispatch]);

  const onSwitchMode = useCallback(() => {
    const newMode = getOpposite(mode);
 
    dispatch(setMode(newMode));
  }, [dispatch, mode]);

  const onReadMessage = useCallback((tradeId: string) => {
    dispatch(readMessage(tradeId, mode));
  }, [dispatch, mode]);

  if (!idExist) {
    return <Redirect to={`/trades/${trades[0].id}`} />
  }

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Header
        handleInfoToggle={handleInfoToggle}
        handleListToggle={handleListToggle}
      />
      <Box component="nav" className={classes.drawer}>
        <DrawerPanel
          drawerOpen={listOpen}
          handleToggle={handleListToggle}
          PanelComponent={TradeList}
          panelProps={{
            mode,
            list: trades,
            selectedId: id,
            onReadMessage: onReadMessage
          }}
          anchor="left"
        />
      </Box>
     
      <Box className={classes.content}>
        <ChatPanel
          onSendMessage={onSendMessage}
          onDeleteTrade={onDeleteTrade}
          trade={currentTrade}
          messageText={messageText}
          setMessageText={setMessageText}
          userId={userId}
          mode={mode}
        />
      </Box>
      <Box className={classes.drawer}>
        <DrawerPanel
          drawerOpen={infoOpen}
          handleToggle={handleInfoToggle}
          PanelComponent={TradeInfo}
          panelProps={{
            trade: currentTrade,
            mode,
            onSwitchMode,
          }}
          anchor="right"
        />
      </Box>
    </Box>
  );
}

export default Trades;