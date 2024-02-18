import { useState, FormEvent } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event: FormEvent) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      console.log(error)
    );
  };
  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h3 className="my-3">Login:</h3>
        <input
          type="email"
          className="form-control"
          id="email"
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

export default SignIn;
