import React, { useState } from 'react';
import MapCard from '../GoogleMap/MapCard/MapCard';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps';
import { useSelector } from 'react-redux';
import locationIcon from '../../../../assets/Shape.svg';
const Map = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const properties = useSelector((state) => state.globalState.properties);
  const isLoading = useSelector((state) => state.globalState.isLoading);

  return (
    <div>
      {!isLoading ? (
        <GoogleMap
          defaultZoom={11}
          defaultCenter={{ lat: 40.72289, lng: -73.802961 }}
          center={{ lat: properties[25]?.lat, lng: properties[25]?.lon }}
        >
          {properties?.length &&
            properties?.map((property, i) => (
              <Marker
                key={i}
                position={{
                  lat: property.lat,
                  lng: property.lon,
                }}
                onClick={() => setSelectedProperty(property)}
                icon={{
                  url: locationIcon,
                  scaledSize: new window.google.maps.Size(50, 50),
                }}
              />
            ))}
          {selectedProperty && (
            <InfoWindow
              onCloseClick={() => setSelectedProperty(null)}
              position={{
                lat: selectedProperty.lat,
                lng: selectedProperty.lon,
              }}
            >
              <MapCard selectedProperty={selectedProperty} />
            </InfoWindow>
          )}
        </GoogleMap>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default MapWrapped;
