import BirthdayMessage from "./BirthdayMessage";

interface Birthday {
  name: string;
  date: string;
}

interface Props {
  [key: string]: Birthday[];
}

let today = new Date();

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
      <div className="dash-text">
        <h1 className="display-1 text-center">{formattedDate}</h1>
        <BirthdayMessage birthdays={birthdays} today={formattedDate} />
      </div>
    </>
  );
};

export default Dashboard;
