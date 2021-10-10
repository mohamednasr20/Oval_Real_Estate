import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import LgHeader from '../../../assets/Header.png';

const Header = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          maxWidth: 515,
          top: 185,
          left: '12.22%',
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{ fontWeight: 400, fontSize: 48 }}
          variant="h4"
          color="primary"
        >
          Find out a place
        </Typography>
        <Typography
          sx={{ fontWeight: 700, fontSize: 52, marginTop: 2 }}
          variant="h4"
          color="primary"
        >
          You'll love to live
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ fontSize: 18, fontWeight: 400, paddingX: 10, marginTop: 4 }}
        >
          With the most complete source of homes for sale & real estate near you
        </Typography>
        <Paper
          component="form"
          sx={{
            p: '15px 10px',
            display: 'flex',
            alignItems: 'center',
            marginTop: 4,
            borderRadius: 2,
          }}
        >
          <InputBase placeholder="Enter Address, zip, city" />
          <Button
            sx={{ marginLeft: 'auto' }}
            color="primary"
            variant="contained"
          >
            Search
          </Button>
        </Paper>
      </Box>
      <Box sx={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
        <img src={LgHeader} />
      </Box>
    </Box>
  );
};

export default Header;
