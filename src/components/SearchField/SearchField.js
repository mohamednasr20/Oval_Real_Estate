import React from 'react';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import useStyles from './styles';

const SearchField = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} component="form">
      <InputBase sx={{ padding: 1 }} placeholder="Enter Address, zip, city" />
      <Button
        sx={{
          marginLeft: 'auto',
          color: '#FFF',
          borderRadius: 15,
          width: { xs: '100%', sm: 'auto' },
        }}
        color="secondary"
        variant="contained"
      >
        Search
      </Button>
    </Paper>
  );
};

export default SearchField;
