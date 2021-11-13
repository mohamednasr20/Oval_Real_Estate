import React, { useState, useEffect } from 'react';
import NavDrawer from './NavDrawer/NavDrawer';
import SearchField from '../SearchField/SearchField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/logo.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  handleChangeSearchType,
  handleShowAuthModal,
} from '../../actions/globalState';
import useStyles from './styles';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles(location);
  const matchPropertyDetailes = useRouteMatch('/search/:id');

  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <div className={classes.grow}>
      <AppBar
        className={classes.nav}
        position="fixed"
        color={navbar ? 'inherit' : 'transparent'}
        elevation={navbar || location.pathname !== '/' ? 6 : 0}
      >
        <Container maxWidth="xl">
          <Toolbar>
            {isTablet && (
              <div>
                <IconButton
                  className={classes.iconBtn}
                  size="medium"
                  onClick={() => setDrawerOpen(!drawerOpen)}
                  aria-label="open drawer"
                  color="inherit"
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
              </div>
            )}
            {matchPropertyDetailes &&
              matchPropertyDetailes.path === '/search/:id' && (
                <div className={classes.backBtn}>
                  <Button
                    color="secondary"
                    onClick={() => history.push('/search')}
                  >
                    <ArrowBackIcon className={classes.backIcon} />
                    Back To Maps
                  </Button>
                </div>
              )}
            {isDesktop && location.pathname !== '/search' && (
              <div>
                <Link
                  to="/search"
                  className={classes.link}
                  color="inherit"
                  onClick={() =>
                    dispatch(handleChangeSearchType('list-for-sale'))
                  }
                >
                  Buy
                </Link>
                <Link
                  to="/search"
                  className={classes.link}
                  color="inherit"
                  onClick={() =>
                    dispatch(handleChangeSearchType('list-for-rent'))
                  }
                >
                  Rent
                </Link>
                <Link
                  to="/search"
                  className={classes.link}
                  color="inherit"
                  onClick={() => dispatch(handleChangeSearchType('list-sold'))}
                >
                  Sold
                </Link>
              </div>
            )}
            {!matchPropertyDetailes && (
              <Link to="/" className={classes.logo}>
                <img src={logo} alt="oval logo" />
              </Link>
            )}

            {location.pathname === '/search' && <SearchField />}

            {isDesktop && (
              <div style={{ marginLeft: 'auto' }}>
                <Link to="/" className={classes.link} color="inherit">
                  Saved Homes
                </Link>
                <Link to="/" className={classes.link} color="inherit">
                  Saved Searches
                </Link>
              </div>
            )}
            {isMobile && (
              <Button
                className={classes.authBtn}
                variant="contained"
                color="primary"
                onClick={() => dispatch(handleShowAuthModal(true))}
              >
                Sign Up
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {isTablet && (
        <NavDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      )}
    </div>
  );
};

export default Navbar;
