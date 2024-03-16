import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Map = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <div className="container-fluid">
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
