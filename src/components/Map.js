import React from "react";

function Map({lat,lng}){

  const url=`https://maps.google.com/maps?q=${lng},${lat}&output=embed`

        return (
            <div style={{width: '100%'}}>
              <iframe title="map" width="100%" height="600" frameBorder="0" src={url}>
              </iframe>
            </div>
        )
    }
    
    export default Map