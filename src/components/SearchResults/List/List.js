import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';
import PropertyCard from './PropertyCard/PropertyCard';

const List = ({ showMap, properties }) => {
  const classes = useStyles();

  const showPropertiesList =
    properties?.length &&
    properties.map((property, i) => {
      return (
        <Grid
          key={i}
          item
          xs={12}
          sm={4}
          md={showMap ? 6 : 4}
          lg={showMap ? 3 : 2}
        >
          <PropertyCard showMap={showMap} property={property} />
        </Grid>
      );
    });

  return (
    <>
      {properties?.length ? (
        <Grid container spacing={1} className={classes.root}>
          {properties && showPropertiesList}
        </Grid>
      ) : (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default List;
