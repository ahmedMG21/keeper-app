import React from "react";

export default function Note(props) {
  function deleteNote() {
    props.onDelete(props.id);
  }

  return (
    <div className="max-w-xl bg-white shadow-xl ml-7 mt-4  p-2 rounded-lg relative">
      <h1 className="mb-2 text-xl font-medium">{props.title}</h1>
      <p className="mb-2 text-xl ">{props.content}</p>
      <button
        onClick={deleteNote}
        type="button"
        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  absolute right-2 -bottom-7"
      >
        Delete
      </button>
    </div>
  );
}
