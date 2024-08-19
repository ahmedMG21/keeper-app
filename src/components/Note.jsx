import React from "react";

export default function Note(props) {
  return (
    <div className="max-w-xl bg-white shadow-xl ml-7 mt-4 p-2 rounded-lg">
      <h1 className="mb-2 text-xl font-medium">{props.title}</h1>
      <p className="mb-2 text-xl ">{props.content}</p>
    </div>
  );
}
