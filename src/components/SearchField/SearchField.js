import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { onChangeSearchLocation } from '../../actions/globalState';
import { useDispatch } from 'react-redux';
import { getLocationAutoComplete } from '../../api';
import { useHistory, useLocation } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './styles';

const SearchField = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles(location);
  const theme = useTheme();

  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const [searchTerm, setSearchTerm] = useState('');
  const [options, setOptions] = useState([]);

  const searchLocation = searchTerm.includes(',')
    ? searchTerm.split(',')
    : searchTerm;
  const newLocation = Array.isArray(searchLocation)
    ? { state_code: searchLocation[1], city: searchLocation[0] }
    : { postal_code: searchLocation };

  const handleSearchLocation = (params, newParams) => {
    dispatch(onChangeSearchLocation(params, newParams));
    history.push('/search');
  };

  const getNewOptions = async () => {
    if (!searchTerm) {
      setOptions([]);
    } else {
      const newOptions = await getLocationAutoComplete(searchTerm);
      if (newOptions?.length) {
        setOptions(
          newOptions.map((option) => {
            return option.area_type === 'postal_code'
              ? option.postal_code
              : `${option?.city}, ${option?.state_code}`;
          })
        );
      }
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getNewOptions();
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };

    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <Paper className={classes.root} component="form">
      <Autocomplete
        freeSolo
        fullWidth
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            className={classes.searchField}
            placeholder={
              isLargeScreen || location.pathname === '/'
                ? 'Enter zip, City'
                : 'search'
            }
            InputProps={{ ...params.InputProps, disableUnderline: true }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onSelect={(e) => setSearchTerm(e.target.value)}
          />
        )}
      />
      {location.pathname === '/' ? (
        <Button
          className={classes.searchBtn}
          color="secondary"
          variant="contained"
          onClick={() => handleSearchLocation(newLocation)}
        >
          Search
        </Button>
      ) : (
        <SearchIcon
          className={classes.searchIcon}
          fontSize="large"
          onClick={() => handleSearchLocation(newLocation)}
        />
      )}
    </Paper>
  );
};

export default SearchField;
