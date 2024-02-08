import BirthdayMessage from "./BirthdayMessage";
import CurrentTime from "./CurrentTime";

interface Birthday {
  name: string;
  date: string;
}

interface Props {
  [key: string]: Birthday[];
}

const today = new Date();

const formattedDate = today
  .toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
  .split("/")
  .reverse()
  .join("-");

const Dashboard = ({ birthdays }: Props) => {
  return (
    <>
      <div className="dash-text m-5 p-5">
        <h1 className="display-1 text-center">
          {" "}
          <CurrentTime />
        </h1>
        <hr></hr>
        <BirthdayMessage birthdays={birthdays} today={formattedDate} />
      </div>
    </>
  );
};

export default Dashboard;
