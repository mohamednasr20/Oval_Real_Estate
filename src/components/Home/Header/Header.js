import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import lgHeader from '../../../assets/header.png';
import tabletHeader from '../../../assets/headerTablet.png';
import mobileHeader from '../../../assets/headerMobile.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  const lgScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const tabletScreen = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          maxWidth: { lg: 515, sm: 416, xs: '100%' },
          paddingX: 0.5,
          top: { lg: 185, sm: 140, xs: 110 },
          left: { lg: '12.22%', xs: 0 },
          right: { lg: 'auto', xs: 0 },
          marginX: { sm: 'auto', xs: 2 },
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{ fontWeight: 400, fontSize: { lg: 48, sm: 42, xs: 32 } }}
          variant="h4"
          color="primary"
        >
          Find out a place
        </Typography>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { lg: 52, sm: 42, xs: 32 },
            marginTop: 1,
          }}
          variant="h4"
          color="primary"
        >
          You'll love to live
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: { lg: 18, sm: 16, xs: 14 },
            fontWeight: 400,
            paddingX: { sm: 10, xs: 5 },
            marginTop: 3,
          }}
        >
          With the most complete source of homes for sale & real estate near you
        </Typography>
        <Paper
          component="form"
          sx={{
            p: 1,
            display: 'flex',
            alignItems: 'center',
            marginTop: 5,
            borderRadius: 2,
          }}
        >
          <InputBase
            sx={{ padding: 1 }}
            placeholder="Enter Address, zip, city"
          />
          <Button
            sx={{
              marginLeft: 'auto',
              color: '#FFF',
              borderRadius: 15,
            }}
            color="secondary"
            variant="contained"
          >
            Search
          </Button>
        </Paper>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          width: '100%',
        }}
      >
        <img
          style={{ width: '100%' }}
          src={lgScreen ? lgHeader : tabletScreen ? tabletHeader : mobileHeader}
          alt="header_img"
        />
      </Box>
    </Box>
  );
};

export default Header;
