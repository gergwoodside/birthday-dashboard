import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";

const UpdateUser = () => {
  const [displayName, setDisplayName] = useState("");
  const [currentDisplayName, setCurrentDisplayName] = useState(
    auth.currentUser?.displayName
  );
  const handleUpdateDisplayName = () => {
    const currentUser = auth.currentUser;
    setCurrentDisplayName(displayName);
    if (currentUser) {
      updateProfile(currentUser, {
        displayName: displayName,
      }).catch((error) => {
        console.error(error);
      });
    } else {
      console.error("User is not logged in.");
    }
  };

  return (
    <div className="user-update">
      <p>Display name: {currentDisplayName}</p>
      <label htmlFor="update">Name: </label>
      <input
        className="form-control my-2"
        id="update"
        type="text"
        placeholder="What should I call you?"
        onChange={(e) => setDisplayName(e.target.value)}
      ></input>
      <button
        className="btn btn-primary my-2"
        type="submit"
        onClick={handleUpdateDisplayName}
      >
        Update
      </button>
    </div>
  );
};
export default UpdateUser;
