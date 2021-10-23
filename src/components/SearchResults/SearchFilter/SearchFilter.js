import React, { useEffect } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import useStyles from './styles';
import { useTheme } from '@material-ui/styles';

const getAmount = () => {
  const array = [];
  for (let i = 1; i < 10; i++) {
    array.push(i * 100000);
  }
  for (let i = 1; i < 10; i++) {
    array.push(i * 1000000);
  }
  const newArray = array.map((n) =>
    n < 1000000
      ? { value: n, text: `${String(n).slice(0, 3)}k` }
      : { value: n, text: `${String(n).slice(0, 1)}m` }
  );

  console.log(newArray);
};

const SearchFilter = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [alignment, setAlignment] = React.useState('buy');
  const [state, setState] = React.useState({
    rooms: '',
    homeType: '',
  });

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const isInputSelected = (value) =>
    value === '' ? 'inherit' : theme.palette.secondary.main;

  useEffect(() => {
    getAmount();
  }, []);

  return (
    <div className={classes.root}>
      <ToggleButtonGroup
        className={classes.toggleGroup}
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="buy" aria-label="buy aligned">
          Buy
        </ToggleButton>
        <ToggleButton value="rent" aria-label="rent-aigned">
          Rent
        </ToggleButton>
        <ToggleButton value="sold" aria-label="sold aligned">
          Sold
        </ToggleButton>
      </ToggleButtonGroup>

      <FormControl className={classes.formControl}>
        <NativeSelect
          disableUnderline
          value={state.homeType}
          onChange={handleChange}
          name="homeType"
          className={classes.selectInput}
          style={{
            color: isInputSelected(state.homeType),
          }}
          inputProps={{ 'aria-label': 'homeType' }}
        >
          <option value="">Types</option>
          <option value={'house'}>House</option>
          <option value={'condo'}>Condo</option>
          <option value={'twonhome'}>Townhome</option>
          <option value={'multi-family'}>Multi_Family</option>
        </NativeSelect>
      </FormControl>

      <FormControl className={classes.formControl}>
        <NativeSelect
          disableUnderline
          value={state.rooms}
          onChange={handleChange}
          name="rooms"
          className={classes.selectInput}
          inputProps={{ 'aria-label': 'rooms' }}
          style={{
            color: isInputSelected(state.rooms),
          }}
        >
          <option value="">Rooms </option>
          <option value={1}>1+ Beds</option>
          <option value={2}>2+ Beds</option>
          <option value={3}>3+ Beds</option>
          <option value={4}>4+ Beds</option>
        </NativeSelect>
      </FormControl>
      <FormControl className={classes.formControl}>
        <NativeSelect
          disableUnderline
          value={state.minPrice}
          onChange={handleChange}
          name="rooms"
          className={classes.selectInput}
          inputProps={{ 'aria-label': 'min-price' }}
          style={{
            color: isInputSelected(state.rooms),
          }}
        >
          <option value="">No Min </option>
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default SearchFilter;
