import React from "react";

export default function Note() {
  return (
    <div className=" w-60 bg-white shadow-xl ml-7 mt-4 p-2 rounded-lg">
      <h1 className="mb-2 text-xl font-medium">This is the note title</h1>
      <p className="mb-2 text-xl ">This is the note content</p>
    </div>
  );
}
