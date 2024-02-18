import { useState, FormEvent } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, showError] = useState(false);

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        Sorry, that's not a valid login.
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => showError(false)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  };

  const signIn = (event: FormEvent) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      showError(true)
    );
  };
  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h3 className="my-3">Login:</h3>
        {error && errorMessage()}
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
