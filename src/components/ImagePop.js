import React from "react";

function ImagePop({imgPop, setImgPop, photo}){
    
    return imgPop  ? (
        <div className="imgPop">
            <button className="close-btn" onClick={()=>setImgPop(false)}><i className="fas fa-times fa-3x"></i></button>
            <div className="innerimgPop">
                <img src={photo.url}></img>
            </div>   
        </div>
    ) : <></>
}

export default ImagePop