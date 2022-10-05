import { React, useState, useEffect } from "react";
import "../css/Note.css";
import Note from "../../Note";
import { v4 as uuid } from "uuid";
import { SettingsRemoteSharp } from "@mui/icons-material";
import CreateNote from "../../CreateNote";
function Notes() {
    return (
        <div className="notes">
            <Note />
            <Note />
            <CreateNote />
        </div>
    );
}
export default Notes;

//states
const [notes, setNotes] = useState([]);
const [inputText, setInputText] = useState("");

//get text and store in state
// const textHandler = (e) => {
//     setInputText(e.target.value);
// };

// //add new note to the state array
// const saveHandler = () => {
//     SettingsRemoteSharp((prevState) => [
//         ...prevState,
//         {
//             id: uuid(),
//             text: inputText,
//         },
//     ]);
//     //clear the textarea
//     setInputText("");
// };