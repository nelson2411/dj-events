import React from "react";
import Image from "next/image";
import ReactMapGl, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Geocode from "react-geocode";

const EventMap = ({ evt }) => {
  console.table({ evt });
  console.log("address: ", evt.address);
  const [lat, setLat] = React.useState(null);
  const [lng, setLng] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [viewport, setViewport] = React.useState({
    latitude: 40.712772,
    longitude: -73.935242,
    width: "100%",
    height: "500px",
    zoom: 12,
  });

  React.useEffect(() => {
    Geocode.fromAddress(evt.address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.table(lat, lng);
        setLat(lat);
        setLng(lng);
        setViewport({ ...viewport, latitude: lat, longitude: lng });
        setLoading(false);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);
  Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY);
  if (loading) return false;
  return (
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
      onViewportChange={(vp) => setViewport(vp)}
    >
      <Marker key={evt.id} latitude={lat} longitude={lng}>
        <Image src="/pin.svg" width={30} height={30} alt="marker" />
      </Marker>
    </ReactMapGl>
  );
};

export default EventMap;
