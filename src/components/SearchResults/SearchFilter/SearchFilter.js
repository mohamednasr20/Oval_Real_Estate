import React, { useState } from 'react';
import SelectInput from './SelectInput/SelectInput';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import SettingsInputCompositeIcon from '@material-ui/icons/SettingsInputComposite';
import useStyles from './styles';

const homeTypes = [
  { value: 'house', text: 'House' },
  { value: 'condo', text: 'Condo' },
  { value: 'twonhome', text: 'Twonhome' },
  { value: 'multi-family', text: 'Multi-Family' },
];

const rooms = [
  { value: 1, text: '1+ Beds' },
  { value: 2, text: '2+ Beds' },
  { value: 3, text: '3+ Beds' },
  { value: 4, text: '4+ Beds' },
];

const getPriceRange = () => {
  const array = [];
  for (let i = 1; i < 10; i++) {
    array.push(i * 100000);
  }
  for (let i = 1; i < 10; i++) {
    array.push(i * 1000000);
  }
  for (let i = 1; i < 10; i++) {
    array.push(i * 10000000);
  }
  const newArray = array.map((n) =>
    n < 1000000
      ? { value: n, text: `$${String(n).slice(0, 3)}k` }
      : {
          value: n,
          text:
            n < 10000000
              ? `$${String(n).slice(0, 1)}m`
              : `$${String(n).slice(0, 2)}m`,
        }
  );

  return newArray;
};

const SearchFilter = ({ showMap, setShowMap }) => {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState('buy');
  const [state, setState] = useState({
    rooms: '',
    homeType: '',
    minPrice: '',
    maxPrice: '',
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

      <Button variant="outlined" className={classes.filterBtn}>
        <SettingsInputCompositeIcon
          fontSize="small"
          className={classes.filterIcon}
        />
        Filter
      </Button>

      {/* <SelectInput
        state={state.homeType}
        name={'homeType'}
        handleChange={handleChange}
        options={homeTypes}
        defaultValue="Types"
      />

      <SelectInput
        state={state.rooms}
        name="rooms"
        handleChange={handleChange}
        options={rooms}
        defaultValue="Rooms"
      /> */}

      {/* <SelectInput
        state={state.minPrice}
        name="minPrice"
        handleChange={handleChange}
        options={getPriceRange()}
        defaultValue="Min Price"
      />

      <SelectInput
        state={state.maxPrice}
        name="maxPrice"
        handleChange={handleChange}
        options={getPriceRange()}
        defaultValue="Max Price"
      /> */}
      <Button className={classes.saveSearch} variant="outlined" color="primary">
        Save Search
      </Button>

      <FormControl className={classes.toggleMap}>
        <FormControlLabel
          control={
            <Switch
              checked={showMap}
              onChange={() => setShowMap(!showMap)}
              name="showMap"
              color="primary"
            />
          }
          label="Show Maps"
        />
      </FormControl>
    </div>
  );
};

export default SearchFilter;
