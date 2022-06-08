import React from "react";
import SVG from "../reusableUI/svgs/index";
import Btn from "../reusableUI/button/index";
import { useRouter } from "next/router";
function index() {
  const router = useRouter();
  return (
    <>
      <div className="w-full  px-2 py-20 sm:py-40 sm:px-12 h-screen flex flex-col  items-center bg-indigo-600 relative">
        <div className="absolute left-0 top-0 pl-3 pt-3">
          <SVG icon="dots" />
        </div>
        <div className="flex relative z-30 flex-col justify-center">
          <div className=" flex flex-col items-center justify-center">
            <SVG icon="logo" />
          </div>
          <h3 className="text-4xl pt-8 leading-tight text-white text-center">The North</h3>
        </div>
        <div className="absolute right-0 bottom-0">
          <SVG icon="circles" />
        </div>
        <h1 className="text-4xl mt-16 text-white font-bold">Welcome Stranger</h1>
        <div className=" flex items-center justify-center gap-x-6 mt-6">
          <Btn text="Login" clicker={() => router.push("/login")} />
          <Btn text="Sign Up" clicker={() => router.push("/signUp")} />
        </div>
      </div>
    </>
  );
}

export default index;
