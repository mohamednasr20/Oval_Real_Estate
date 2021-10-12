import React, { useState } from 'react';
import NavDrawer from './NavDrawer/NavDrawer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/logo.png';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Search, SearchIconWrapper, StyledInputBase } from './styles';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const matcheSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const matcheLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ paddingY: 2 }}
        position="fixed"
        color="transparent"
        elevation={0}
      >
        <Container>
          <Toolbar>
            {matcheSmallScreen && (
              <Box>
                <IconButton
                  size="large"
                  onClick={() => setDrawerOpen(!drawerOpen)}
                  aria-label="open drawer"
                  color="inherit"
                  edge="start"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
            {matcheLargeScreen && (
              <Box>
                <Button color="inherit" sx={{ marginRight: 2 }}>
                  Buy
                </Button>
                <Button color="inherit" sx={{ marginRight: 2 }}>
                  Rent
                </Button>
                <Button color="inherit" sx={{ marginRight: 2 }}>
                  Sold
                </Button>
              </Box>
            )}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search location  …"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ margin: 'auto' }}>
              <img src={logo} alt="oval logo" />
            </Box>
            {matcheLargeScreen && (
              <Box sx={{ marginLeft: 'auto' }}>
                <Button sx={{ marginRight: 2 }} color="inherit">
                  advertise
                </Button>
                <Button sx={{ marginRight: 2 }} color="inherit">
                  Help
                </Button>
                <Button
                  sx={{
                    marginRight: 2,
                    borderRadius: 15,
                  }}
                  variant="contained"
                  color="primary"
                >
                  Sign Up
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {matcheSmallScreen && (
        <NavDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      )}
    </Box>
  );
};

export default Navbar;
