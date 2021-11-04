import React, { useState } from 'react';
import SearchFilter from './SearchFilter/SearchFilter';
import List from './List/List';
import Map from './Map/Map';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

import useStyles from './styles';

const SearchResults = () => {
  const classes = useStyles();
  const [showMap, setShowMap] = useState(true);
  const properties = useSelector((state) => state.globalState.properties);
  const searchParams = useSelector((state) => state.globalState.searchParams);
  const location = searchParams.postal_code
    ? searchParams.postal_code
    : `${searchParams?.city}, ${searchParams?.state_code}`;

  return (
    <Container className={classes.root}>
      <Typography className={classes.subtitle} variant="subtitle1">
        {`18 appear from ${properties?.length}  Results`}
      </Typography>
      <Typography className={classes.header} variant="h4" color="textSecondary">
        Search Results <span>{location}</span>
      </Typography>
      <SearchFilter showMap={showMap} setShowMap={setShowMap} />
      <Grid className={classes.resultsContainer} container spacing={3}>
        <Grid item xs={12} md={showMap ? 6 : 12}>
          <List showMap={showMap} properties={properties} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Map showMap={showMap} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchResults;
