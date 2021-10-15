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
import useStyles from './styles';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const theme = useTheme();
  const classes = useStyles();
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
                <Button color="inherit">Buy</Button>
                <Button color="inherit">Rent</Button>
                <Button color="inherit">Sold</Button>
              </div>
            )}
            {/* <div className={classes.search}>
              <div className={classes.SearchIconWrapper}>
                <SearchIcon />
              </div>
              <InputBase
                className={classes.searchInputBase}
                placeholder="Search location…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </div> */}
            <img className={classes.logo} src={logo} alt="oval logo" />
            {isLargeScreen && (
              <div>
                <Button className={classes.leftLink} color="inherit">
                  advertise
                </Button>
                <Button className={classes.leftLink} color="inherit">
                  Help
                </Button>
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
