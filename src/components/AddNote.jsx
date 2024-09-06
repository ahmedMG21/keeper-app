import React, { useState } from "react";

export default function AddNote() {
  //   const [noteTitle, setNoteTitle] = useState("");
  //   const [noteContent, setNoteContent] = useState("");

  const [noteItem, setNoteItem] = useState({
    title: "",
    content: "",
  });

  //   const noteArr = [];

  function handleClick() {
    // * On click add item to the notes.js file.

    console.log("form clicked");
  }

  function handleChange(event) {
    // const noteValue = event.target.value;
    const { name, value } = event.target;
    setNoteItem((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content,
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value,
        };
      }
    });

    console.log(noteItem);
  }

  return (
    <div className="flex  justify-center items-center  ">
      <div className="flex flex-col gap-4  h-40 w-1/3 justify-center items-start pl-5 bg-white shadow-2xl rounded-lg mt-5 relative">
        <form onClick={handleClick}>
          <input
            placeholder="Title"
            type="text"
            name="title"
            value={noteItem.title}
            onChange={handleChange}
            className="w-2/3 h-12 outline-none font-mono text-2xl font-semibold"
          />
          <input
            placeholder="Note content"
            type="text"
            name="content"
            value={noteItem.content}
            onChange={handleChange}
            className="w-2/3 h-9 outline-none font-mono text-lg font-semibold"
          />
          <button
            type="submit"
            className="h-9 w-9 bg-yellow-500 rounded-full text-white text-xs font-semibold absolute -bottom-4 right-5"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
