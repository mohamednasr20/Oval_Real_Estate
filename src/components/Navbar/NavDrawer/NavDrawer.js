import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { MyDrawer } from './styles';

const NavDrawer = ({ drawerOpen, setDrawerOpen }) => {
  return (
    <MyDrawer open={drawerOpen}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: 2,
        }}
      >
        <Box sx={{ marginLeft: 'auto' }}>
          <CloseIcon onClick={() => setDrawerOpen(false)} />
        </Box>
        <Button color="inherit" sx={{ marginTop: 2 }}>
          Buy
        </Button>
        <Button color="inherit" sx={{ marginTop: 2 }}>
          Rent
        </Button>
        <Button color="inherit" sx={{ marginTop: 2 }}>
          Home Loan
        </Button>
        <Button color="inherit" sx={{ marginTop: 2 }}>
          advertise
        </Button>
        <Button color="inherit" sx={{ marginTop: 2 }}>
          Help
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2, marginX: 4 }}
        >
          Sign up
        </Button>
      </Box>
    </MyDrawer>
  );
};

export default NavDrawer;
