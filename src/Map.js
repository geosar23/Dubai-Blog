import React, { Component } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import GoogleMapReact from 'google-map-react';

const Map = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };

    render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyBMzUwZXKWkWBYO1MB-zh6CpdjA_QoNWoU' }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <Map
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        );
      }
    }
    
    export default SimpleMap;