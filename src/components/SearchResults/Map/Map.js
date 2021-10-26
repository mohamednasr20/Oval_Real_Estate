import React from 'react';
import GoogleMapReact from 'google-map-react';
import useStyles from './styles';

const Map = ({ showMap }) => {
  const classes = useStyles(showMap);
  const coordinates = { lat: 40.72289, lng: -73.802961 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
