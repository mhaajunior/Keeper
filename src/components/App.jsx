import React, { useState } from "react";
import Header from "./Header"
import Note from "./Note"
import Footer from "./Footer"
import CreateArea from "./CreateArea"

function App() {

    const [notes, setNotes] = useState([]);

    function addItem(inputText) {
        setNotes(prevValue => {
            return [...prevValue, inputText];
        })
    }

    function deleteItem(id) {
        setNotes(prevValue => {
            return prevValue.filter((value, index) => {
                return index !== id;
            })
        })
    }

    return <div>
        <Header />
        <CreateArea 
            onAdd={addItem}
        />
        {notes.map((note, index) => (<Note
            key={index} 
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteItem}
        />))}
        <Footer />
    </div>
}

export default App;