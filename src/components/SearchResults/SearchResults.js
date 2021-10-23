import React from 'react';
import SearchFilter from './SearchFilter/SearchFilter';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const SearchResults = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography className={classes.subtitle} variant="subtitle1">
        18 appear from 200 Results
      </Typography>
      <Typography className={classes.header} variant="h4" color="textSecondary">
        Search Results <span>'Atlanta, GA'</span>
      </Typography>
      <SearchFilter />
    </Container>
  );
};

export default SearchResults;
