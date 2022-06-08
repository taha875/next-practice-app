import React from "react";
import SVG from "../svgs/index";
function index() {
  return (
    <>
      {" "}
      <div className="w-full lg:w-1/2 px-2 py-20 sm:py-40 sm:px-12 flex flex-col justify-center items-center bg-indigo-600 relative">
        <div className="absolute left-0 top-0 pl-3 pt-3">
          <SVG icon="dots" />
        </div>
        <div className="flex relative z-30 flex-col justify-center px-4 md:pr-12">
          <div className="px-2 flex flex-col items-center justify-center">
            <SVG icon="logo" />
          </div>
          <h3 className="text-4xl pt-8 leading-tight text-white text-center">The North</h3>
        </div>
        <div className="absolute right-0 bottom-0">
          <SVG icon="circles" />
        </div>
      </div>
    </>
  );
}

export default index;
