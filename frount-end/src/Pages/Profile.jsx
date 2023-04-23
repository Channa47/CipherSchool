import React, { useEffect, useState } from "react";
import Navbar from "../Componenets/Navbar";
import Details from "../Componenets/Details";
import Map from "../Componenets/Map";
import Abountme from "../Componenets/Abountme";
import Links from "../Componenets/Links";
import ProfInfo from "../Componenets/ProfInfo";
import Password from "../Componenets/password";
import Interest from "../Componenets/Interest";

import axios from "axios";
import "../Styels/Page.css";
function Profile() {
  const init = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  };
  const init_login_details = {
    email: "",
    password: "",
  };
  // let isAuth =  || false;
  const [isAuth, setisAuth] = useState(false);
  const [InputDetails, setInputDetails] = useState(init);
  const [login_Details, setLoginDetails] = useState(init_login_details);
  const [isREgistring, setIsRegistring] = useState(true);
  const [isLoading , setIsloading] = useState(false)
  useEffect(() => {
    setisAuth(localStorage.getItem("isAuthCipherSchool"));
  }, [isAuth]);

  const HandleRegister = () => {
    let payload = {
      first_name: InputDetails.first_name,
      last_name: InputDetails.last_name,
      email: InputDetails.email,
      phone: parseInt(InputDetails.phone),
      password: InputDetails.password,
    };
    setIsloading(true)
    axios
      .post(`https://cipher-gne4.onrender.com/user/reg`, payload)
      .then((r) => {
        console.log(r)
        setIsloading(false)
        if (r.data.msg === "user Registered") {
          setIsloading(false)
          alert(r.data.msg);
          setIsRegistring(!isREgistring);
        } else if (r.data.msg === "User Already Exist") {
          alert(`${r.data.msg} Try Log in `);
          setIsloading(false)
          setIsRegistring(!isREgistring);
        } else {
          setIsloading(false)
          alert("Server Error");
        }
      })
      .catch((e) => {
        setIsloading(false)
        console.log(e);
      });
  };
  const HandleChange = (e) => {
    let name = e.target.name;
    setInputDetails({ ...InputDetails, [name]: e.target.value });
  };
  const HandleLoginChange = (e) => {
    let name = e.target.name;
    setLoginDetails({ ...login_Details, [name]: e.target.value });
  };
  const HandleLogin = () => {
    //  api request
    let payload = {
      email: login_Details.email,
      password: login_Details.password,
    };
    setIsloading(true)
    axios
      .post(`https://cipher-gne4.onrender.com/user/login`, payload)
      .then((r) => {
        setIsloading(false)
        if (r.data.msg === "Login SuccessFull") {
          setIsloading(false)
          alert(r.data.msg)
          localStorage.setItem("user", JSON.stringify(r.data.user[0]));
          localStorage.setItem("isAuthCipherSchool", true);
          setisAuth(true)
        } else {
          setIsloading(false)
          alert(r.data.msg);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      {!isAuth && (
        <div id="Show_RigisterAndLogin_Modal">
          {isREgistring ? (
            <div id="REgistration_container">
              <h1>SIGN UP</h1>
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                value={InputDetails.first_name}
                onChange={HandleChange}
              />
              <br />
              <input
                type="text"
                placeholder="Last name"
                name="last_name"
                value={InputDetails.last_name}
                onChange={HandleChange}
              />
              <br />
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={InputDetails.email}
                onChange={HandleChange}
              />
              <br />
              <input
                type="text"
                placeholder="Phone No"
                name="phone"
                value={InputDetails.phone}
                onChange={HandleChange}
              />
              <br />
              <input
                type="text"
                placeholder="Password"
                name="password"
                value={InputDetails.password}
                onChange={HandleChange}
              />
              <br />
              <button onClick={HandleRegister}>{isLoading ? "Loading...." : "create new account"}</button>
              <h3>
                Already Have a Account ?{" "}
                <span onClick={() => setIsRegistring(!isREgistring)}>
                  Login
                </span>
              </h3>
            </div>
          ) : (
            <div id="Login_container">
              <h1>LOGIN</h1>
              <h3>Welcome back to CipherSchools</h3>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={login_Details.email}
                onChange={HandleLoginChange}
              />
              <br />
              <input
                type="text"
                placeholder="Password"
                name="password"
                value={login_Details.password}
                onChange={HandleLoginChange}
              />
              <br />
              <button onClick={HandleLogin}>{isLoading ? "Loading...." : "Log In"}</button>
              <h3>
                Already Have a Account ?{" "}
                <span onClick={() => setIsRegistring(!isREgistring)}>
                  Sign Up
                </span>
              </h3>
            </div>
          )}
        </div>
      )}
      <Navbar />
      <Details />
      <Abountme />
      <Map />
      <Links />
      <ProfInfo />
      <Password />
      <Interest />
    </>
  );
}

export default Profile;
