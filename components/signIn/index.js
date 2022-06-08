import React, { useState, useContext, useEffect } from "react";
import SideImage from "../reusableUI/sideImage/index";
import Form from "../reusableUI/form/index";
import AuthContext from "../../contexts/auth";
import Router from "next/router";
function signUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { login, loginSuccess, loginFalse } = useContext(AuthContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      Router.push("/welcome");
    }
    if (loginSuccess === true) {
      Router.push("/welcome");
    }
    if (loginFalse === true) {
      setError(true);
    }
  });
  return (
    <>
      <div>
        <section className="bg-white {-- h-screen --}">
          <div className="mx-auto flex lg:justify-center h-full flex-col lg:flex-row">
            <SideImage />
            <div className="w-1/2 bg-white flex items-center justify-center">
              <Form
                errorRepeat={error}
                formSubmit={submitHandler}
                formHeading="Login"
                email={(e) => setEmail(e.target.value)}
                password={(e) => setPassword(e.target.value)}
                valueEmail={email}
                valuePassword={password}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default signUp;
