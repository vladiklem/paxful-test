import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../../components/Header/Header';
import TradesList from '../../components/TradeList/TradeList';
import TradeInfo from '../../components/TradeInfo/TradeInfo';
import ChatPanel from '../../components/ChatPanel/ChatPanel';
import { addMessage, deleteTrade, readMessage } from '../../store/trades/actions';
import { setMode } from '../../store/user/actions';
import { getOpposite } from '../../utils';
import { AppState } from '../../store/reducer.types';
import { TradeItemT } from '../../store/trades/reducer.types';
import './Trades.css';

const listDrawerWidth = '27.25%';
const listPanelWidth = '50%';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: listDrawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    [theme.breakpoints.up('md')]: {
      width: listDrawerWidth
    },
    [theme.breakpoints.down('sm')]: {
      width: listPanelWidth
    },
  },
  content: {
    flexGrow: 1,
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
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
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="left"
            open={listOpen}
            onClose={handleListToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <IconButton onClick={handleListToggle} className={classes.closeMenuButton}>
              <CloseIcon/>
            </IconButton>
            <TradesList
              mode={mode}
              list={trades}
              selectedId={id}
              onReadMessage={onReadMessage}
            />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            <TradesList
              mode={mode}
              list={trades}
              selectedId={id}
              onReadMessage={onReadMessage}
            />
          </Drawer>  
        </Hidden>
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
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="right"
            open={infoOpen}
            onClose={handleInfoToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <IconButton
              onClick={handleInfoToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon/>
            </IconButton>
            <TradeInfo
              trade={currentTrade}
              mode={mode}
              onSwitchMode={onSwitchMode} />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            className={classes.drawer}
            anchor="right"
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            <TradeInfo
              trade={currentTrade}
              onSwitchMode={onSwitchMode}
              mode={mode}
            />
          </Drawer>  
        </Hidden>
      </Box>
    </Box>
  );
}

export default Trades;