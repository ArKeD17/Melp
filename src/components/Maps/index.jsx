import React from "react";
import GoogleMaps from "simple-react-google-maps";

function Maps(props) {
  return (
    <div className="container">
      <GoogleMaps
        apiKey={"AIzaSyAIoaqD6zupornIMbdYcAfDaTSHjAjFWJ4"}
        style={{ height: "300px", width: "100%" }}
        zoom={13}
        center={{
          lat: props.lat ? props.lat : 19.440057053713137,
          lng: props.lng ? props.lng : -99.12704709742486,
        }}
      />
    </div>
  );
}

export default Maps;
