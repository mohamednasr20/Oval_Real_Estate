import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const NavDrawer = ({ drawerOpen, setDrawerOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  const matchMidScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Drawer className={classes.root} open={drawerOpen}>
      <div className={classes.drawerList}>
        <div className={classes.closeIconWrap}>
          <CloseIcon onClick={() => setDrawerOpen(false)} />
        </div>
        <Button color="inherit">Buy</Button>
        <Button color="inherit">Rent</Button>
        <Button color="inherit">Home Loan</Button>
        <Button color="inherit">advertise</Button>
        <Button color="inherit">Help</Button>
        {matchMidScreen && (
          <Button
            className={classes.authBtn}
            variant="contained"
            color="primary"
          >
            Sign up
          </Button>
        )}
      </div>
    </Drawer>
  );
};

export default NavDrawer;
