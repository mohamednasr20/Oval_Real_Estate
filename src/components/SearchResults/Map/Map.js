import React from 'react';
import PropertyCard from '../List/PropertyCard/PropertyCard';
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux';
import useStyles from './styles';

const Map = ({ showMap }) => {
  const classes = useStyles(showMap);

  const properties = useSelector((state) => state.globalState.properties);

  const coordinates = properties?.length
    ? { lat: properties[10]?.lat, lng: properties[10]?.lon }
    : { lat: 40.72289, lng: -73.802961 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={coordinates}
        center={coordinates}
        averageCenter
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        {properties?.length &&
          properties?.map((property, i) => (
            <div
              key={property.property_id}
              className={classes.markerContainer}
              lat={property.lat}
              lng={property.lon}
            >
              {i + 1}
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
