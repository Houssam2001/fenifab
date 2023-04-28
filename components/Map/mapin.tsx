'use client'
import { useLoadScript, GoogleMap, useJsApiLoader ,Marker} from "@react-google-maps/api";
import React, { useMemo } from "react";

export default function Mapin() {
  const [map, setMap] = React.useState(null)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCG0300rijWIBH2J1Wx0c_6M1pOzj0lxVM",
    // "AIzaSyCG0300rijWIBH2J1Wx0c_6M1pOzj0lxVM"
  })
  const containerStyle = {
    width: '100%',
    height:'450pt' ,
  };
  

  const center = {
    lat: 33.57318327341099,
    lng: -7.589838828843998
  };


  const onLoad = React.useCallback(function callback(map:any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map:any) {
    setMap(null)
  }, []);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      
    >
      <Marker position={center} />
      { /* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : <></>
}