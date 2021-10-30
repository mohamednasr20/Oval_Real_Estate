import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';
import PropertyCard from './PropertyCard/PropertyCard';

import { getproperties } from '../../../api/index';

const List = ({ showMap }) => {
  const classes = useStyles();
  const [filter, setFilter] = useState({
    state_code: 'FL',
    city: 'orlando',
    offset: '0',
    limit: '18',
    sort: 'relevance',
  });

  const [properties, setProperties] = useState([]);

  const getPropertiesList = async () => {
    const newList = await getproperties(filter);
    await setProperties(newList);
    await console.log(newList);
  };

  useEffect(() => {
    getPropertiesList();
  }, []);

  const showPropertiesList = properties.map((property) => {
    return (
      <Grid item sx={showMap ? 4 : 3} key={property.property_id}>
        <PropertyCard showMap={showMap} property={property} />
      </Grid>
    );
  });

  return (
    <>
      {properties.length ? (
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
