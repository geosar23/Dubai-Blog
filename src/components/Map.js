import React from "react";


function Map({lat,lng}){

  const url=`https://maps.google.com/maps?q=${lng},${lat}&output=embed`

        return (
            <div style={{width: '100%'}}>
              <iframe width="100%" height="600" frameBorder="0" src={url}>
                <a href="https://www.gps.ie/sport-gps/">gps watches</a>
              </iframe>
            </div>
        )
    }
    
    export default Map