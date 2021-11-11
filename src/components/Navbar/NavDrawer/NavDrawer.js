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
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Drawer className={classes.root} open={drawerOpen}>
      <div className={classes.drawerList}>
        <div className={classes.closeIconWrap}>
          <CloseIcon onClick={() => setDrawerOpen(false)} />
        </div>
        <Link
          className={classes.link}
          to="/search"
          onClick={() => setDrawerOpen(false)}
        >
          Buy
        </Link>
        <Link
          className={classes.link}
          to="/search"
          onClick={() => setDrawerOpen(false)}
        >
          Rent
        </Link>
        <Link
          className={classes.link}
          to="/search"
          onClick={() => setDrawerOpen(false)}
        >
          Home Loan
        </Link>
        <Link
          className={classes.link}
          to=""
          onClick={() => setDrawerOpen(false)}
        >
          advertise
        </Link>
        <Link
          className={classes.link}
          to=""
          onClick={() => setDrawerOpen(false)}
        >
          Help
        </Link>
        {isMobile && (
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
