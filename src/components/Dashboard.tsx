import moment from "moment";
import BirthdayMessageToday from "./BirthdayMessageToday";
import BirthdayMessageMonth from "./BirthdayMessageMonth";
import CurrentTime, { formattedDate } from "./CurrentTime";
import { auth } from "../firebase";

interface Birthday {
  id: string;
  personName: string;
  date: string;
}

interface Props {
  birthdays: Birthday[];
  loggedIn: boolean;
}

const Dashboard: React.FC<Props> = ({ birthdays, loggedIn }) => {
  return (
    <>
      <div className="dash-text m-5 p-5">
        <h1 className="text-center">
          <CurrentTime format="welcome" />, {auth.currentUser?.displayName}.
        </h1>
        <h1 className="display-2 text-center">
          <CurrentTime format="dddd" />,
          <br />
          <CurrentTime format="MMMM Do" />
        </h1>
        <hr />
        <BirthdayMessageToday
          loggedIn={loggedIn}
          birthdays={birthdays}
          today={formattedDate}
        />
        <BirthdayMessageMonth birthdays={birthdays} today={formattedDate} />
      </div>
    </>
  );
};

export default Dashboard;
