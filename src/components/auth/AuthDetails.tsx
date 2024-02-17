import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(false);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(true);
      } else {
        setAuthUser(false);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth).then(() => console.log("signed out"));
  };

  return (
    <div>
      {authUser ? (
        <div>
          <p>Signed in as {auth.currentUser?.email}</p>
          <p>
            <button onClick={userSignOut}>Sign Out</button>
          </p>
        </div>
      ) : (
        <>Signed Out</>
      )}{" "}
    </div>
  );
};

export default AuthDetails;
