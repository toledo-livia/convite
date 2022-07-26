import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '90%',
  height: '200px',
  ['@media (maxWidth:780px)']: { // eslint-disable-line no-useless-computed-key
    width: '100px'
  }
};

const center = {
  lat: -23.05002,
  lng: -45.73048
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBIsWo8GKFMFUSbPFOlqHHIUoQ52Y0DnMI"
  })

  const [map, setMap] = React.useState(null)

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)