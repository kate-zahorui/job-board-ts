import { useCallback, useRef } from 'react';
import { useAppSelector } from '../../hooks/hooks';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import s from './Map.module.css';

const Map = () => {
  const { currentJob } = useAppSelector(state => state.jobs);

  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });

  const mapRef = useRef(undefined);

  const onLoad = useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback() {
    mapRef.current = undefined;
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      {currentJob && (
        <GoogleMap
          center={{
            lat: currentJob.location.lat,
            lng: currentJob.location.long,
          }}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          mapContainerClassName={s.container}
        >
          <Marker
            position={{
              lat: currentJob.location.lat,
              lng: currentJob.location.long,
            }}
          />
        </GoogleMap>
      )}
    </>
  );
};

export default Map;
