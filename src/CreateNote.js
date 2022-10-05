import { React } from "react";
function CreateNote() {
    return (
        <div className="note" style={{background: "rgba(255, 255, 255, 0" }}>
            <textarea
                cols="10"
                rows="5"
                placeholder="Type..."
                maxLength="100"
            ></textarea>
            <div className="note_footer">
                <span className="label"> left</span>
                <button className="note_save"> Save</button>
            </div>  
        </div>
    );
} 
export default CreateNote;