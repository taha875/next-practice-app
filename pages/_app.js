import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import Axios from "../baseURL/index";
import AuthContext from "../contexts/auth";
function MyApp({ Component, pageProps }) {
  const [registersuccessfull, setRegisterSuccessfull] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginFalse, setLoginFalse] = useState(false);
  const [registerFalse, setRegisterFalse] = useState(false);
  const [data, setData] = useState("");

  const register = async (email, password, username) => {
    const response = await Axios.post("/create", {
      email,
      username,
      password,
    })
      .then((response) => {
        console.log("signed Up", response);
        setData(response.data);
        setRegisterSuccessfull(true);
        setRegisterFalse(false);
      })
      .catch((err) => {
        setRegisterFalse(true);
      });
  };
  const login = async (email, password) => {
    const response = await Axios.post("/login", {
      email,
      password,
    })
      .then((response) => {
        setLoginSuccess(true);
        setData(response.data);
        setLoginFalse(false);
      })
      .catch((response) => {
        setLoginFalse(true);
        console.log(response);
        return;
      });
  };
  useEffect(() => {
    if (data) {
      let token = data.response.token;
      localStorage.setItem("token", token);
      console.log(token);
    }
  });
  const value = {
    login,
    data,
    register,
    loginSuccess,
    registersuccessfull,
    loginFalse,
    registerFalse,
  };
  return (
    <div className="overflow-hidden h-[100vh]">
      <AuthContext.Provider value={value}>
        <Component {...pageProps} />;
      </AuthContext.Provider>
    </div>
  );
}

export default MyApp;
