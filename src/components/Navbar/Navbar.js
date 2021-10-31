import React, { useState, useEffect } from 'react';
import NavDrawer from './NavDrawer/NavDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import logo from '../../assets/logo.png';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const theme = useTheme();
  const classes = useStyles();
  const location = useLocation();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
    console.log(location);
  });

  return (
    <div className={classes.grow}>
      <AppBar
        className={classes.nav}
        position="fixed"
        color={navbar ? 'inherit' : 'transparent'}
        elevation={navbar ? 6 : 0}
      >
        <Container>
          <Toolbar>
            {isSmallScreen && (
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
            {isLargeScreen && (
              <div>
                <Link
                  to="/search"
                  className={`${classes.link} active`}
                  color="inherit"
                  onClick={() => console.log('he')}
                >
                  Buy
                </Link>
                <Link to="/search" className={classes.link} color="inherit">
                  Rent
                </Link>
                <Link to="/search" className={classes.link} color="inherit">
                  Sold
                </Link>
              </div>
            )}
            {location.pathname === '/search' && (
              <div className={classes.search}>
                <div className={classes.SearchIconWrapper}>
                  <SearchIcon />
                </div>
                <InputBase
                  className={classes.searchInputBase}
                  placeholder="Search location…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            )}
            <Link to="/" className={classes.logo}>
              <img src={logo} alt="oval logo" />
            </Link>

            {isLargeScreen && (
              <div>
                <Link to="/" className={classes.link} color="inherit">
                  Advertise
                </Link>
                <Link to="/" className={classes.link} color="inherit">
                  Help
                </Link>
              </div>
            )}
            {isMobile && (
              <Button
                className={classes.authBtn}
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {isSmallScreen && (
        <NavDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      )}
    </div>
  );
};

export default Navbar;
