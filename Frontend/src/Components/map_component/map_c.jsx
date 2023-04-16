import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker,DirectionsRenderer } from "google-maps-react";
class MapContainer extends Component {
  constructor(props) {
    super(props);

    let a = localStorage.getItem("lat");
    let b = localStorage.getItem("long");
    
    this.state = {
      destination: {
        lat: a,
        lng: b,
      },
      currentPosition: {
        lat: 12.8449599,
        lng: 77.6606413,
      },
    };
  }
  render() {
    const { currentPosition, destination } = this.state;

    return (
      <Map
        google={this.props.google}
        style={{ width: "100%", height: "100%" }}
        zoom={10}
        initialCenter={currentPosition}
      >
        <Marker position={currentPosition} />
        <Marker position={destination} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBJazniV7DRRBkPNzG23AVjazX-XHOdZSk",
})(MapContainer);