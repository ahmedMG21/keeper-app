import React from "react";

const currentYear = new Date().getFullYear();
// console.log(currentYear);

export default function Footer() {
  return (
    <footer className="text-center h-16 flex items-center justify-center mt-4">
      <p className="text-slate-400 text-base">Copyright ©️ {currentYear}</p>
    </footer>
  );
}
