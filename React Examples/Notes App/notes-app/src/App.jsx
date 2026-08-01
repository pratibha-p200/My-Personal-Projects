import { useState } from "react";
import "./index.css";

function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (title.trim() === "" || note.trim() === "") {
      alert("Please enter both title and note.");
      return;
    }

    const newNote = {
      id: Date.now(),
      title: title,
      description: note,
    };

    setNotes([...notes, newNote]);

    setTitle("");
    setNote("");
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((item) => item.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="container">
      <h1>Notes App</h1>

      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write your note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>

      <button onClick={addNote}>Add Note</button>

      <div className="notes-container">
        {notes.length === 0 ? (
          <p>No Notes Available</p>
        ) : (
          notes.map((item) => (
            <div className="note-card" key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <button
                className="delete-btn"
                onClick={() => deleteNote(item.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;