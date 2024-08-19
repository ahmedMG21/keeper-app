import React from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

import notes from "./notes";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-200 flex flex-col">
      <Header />

      {/* <Note /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mx-16 mt-5 gap-4 flex-grow">
        {notes.map((note) => (
          <Note key={note.key} title={note.title} content={note.content} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
