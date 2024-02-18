import { auth } from "../firebase";
import CurrentTime from "./CurrentTime";

const PersonalGreeting = () => {
  if (auth.currentUser?.displayName) {
    return (
      <h1 className="text-center">
        <CurrentTime format="welcome" />, {auth.currentUser.displayName}.
      </h1>
    );
  } else
    return (
      <h1>
        <CurrentTime format="welcome" />.
      </h1>
    );
};

export default PersonalGreeting;
