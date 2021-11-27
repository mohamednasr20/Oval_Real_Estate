import React from 'react';
import MapWrapped from './GoogleMap/Map';
import { useSelector } from 'react-redux';
import useStyles from './styles';

const WrappedMap = ({ showMap }) => {
  const classes = useStyles(showMap);
  const properties = useSelector((state) => state.globalState.properties);

  return (
    <div className={classes.mapContainer}>
      {properties?.length && (
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      )}
    </div>
  );
};

export default WrappedMap;
