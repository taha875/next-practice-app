import React, { useContext, useEffect, useState } from "react";
import SVG from "../reusableUI/svgs/index";
import Table from "../reusableUI/table/index";
import Router from "next/router";
import jwt_decode from "jwt-decode";
import axios from "axios";
function index() {
  const [data, setData] = useState("");
  const [users, setUsers] = useState();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      Router.push("/login");
    } else {
      var decoded = jwt_decode(token);
    }
  });
  useEffect(() => {
    let token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    setData(decoded);
  }, []);

  useEffect(() => {
    axios
      .post("https://practice-backend12.herokuapp.com/users/users")
      .then((response) => {
        console.log(response.data.user);
        setUsers(response.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(users, "users");
  return (
    <div>
      <div className="w-full  px-2 py-20 sm:py-40 sm:px-12 h-screen flex flex-col  items-center bg-indigo-600 relative">
        <div className="absolute left-0 top-0 pl-3 pt-3">
          <SVG icon="dots" />
        </div>
        <div className="flex relative z-30 flex-col justify-center">
          <div className=" flex flex-col items-center justify-center">
            <SVG icon="logo" />
          </div>
          <h3 className="text-4xl pt-8 leading-tight text-white text-center">
            The North
          </h3>
        </div>
        <div className="absolute right-0 bottom-0">
          <SVG icon="circles" />
        </div>
        <h1 className="text-4xl mt-16 text-white font-bold">
          Welcome {data.name}
        </h1>
        <div className="flex items-center mt-8">
          <div className="w-40 h-12 bg-white rounded-l-lg text-lg flex items-center pl-3">
            Name
          </div>
          <div className="w-64 h-12 bg-white rounded-r-lg text-lg flex items-center pl-3">
            Email
          </div>
        </div>
        {users && (
          <>
            {users.map((data) => {
              return <Table name={data.username} email={data.email} />;
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default index;
