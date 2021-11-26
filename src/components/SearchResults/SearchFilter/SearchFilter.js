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
import { useDispatch, useSelector } from 'react-redux';
import {
  handleChangeSearchType,
  handleShowAuthModal,
} from '../../../actions/globalState';
import { updateUserDocument } from '../../../firebase/user';
import { v4 as uuidv4 } from 'uuid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';

const SearchFilter = ({ showMap, setShowMap }) => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const searchType = useSelector((state) => state.globalState.searchType);
  const searchParams = useSelector((state) => state.globalState.searchParams);
  const user = useSelector((state) => state.userState.user);
  const userDocument = useSelector((state) => state.userState.userDocument);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const [anchorEl, setAnchorEl] = useState(null);
  const openPoper = Boolean(anchorEl);
  const id = openPoper ? 'simple-popover' : undefined;

  const handleShowFilterPoper = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePoper = () => {
    setAnchorEl(null);
  };

  const isSearchSaved = (savedObjects, object) => {
    const comparedObjects = (object1, object2) => {
      const keys1 = Object.keys(object1);

      for (let key of keys1) {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
      return true;
    };

    return savedObjects?.find((obj) => comparedObjects(object, obj))
      ? true
      : false;
  };

  const isSaved = isSearchSaved(userDocument?.savedSearches, searchParams);

  const handleSavedSearch = async () => {
    if (isSaved) return;
    if (!user) {
      dispatch(handleShowAuthModal(true));
    } else {
      const id = uuidv4();
      const newSearch = { ...searchParams, id, searchType };
      await updateUserDocument(user, 'savedSearches', newSearch, 'add');
    }
  };

  return (
    <div className={classes.root}>
      <ToggleButtonGroup
        className={classes.toggleGroup}
        value={searchType}
        exclusive
        // onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton
          value="list-for-sale"
          aria-label="buy aligned"
          onClick={() => dispatch(handleChangeSearchType('list-for-sale'))}
        >
          Buy
        </ToggleButton>
        <ToggleButton
          value="list-for-rent"
          aria-label="rent-aigned"
          onClick={() => dispatch(handleChangeSearchType('list-for-rent'))}
        >
          Rent
        </ToggleButton>
        <ToggleButton
          value="list-sold"
          aria-label="sold aligned"
          onClick={() => dispatch(handleChangeSearchType('list-sold'))}
        >
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
      <Button
        className={classes.saveSearch}
        variant="outlined"
        color="primary"
        onClick={handleSavedSearch}
      >
        {isSaved ? 'Search Saved' : 'Save Search'}
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
