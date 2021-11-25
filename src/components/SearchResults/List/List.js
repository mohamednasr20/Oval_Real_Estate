import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';
import PropertyCard from './PropertyCard/PropertyCard';

const List = ({ showMap, properties }) => {
  const classes = useStyles();

  const showPropertiesList =
    properties?.length &&
    properties.map((property) => {
      return (
        <Grid
          item
          style={{ margin: 'auto' }}
          xs={12}
          sm={4}
          md={showMap ? 6 : 4}
          lg={showMap ? 4 : 3}
          xl={showMap ? 3 : 2}
          key={property?.property_id}
        >
          <PropertyCard showMap={showMap} property={property} />
        </Grid>
      );
    });

  return (
    <>
      {properties?.length ? (
        <Grid container spacing={2} className={classes.root}>
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
