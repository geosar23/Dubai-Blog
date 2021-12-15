import React from "react";

function Popup({popUp,setPopUp,updateBlog,editedBlog,setEditedBlog,errorPut,setErrorPut}){

    function onPopUpClose(){
        setPopUp(false)
        setErrorPut()
    }
    
    return popUp  ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={onPopUpClose}><i className="fas fa-times fa-3x"></i></button>
                <form onSubmit={updateBlog} className="popup-form">
                    <label>Title</label>
                    {/* /Override the title property/ */}
                    <textarea className="titleTextArea" value={editedBlog.title} onChange={(e)=>setEditedBlog({...editedBlog,title:e.target.value})}></textarea>
                    <br></br>
                    <label>Info</label>
                    <textarea className="infoTextArea" value={editedBlog.short_info} onChange={(e)=>setEditedBlog({...editedBlog,short_info:e.target.value})}></textarea>
                    <br></br>
                    <label>Description</label>
                    <textarea className="descriptionTextArea" value={editedBlog.description} onChange={(e)=>setEditedBlog({...editedBlog,description:e.target.value})}></textarea>
                    <br></br>
                    <button type="submit" className="edit-btn">Save</button>
                    {errorPut && <div style={{color:"red",textAlign:"center"}}>Sorry something went wrong</div>}
                </form>
                
            </div>
        </div>
    ) : <></>
}

export default Popup