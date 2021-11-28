import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  handleChangeSearchType,
  handleShowAuthModal,
} from '../../../actions/globalState';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const NavDrawer = ({ drawerOpen, setDrawerOpen, handleSavedData }) => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
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
          onClick={() => {
            setDrawerOpen(false);
            dispatch(handleChangeSearchType('list-for-sale'));
          }}
        >
          Buy
        </Link>
        <Link
          className={classes.link}
          to="/search"
          onClick={() => {
            setDrawerOpen(false);
            dispatch(handleChangeSearchType('list-for-rent'));
          }}
        >
          Rent
        </Link>
        <Link
          className={classes.link}
          to="/search"
          onClick={() => {
            setDrawerOpen(false);
            dispatch(handleChangeSearchType('list-sold'));
          }}
        >
          Sold
        </Link>
        <Button
          className={classes.link}
          onClick={() => {
            setDrawerOpen(false);
            handleSavedData('/savedSearches');
          }}
        >
          Saved Homes
        </Button>
        <Button
          className={classes.link}
          onClick={() => {
            setDrawerOpen(false);
            handleSavedData('/savedHomes');
          }}
        >
          Saved Searches
        </Button>
        {isMobile && (
          <Button
            className={classes.authBtn}
            variant="contained"
            color="primary"
            onClick={() => dispatch(handleShowAuthModal(true))}
          >
            Sign up
          </Button>
        )}
      </div>
    </Drawer>
  );
};

export default NavDrawer;
