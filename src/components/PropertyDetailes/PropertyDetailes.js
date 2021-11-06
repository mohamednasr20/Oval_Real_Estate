import React from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

const PropertyDetailes = () => {
  const property = useSelector((state) => state.globalState.selectedProperty);

  return (
    <div>
      {property?.address ? (
        <p>{property?.description}</p>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default PropertyDetailes;
