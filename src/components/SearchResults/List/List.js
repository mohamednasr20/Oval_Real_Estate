import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import PropertyCard from './PropertyCard/PropertyCard';

const List = ({ showMap }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item sx={showMap ? 4 : 3}>
        <PropertyCard showMap={showMap} />
      </Grid>
      <Grid item sx={showMap ? 4 : 3}>
        <PropertyCard showMap={showMap} />
      </Grid>
      <Grid item sx={showMap ? 4 : 3}>
        <PropertyCard showMap={showMap} />
      </Grid>
      <Grid item sx={showMap ? 4 : 3}>
        <PropertyCard showMap={showMap} />
      </Grid>
    </Grid>
  );
};

export default List;
