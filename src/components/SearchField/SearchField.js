import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { onChangeSearchLocation } from '../../actions/globalState';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationAutoComplete } from '../../api';
import useStyles from './styles';

const SearchField = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [options, setOptions] = useState([]);

  const params = useSelector((state) => state.globalState.searchParams);
  const location = searchTerm.split(',');
  const newParams = { state_code: location[1], city: location[0] };

  const handleSearchLocation = (params, newParams) => {
    dispatch(onChangeSearchLocation(params, newParams));
  };

  const getNewOptions = async () => {
    if (!searchTerm) {
      setOptions([]);
    } else {
      const newOptions = await getLocationAutoComplete(searchTerm);

      setOptions(
        newOptions.map((option) => `${option?.city}, ${option?.state_code}`)
      );
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
            onSelect={(e) => setSearchTerm(e.target.value)}
          />
        )}
      />

      <Button
        className={classes.searchBtn}
        color="secondary"
        variant="contained"
        onClick={() => handleSearchLocation(params, newParams)}
      >
        Search
      </Button>
    </Paper>
  );
};

export default SearchField;
