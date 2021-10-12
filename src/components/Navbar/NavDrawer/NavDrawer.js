import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import useStyles from './styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const NavDrawer = ({ drawerOpen, setDrawerOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  const matchMidScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Drawer className={classes.root} open={drawerOpen}>
      <Box className={classes.drawerList}>
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
        {matchMidScreen && (
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginTop: 2,
              marginX: 4,
              borderRadius: 15,
            }}
          >
            Sign up
          </Button>
        )}
      </Box>
    </Drawer>
  );
};

export default NavDrawer;
