import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const SearchField = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} component="form">
      <InputBase
        className={classes.inputBase}
        placeholder="Enter Address, zip, city"
      />
      <Button
        className={classes.searchBtn}
        color="secondary"
        variant="contained"
      >
        Search
      </Button>
    </Paper>
  );
};

export default SearchField;
