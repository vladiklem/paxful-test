import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';

import TradesList from '../../components/TradeList/TradeList';
import TradeInfo from '../../components/TradeInfo/TradeInfo';
import ChatPanel from '../../components/ChatPanel/ChatPanel';
import { addMessage, deleteTrade, readMessage } from '../../store/trades/actions';
import { setMode } from '../../store/user/actions';
import { getOpposite } from '../../utils';
import { AppState } from '../../store/reducer.types';
import { TradeItem } from '../../store/trades/reducer.types';
import './Trades.css';

// const infoDrawerWidth = '25.965%';
const listDrawerWidth = '27.25%';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: listDrawerWidth,
      flexShrink: 0,
    },
  },
  header: {
    width: '100%',
    textAlign: 'center',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  tradeInfoButton: {
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: listDrawerWidth
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
  const trades = useSelector((state: AppState) => state.trades);
  const { id: userId, mode } = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const classes = useStyles();
  const [listOpen, setListOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [messageText, setMessageText] = useState('');
  const idExist = trades.some((trade: TradeItem) => trade.id === id);
  const currentTrade = trades.find((trade: TradeItem) => trade.id === id) || trades[0];

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
    ))
  }, [dispatch, messageText, userId, mode]);

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
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open trade list"
            edge="start"
            onClick={handleListToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.header} variant="h6" noWrap>
            Paxful test
          </Typography>
          <IconButton
            color="inherit"
            aria-label="Open trade info"
            edge="start"
            onClick={handleInfoToggle}
            className={classes.tradeInfoButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <div className={classes.drawer}>
        <Hidden smUp implementation="css">
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
        <Hidden xsDown implementation="css">
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
      </div>
     
      <div className={classes.content}>
        <ChatPanel
          onSendMessage={onSendMessage}
          onDeleteTrade={onDeleteTrade}
          trade={currentTrade}
          setMessageText={setMessageText}
          userId={userId}
          mode={mode}
        />
      </div>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
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
            <TradeInfo onSwitchMode={onSwitchMode} />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            anchor="right"
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            <TradeInfo onSwitchMode={onSwitchMode} />
          </Drawer>  
        </Hidden>
      </nav>
    </div>
  );
}

export default Trades;