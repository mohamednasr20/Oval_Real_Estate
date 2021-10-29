import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

import { getLocationAutoComplete } from '../../api';

const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [options, setOptions] = useState([]);

  const getNewOptions = async () => {
    if (!searchTerm) {
      setOptions([]);
    } else {
      const newOptions = await getLocationAutoComplete(searchTerm);
      console.log(newOptions);
      setOptions(newOptions.map((option) => option.city));
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getNewOptions();
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [searchTerm]);

  const classes = useStyles();
  return (
    <Paper className={classes.root} component="form">
      <Autocomplete
        style={{ width: 300 }}
        freeSolo
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            className={classes.searchField}
            placeholder="Enter Address, zip, city"
            InputProps={{ ...params.InputProps, disableUnderline: true }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
