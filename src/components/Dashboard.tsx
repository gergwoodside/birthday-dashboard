import moment from "moment";
import BirthdayMessage from "./BirthdayMessageToday";
import CurrentTime from "./CurrentTime";

interface Birthday {
  id: number;
  name: string;
  date: string;
}

interface Props {
  [key: string]: Birthday[];
}

const today = new Date();

const formattedDate = moment(today).format();

const Dashboard = ({ birthdays }: Props) => {
  console.log(birthdays.length);
  return (
    <>
      <div className="dash-text m-5 p-5">
        <h1 className="display-2 text-center">
          {" "}
          <CurrentTime format="LL" />
          <br />
          <CurrentTime format="LTS" />
        </h1>
        <hr></hr>
        <BirthdayMessage birthdays={birthdays} today={formattedDate} />
      </div>
    </>
  );
};

export default Dashboard;
