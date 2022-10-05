import { React, useState, useEffect } from "react";
import "../css/Note.css";
import Note from "./Note";
import { v4 as uuid } from "uuid";
import CreateNote from "./CreateNote";
function Notes() {
    
    //states
    const [notes, setNotes] = useState([]);
    const [inputText, setInputText] = useState("");

    //get text and store in state
    const textHandler = (e) => {
        setInputText(e.target.value);
    };

    //add new note to the state array
    const saveHandler = () => {
        setNotes((prevState) => [
            ...prevState,
            {
                id: uuid(),
                text: inputText,
            },
        ]);
        //clear the textarea
        setInputText("");
    };

    //delete note
    const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
    };
    
    //get the saved notes and add to the array
    useState(() => {
        const data = JSON.parse(localStorage.getItem("Notes"));
        if(data) {
            setNotes(data);
        }
    }, []);

    //saving data to local storage
    useEffect(() => {
        localStorage.setItem('Notes', JSON.stringify(notes));
    }, [notes]);
    
    return (
        <div className="notes">
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    deleteNote={deleteNote}
                />
            ))}
            <CreateNote 
                textHandler={textHandler}
                saveHandler={saveHandler}
                inputText={inputText}
            />
        </div>
    );
    
}
export default Notes;
