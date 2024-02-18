import moment from "moment";
import BirthdayMessage from "./BirthdayMessageToday";
import CurrentTime from "./CurrentTime";
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

const today = new Date();
const formattedDate = moment(today).format();

const Dashboard: React.FC<Props> = ({ birthdays, loggedIn }) => {
  return (
    <>
      <div className="dash-text m-5 p-5">
        {loggedIn && auth.currentUser?.displayName != null && (
          <h1 className="text-center">
            <CurrentTime format="welcome" />, {auth.currentUser?.displayName}
          </h1>
        )}
        <h1 className="display-2 text-center">
          <CurrentTime format="dddd" />
          <br />
          <CurrentTime format="LL" />
          <br />
          <CurrentTime format="LTS" />
        </h1>
        <hr />
        <BirthdayMessage birthdays={birthdays} today={formattedDate} />
      </div>
    </>
  );
};

export default Dashboard;
