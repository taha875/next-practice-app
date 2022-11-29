import React, { useState, useEffect, useContext } from "react";
import SideImage from "../reusableUI/sideImage/index";
import Form from "../reusableUI/form/index";
import AuthContext from "../../contexts/auth";
import Router from "next/router";
function signUp() {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [error, setError] = useState(false);
  const { register, registersuccessfull, registerFalse } =
    useContext(AuthContext);
  const submitHandler = async (e) => {
    e.preventDefault();
   
    await register(email, password, username);
  };
  useEffect(() => {
    if (registerFalse === true) {
      setError(true);
    }
    if (registersuccessfull === true) {
      Router.push("/welcome");
    }
  });
  // state tio get data
  return (
    <>
      <div>
        <section className="bg-white {-- h-screen --}">
          <div className="mx-auto flex lg:justify-center h-full flex-col lg:flex-row">
            <SideImage />
            <div className="w-1/2 bg-white flex items-center justify-center">
              <Form
                forms={"signUp"}
                formSubmit={submitHandler}
                formHeading="Sign Up"
                username={(e) => setusername(e.target.value)}
                email={(e) => setEmail(e.target.value)}
                password={(e) => setPassword(e.target.value)}
                repassword={(e) => setReEnterPassword(e.target.value)}
                valueUsername={username}
                valueEmail={email}
                valuePassword={password}
                revaluePassword={reEnterPassword}
                errorRepeat={error}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default signUp;
