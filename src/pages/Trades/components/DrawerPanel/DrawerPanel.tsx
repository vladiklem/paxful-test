import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

import { Props } from './DrawerPanel.types';

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: '28%',
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
      width: '28%',
    },
    [theme.breakpoints.only ('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.down ('xs')]: {
      width: '100%'
    },
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
}));

const DrawerPanel = ({drawerOpen, handleToggle, PanelComponent, panelProps, anchor}: Props) => {
  const classes = useStyles();

  return (
    <>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={anchor}
          open={drawerOpen}
          onClose={handleToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <IconButton onClick={handleToggle} className={classes.closeMenuButton}>
            <CloseIcon/>
          </IconButton>
          <PanelComponent
            {...panelProps}
          />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor={anchor}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <PanelComponent
            {...panelProps}
          />
        </Drawer>  
      </Hidden>
    </>
  );
}

export default DrawerPanel;
