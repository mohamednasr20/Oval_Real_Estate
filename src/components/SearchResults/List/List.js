import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';
import PropertyCard from './PropertyCard/PropertyCard';
import { getProperties } from '../../../actions/globalState';
import { useSelector, useDispatch } from 'react-redux';

const List = ({ showMap }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.globalState.properties);
  const searchParams = useSelector((state) => state.globalState.searchParams);

  useEffect(() => {
    dispatch(getProperties(searchParams));
    // eslint-disable-next-line
  }, [searchParams]);

  const showPropertiesList =
    properties?.length &&
    properties.map((property) => {
      return (
        <Grid item sx={showMap ? 4 : 3} key={property?.property_id}>
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
