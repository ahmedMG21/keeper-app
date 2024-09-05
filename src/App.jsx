import React from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

import notes from "./notes";

// [ ] Implement the add note functionality.
// [ ] Implement the delete note functionality.

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-200 flex flex-col">
      <Header />

      {/* <Note /> */}
      <main className="flex-1 mx-16 mt-5 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {notes.map((note) => (
            <Note key={note.key} title={note.title} content={note.content} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
