import React from "react";

const currentYear = new Date().getFullYear();
console.log(currentYear);

export default function Footer() {
  return (
    <div className="flex justify-center items-center absolute inset-x-0 bottom-0 h-16">
      <footer className="text-center">
        <p className="text-slate-400 text-base">Copyright ©️ {currentYear}</p>
      </footer>
    </div>
  );
}
