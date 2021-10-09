import React, { useState } from 'react';
import NavTabs from './NavTabs/NavTabs';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/logo.png';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const matcheSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const matcheLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
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
                <Button color="inherit">Buy</Button>
                <Button color="inherit">Rent</Button>
                <Button color="inherit">Home Loan</Button>
              </Box>
            )}
            <Box sx={{ marginLeft: 'auto' }}>
              <img src={logo} />
            </Box>
            {matcheLargeScreen && (
              <Box sx={{ marginLeft: 'auto' }}>
                <Button color="inherit">advertise</Button>
                <Button color="inherit">Help</Button>
              </Box>
            )}

            {/* <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Location…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search> */}
          </Toolbar>
        </Container>
        <Drawer
          open={drawerOpen}
          hideBackdrop
          sx={{
            display: { sm: 'none' },
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              boxSizing: 'border-box',
              marginTop: '56px',
              width: '50%',
              paddingTop: 2,
            },
          }}
        >
          <Box sx={{ textAlign: 'center', marginTop: 3 }}>
            <Button color="inherit" sx={{ margin: 'auto' }}>
              Buy
            </Button>
            <Button color="inherit" sx={{ display: 'block', margin: 'auto' }}>
              Rent
            </Button>
            <Button color="inherit" sx={{ display: 'block', margin: 'auto' }}>
              Home Loan
            </Button>
            <Button color="inherit" sx={{ display: 'block', margin: 'auto' }}>
              advertise
            </Button>
            <Button color="inherit">Help</Button>
          </Box>
        </Drawer>
      </AppBar>
    </Box>
  );
}
