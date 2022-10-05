import { React } from "react";
import { LinearProgress } from "@mui/material";
function CreateNote({ textHandler, saveHandler, inputText}) {
    //char limit
    const charLimit = 100;
    const charLeft = charLimit - inputText.length;
    return (
        <div className="note" style={{background: "rgba(255, 255, 255, 0" }}>
            <textarea
                cols="10"
                rows="5"
                value={inputText}
                placeholder="Type..."
                onChange={textHandler}
                maxLength="100"
            ></textarea>
            <div className="note_footer">
                <span className="label">{charLeft} left</span>
                <button className="note_save" onClick={saveHandler}> Save</button>
            </div>  
            <LinearProgress
                className="char_progress"
                variant="determinate"
                value={charLeft}
            />
        </div>
    );
} 
export default CreateNote;