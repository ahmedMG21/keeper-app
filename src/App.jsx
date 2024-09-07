import React, { useState } from "react";

// Components
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import Note from "./components/Note";
import Footer from "./components/Footer";

// [x] Implement the add note functionality.
// [ ] Implement the delete note functionality.

export default function App() {
  const [notes, setNotes] = useState([]);

  // Create note
  function createNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
    console.log("App Note::::", note);
  }

  // Delete note
  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="min-h-screen bg-zinc-200 flex flex-col">
      {/* Header */}
      <Header />

      {/* Add note */}
      <AddNote onAdd={createNote} />

      {/* <Note /> */}
      <main className="flex-1 mx-16 mt-5 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
