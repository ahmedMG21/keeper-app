import React from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

//* 5. Create a Note.jsx component to show a <div> element with a
//* <h1> for a title and a <p> for the content.
//* 6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

export default function App() {
  return (
    <div className="h-screen bg-zinc-200">
      <Header />
      <Note />
      <Footer />
    </div>
  );
}
