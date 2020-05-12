import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles} from '@material-ui/core/styles';

import { Props } from './Header.types';

const useStyles = makeStyles(theme => ({
  header: {
    width: '100%',
    textAlign: 'center',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  tradeInfoButton: {
    marginLeft: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  },
  toolbar: theme.mixins.toolbar,
}));

const Header = ({ handleInfoToggle, handleListToggle}: Props) => {
  const classes = useStyles();

  return (
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
  )
};

export default Header;
