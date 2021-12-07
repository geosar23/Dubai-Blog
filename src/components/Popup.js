import React from "react";

function Popup({trigger,setPopUp,updateBlog,editedBlog,setEditedBlog}){
    
    return(trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={()=>setPopUp(false)}><i className="fas fa-times fa-3x"></i></button>
                <form onSubmit={updateBlog} className="popup-form">
                    <label>Title</label>
                    {/* /Override the title property/ */}
                    <textarea className="titleTextArea" value={editedBlog.title} onChange={(e)=>setEditedBlog({...editedBlog,title:e.target.value})}></textarea>
                    <br></br>
                    <label>Info</label>
                    <textarea className="infoTextArea" value={editedBlog.short_info} onChange={(e)=>setEditedBlog({...editedBlog,short_info:e.target.value})}></textarea>
                    <br></br>
                    <label>Description</label>
                    <textarea className="descriptionTextArea" value={editedBlog.short_info} onChange={(e)=>setEditedBlog({...editedBlog,short_info:e.target.value})}></textarea>
                    <br></br>
                    {/* <label>Latitude</label>
                    <input value={details.location[0]}></input>

                    <label>Longitude</label>
                    <input value={details.location[1]}></input>

                    <label>url</label>
                    <input value={details.url}></input> */}
                    <button type="submit" className="edit-btn">Save</button>
                </form>
                
            </div>
        </div>
    ) : ""
}

export default Popup