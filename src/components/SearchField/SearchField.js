import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const SearchField = () => {
  const [options, setOptions] = useState(['Brooklyn,NY']);

  const classes = useStyles();
  return (
    <Paper className={classes.root} component="form">
      <Autocomplete
        style={{ width: 300 }}
        freeSolo
        options={options.map((option) => option)}
        renderInput={(params) => (
          <TextField
            {...params}
            className={classes.searchField}
            placeholder="Enter Address, zip, city"
          />
        )}
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
