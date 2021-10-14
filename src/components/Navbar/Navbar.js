import React, { useState } from 'react';
import NavDrawer from './NavDrawer/NavDrawer';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
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

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Navbar = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const classes = useStyles();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className={classes.grow}>
      <HideOnScroll {...props}>
        <AppBar position="fixed" color="transparent" elevation={0}>
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
              <img className={classes.logo} src={logo} alt="oval logo" />
              {isLargeScreen && (
                <div className={classes.leftLinks}>
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
      </HideOnScroll>
      {isSmallScreen && (
        <NavDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      )}
    </div>
  );
};

export default Navbar;
