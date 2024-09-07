import React, { useState } from "react";

export default function AddNote(props) {
  const [noteItem, setNoteItem] = useState({
    title: "",
    content: "",
  });

  // Handle add note button
  function handleClick(event) {
    // * On click add item to the notes.js file.
    props.onAdd(noteItem);
    setNoteItem({
      title: "",
      content: "",
    });
    event.preventDefault();
    // console.log("form clicked");
  }

  // Handle input change
  function handleChange(event) {
    // const noteValue = event.target.value;
    const { name, value } = event.target;
    setNoteItem((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    // console.log(noteItem);
  }

  return (
    // Notes container
    <div className="flex flex-col  justify-center items-center  ">
      <div className="flex flex-col gap-4  h-40 w-1/3 justify-center items-start pl-5 bg-white shadow-2xl rounded-lg mt-5 relative">
        {/* Notes form */}
        <form>
          <input
            placeholder="Title"
            type="text"
            name="title"
            value={noteItem.title}
            onChange={handleChange}
            className="w-2/3 h-12 outline-none font-mono text-2xl font-semibold mb-3"
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
            onClick={handleClick}
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 h-9 w-9  rounded-full  text-xs font-semibold absolute -bottom-4 right-5"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
