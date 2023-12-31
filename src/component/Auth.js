import React, { useState } from "react";
import {  AuthErrorCodes, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";


const Auth = () => {
    const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    let email = input.email.toLowerCase().trim();
    let password = input.password;

    // sign in user
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
        // ...
      })
      .catch((err) => {
        if (
        err.code === AuthErrorCodes.INVALID_PASSWORD ||
        err.code === AuthErrorCodes.USER_DELETED
      ) {
        setError("The email address or password is incorrect");
      } else {
        console.log(err.code);
        alert(err.code);
      }
      });
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div><form autoComplete="off" className="form" onSubmit={handleSubmit}>
    <h1>Sign In</h1>
    <p>Fill the form below to sign in to your account.</p>
    <div className="email-input">
      <input
        name="email"
        placeholder="Enter email"
        type="text"
        onChange={handleChange}
        value={input.email}
        required
        autoComplete="true"
      />
      <label htmlFor="email" className="label-name">
        <span className="content-name">Email</span>
      </label>
    </div>
    <div className="password-input">
      <input
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
        value={input.password}
        type="password"
        required
        autoComplete="true"
      />
      <label htmlFor="password" className="label-name">
        <span className="content-name">Password</span>
      </label>
    </div>
    <div className="btn">
      {error ? <p className="login-error">{error}</p> : null}
      <button title="Login" aria-label="Login" type="submit">
        Login
      </button>
    </div>
  </form></div>
  )
}

export default Auth