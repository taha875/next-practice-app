import React, { useState, useEffect } from "react";
import Input from "../input/index";
import Router from "next/router";
function index({ formSubmit, formHeading, username, email, password, repassword, valueUsername, valueEmail, revaluePassword, valuePassword, errorRepeat, errorRepeatOne }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(Router.asPath);
    console.log(query);
  }, []);

  return (
    <>
      <form onSubmit={formSubmit} className="w-full  flex justify-center bg-white dark:bg-gray-900">
        <div className="w-full sm:w-4/6 md:w-3/6 lg:w-2/3 text-gray-800 dark:text-gray-100 flex flex-col justify-center px-2 sm:px-0 py-16">
          <div className="px-2 sm:px-6">
            <h3 className="text-2xl sm:text-3xl md:text-2xl font-bold leading-tight">{formHeading}</h3>
          </div>
          <div className="mt-4 w-full px-2 sm:px-6">
            {query === "/signUp" && <Input error={errorRepeat} value={valueUsername} change={username} text={"Username"} />}

            <Input error={errorRepeat} value={valueEmail} change={email} text={"Email"} type={"email"} />
            <Input error={errorRepeat} value={valuePassword} change={password} text={"Password"} type={"password"} />
            {query === "/signUp" && <Input error={errorRepeat} text={"Re Enter Password"} value={revaluePassword} change={repassword} type={"password"} />}
          </div>
          <div className="px-2 sm:px-6">
            <button type="submit" className="focus:outline-none w-full sm:w-auto bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm mt-6">
              Login
            </button>
            {errorRepeat && (
              <p className="mt-4 text-center text-lg text-red-500">
                {query === "/login" && `Email or Password Not Valid`}
                {query === "/signUp" && `User Already Exists`}
              </p>
            )}

            {query === "/signUp" && (
              <p className="mt-6 text-xs cursor-pointer">
                Already Have An Account?{" "}
                <a className="underline text-indigo-600 cursor-pointer" onClick={() => Router.push("/login")}>
                  Log In
                </a>
              </p>
            )}
            {query === "/login" && (
              <p className="mt-6 text-xs cursor-pointer">
                Don’t Have An Account?{" "}
                <a className="underline text-indigo-600 cursor-pointer" onClick={() => Router.push("/signUp")}>
                  Sign Up
                </a>
              </p>
            )}
          </div>
        </div>
      </form>
    </>
  );
}

export default index;
