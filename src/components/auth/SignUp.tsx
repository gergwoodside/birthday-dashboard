import React, { useState, FormEvent } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (event: FormEvent) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).catch((error) =>
      console.log(error)
    );
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h3 className="my-3">Register:</h3>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" className="btn btn-primary my-3">
          Log In
        </button>
      </form>
    </div>
  );
};

export default SignUp;
