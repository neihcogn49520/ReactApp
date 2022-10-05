import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
function Note() {
    return (
        <div className="note">
            <div className="note_body"></div>
            <div className="note_footer" style={{justifyContent: "flex-end" }}>
                <DeleteForeverOutlinedIcon
                    className="note_delete"
                    aria-hidden="true"
                ></DeleteForeverOutlinedIcon>
            </div>
        </div>
    );
}
export default Note;
