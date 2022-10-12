import React, { useState} from "react";
import "./register.css";

export default function Register() {
   return (
    <div className="register">
        <span className="registerTitle">Login</span>
        <form  className="registerForm">
              <label>UserName</label>
              <input type="text" className="registerInput" placeholder="Enter Your username..."/>
              <label>Email</label>
              <input type="text" className="registerInput" placeholder="Enter Your email..."/>
              <label>Password</label>
              <input type="text" className="registerInput" placeholder="Enter Your password..."/>
              <button className="registerButton">Register</button>
              </form>
              <button className="registerLoginButton">Login</button>
    </div>
  )
}
