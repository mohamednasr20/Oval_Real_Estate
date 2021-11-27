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
          defaultZoom={10}
          defaultCenter={{ lat: 40.72289, lng: -73.802961 }}
          center={{ lat: properties[10]?.lat, lng: properties[10]?.lon }}
        >
          {properties?.length &&
            properties?.map((property) => (
              <Marker
                key={property.property_id}
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