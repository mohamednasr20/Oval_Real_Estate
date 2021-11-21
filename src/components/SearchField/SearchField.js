import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { onChangeSearchParams, handleLoading } from '../../actions/globalState';
import { useDispatch, useSelector } from 'react-redux';
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

  const searchParams = useSelector((state) => state.globalState.searchParams);

  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const [searchTerm, setSearchTerm] = useState('');
  const [options, setOptions] = useState([]);

  const searchLocation = searchTerm.includes(',')
    ? searchTerm.split(',')
    : searchTerm;
  const newLocation = Array.isArray(searchLocation)
    ? { state_code: searchLocation[1], city: searchLocation[0] }
    : { postal_code: searchLocation };

  const handleSearchLocation = (searchParams, newParams) => {
    dispatch(onChangeSearchParams(searchParams, newParams));
    dispatch(handleLoading(false));
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
    let cancel = false;
    const timeOut = setTimeout(() => {
      if (cancel) return;
      getNewOptions();
    }, 500);

    return () => {
      cancel = true;
      clearTimeout(timeOut);
    };

    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <Paper className={classes.root} component="form" elevation={0}>
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
          onClick={() => handleSearchLocation(searchParams, newLocation)}
        >
          Search
        </Button>
      ) : (
        <SearchIcon
          className={classes.searchIcon}
          fontSize="large"
          onClick={() => handleSearchLocation(searchParams, newLocation)}
        />
      )}
    </Paper>
  );
};

export default SearchField;
