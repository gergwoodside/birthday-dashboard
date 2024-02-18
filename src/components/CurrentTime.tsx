import moment from "moment";
import { useEffect, useState } from "react";

interface Props {
  format: string;
}

const today = new Date();
export const formattedDate = moment(today).format();

const CurrentTime = ({ format }: Props) => {
  const [date, setDate] = useState(new Date());
  const currentHour = parseInt(moment(date).format("HH"));
  const refreshClock = () => {
    setDate(new Date());
  };
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
  }, []);
  if (format == "welcome" && currentHour >= 3 && currentHour < 12) {
    return <>Good morning</>;
  } else if (format == "welcome" && currentHour >= 12 && currentHour < 15) {
    return <>Good afternoon</>;
  } else if (format == "welcome" && currentHour >= 15 && currentHour < 20) {
    return <>Good evening</>;
  } else {
    return <>{moment(date).format(format)}</>;
  }
};

export default CurrentTime;
