import React, { useState } from 'react';
import SearchFilter from './SearchFilter/SearchFilter';
import List from './List/List';
import Map from './Map/Map';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const SearchResults = () => {
  const classes = useStyles();
  const [showMap, setShowMap] = useState(true);

  return (
    <Container className={classes.root}>
      <Typography className={classes.subtitle} variant="subtitle1">
        18 appear from 200 Results
      </Typography>
      <Typography className={classes.header} variant="h4" color="textSecondary">
        Search Results <span>'Atlanta, GA'</span>
      </Typography>
      <SearchFilter showMap={showMap} setShowMap={setShowMap} />
      <Grid className={classes.resultsContainer} container spacing={3}>
        <Grid item xs={showMap ? 8 : 12}>
          <List showMap={showMap} />
        </Grid>
        <Grid item xs={4}>
          <Map showMap={showMap} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchResults;
