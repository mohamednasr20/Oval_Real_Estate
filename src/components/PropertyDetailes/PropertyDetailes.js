import React from 'react';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';

const PropertyDetailes = () => {
  const classes = useStyles();
  const property = useSelector((state) => state.globalState.selectedProperty);

  return (
    <Container className={classes.root}>
      {property?.address ? (
        <p>{property?.description}</p>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

export default PropertyDetailes;
