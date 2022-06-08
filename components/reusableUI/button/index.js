import React from "react";

function index({ text, clicker }) {
  return (
    <button onClick={clicker} className="text-lg font-bold px-3 py-1.5 bg-white rounded-md text-indigo-600 hover:bg-gray-100 focus:outline-none">
      {text}
    </button>
  );
}

export default index;
