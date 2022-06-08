import React from "react";

function index({ text, type, change, value, error }) {
  return (
    <>
      <div className="flex flex-col mt-8">
        <label className="text-lg font-semibold leading-tight">{text}</label>
        <input value={value} onChange={change} required aria-required="true" name="email" className={`h-10 px-2 w-full rounded mt-2 text-gray-600 ${error ? `border-red-600 focus:outline-none` : `focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300`} border shadow`} type={type ? "" + type : "text"} />
      </div>
    </>
  );
}

export default index;
