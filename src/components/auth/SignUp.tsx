import React, { useState, FormEvent } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, showError] = useState(false);

  const errorMessage = () => {
    return (
      <div className="alert alert-danger" role="alert">
        Invalid email address. Maybe you already have an account?
      </div>
    );
  };

  const signUp = (event: FormEvent) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).catch((error) =>
      showError(true)
    );
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h3 className="my-3">Register:</h3>
        {error && errorMessage()}
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
