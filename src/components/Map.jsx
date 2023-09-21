import { GoogleMap, Marker } from "@react-google-maps/api";

const Map = () => {
  const mapStyles = {
    width: "100%",
    height: "400px",
  };

  const defaultCenter = {
    lat: 55.605,
    lng: 13.0038,
  };

  return (
    <div>
      <GoogleMap mapContainerStyle={mapStyles} zoom={12} center={defaultCenter}>
        <Marker position={{ lat: 55.605, lng: 13.0038 }} />
      </GoogleMap>
    </div>
  );
};

export default Map;
