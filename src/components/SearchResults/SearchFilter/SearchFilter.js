import React, { useState } from 'react';
import FIlterWraper from './FIlterWraper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import SettingsInputCompositeIcon from '@material-ui/icons/SettingsInputComposite';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';

const SearchFilter = ({ showMap, setShowMap }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const [alignment, setAlignment] = useState('buy');

  const [anchorEl, setAnchorEl] = useState(null);
  const openPoper = Boolean(anchorEl);
  const id = openPoper ? 'simple-popover' : undefined;

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleShowFilterPoper = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePoper = () => {
    setAnchorEl(null);
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

      {isSmallScreen && (
        <>
          <Button
            variant="outlined"
            className={classes.filterBtn}
            onClick={handleShowFilterPoper}
            aria-describedby={id}
          >
            <SettingsInputCompositeIcon
              fontSize="small"
              className={classes.filterIcon}
            />
            Filter
          </Button>
          <Popover
            id={id}
            open={openPoper}
            anchorEl={anchorEl}
            onClose={handleClosePoper}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <FIlterWraper />
          </Popover>
        </>
      )}

      {isLargeScreen && <FIlterWraper />}
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
