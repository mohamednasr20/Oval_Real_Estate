import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const SavedSearch = ({ searchParams, deleteSearch, viewListing }) => {
  const searchType = searchParams?.searchType.split('-').join(' ');
  const { beds_min, price_max, price_min } = searchParams;

  const classes = useStyles();

  const priceRange = (min, max) => {
    if ((min, max)) {
      return `$${min} - $${max}`;
    } else if (min && !max) {
      return `$${min}+`;
    } else if (max && !min) {
      return `$0 - $${max}`;
    } else {
      return '';
    }
  };

  const minRooms = beds_min ? `${beds_min}+ beds; ` : '';

  return (
    <div className={classes.root}>
      <Typography variant="h5">{`${searchParams.city},${searchParams.state_code}`}</Typography>
      <div className={classes.search}>
        {`${searchType}; ${minRooms} ${priceRange(price_min, price_max)}`}
      </div>
      <Button
        className={classes.btn}
        variant="contained"
        color="primary"
        onClick={viewListing}
      >
        View new Listing
      </Button>
      <Button
        className={classes.btn}
        variant="outlined"
        color="primary"
        onClick={deleteSearch}
      >
        Delete Search
      </Button>
    </div>
  );
};

export default SavedSearch;
