import React from "react";

function index({ name, email }) {
  return (
    <>
      <div className="flex items-center mt-2">
        <div className="w-40 h-12 bg-white rounded-l-lg text-lg flex items-center pl-3">
          {name}
        </div>
        <div className="w-64 h-12 bg-white rounded-r-lg text-lg flex items-center pl-3">
          {email}
        </div>
      </div>
    </>
  );
}

export default index;
