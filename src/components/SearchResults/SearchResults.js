import React, { useState, useEffect } from 'react';
import SearchFilter from './SearchFilter/SearchFilter';
import List from './List/List';
import MapWrapped from './Map/WrappedMap';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector, useDispatch } from 'react-redux';
import { getProperties, handleLoading } from '../../actions/globalState';

import useStyles from './styles';

const SearchResults = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [showMap, setShowMap] = useState(true);

  const properties = useSelector((state) => state.globalState.properties);
  const searchParams = useSelector((state) => state.globalState.searchParams);
  const isLoading = useSelector((state) => state.globalState.isLoading);
  const searchType = useSelector((state) => state.globalState.searchType);

  const location = searchParams.postal_code
    ? searchParams.postal_code
    : `${searchParams?.city}, ${searchParams?.state_code}`;

  useEffect(() => {
    dispatch(getProperties(searchParams, searchType));
    dispatch(handleLoading(false));
    // eslint-disable-next-line
  }, [searchParams, searchType]);

  return (
    <Container maxWidth="xl" className={classes.root}>
      {!isLoading ? (
        <>
          <Typography className={classes.subtitle} variant="subtitle1">
            {`${properties?.length} appear from 200 Results`}
          </Typography>
          <Typography
            className={classes.header}
            variant="h4"
            color="textSecondary"
          >
            Search Results <span>{location}</span>
          </Typography>
          <SearchFilter showMap={showMap} setShowMap={setShowMap} />
          <Grid className={classes.resultsContainer} container spacing={3}>
            <Grid item xs={12} md={showMap ? 8 : 12}>
              <List showMap={showMap} properties={properties} />
            </Grid>
            <Grid item xs={12} md={4}>
              <MapWrapped showMap={showMap} />
            </Grid>
          </Grid>
        </>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

export default SearchResults;
