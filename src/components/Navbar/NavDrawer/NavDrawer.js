import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
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
        <Link className={classes.link} to="/search">
          Buy
        </Link>
        <Link className={classes.link} to="/search">
          Rent
        </Link>
        <Link className={classes.link} to="/search">
          Home Loan
        </Link>
        <Link className={classes.link} to="">
          advertise
        </Link>
        <Link className={classes.link} to="">
          Help
        </Link>
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
