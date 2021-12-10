import React from "react";

function Map({lat,lng}){

  const url=`https://maps.google.com/maps?q=${lng},${lat}&output=embed`

        return (
            <div className="map">
              <iframe title="map" frameBorder="0" src={url}>
              </iframe>
            </div>
        )
    }
    
    export default Map