import moment from "moment";
import { useEffect, useState } from "react";

interface Props {
  format: string;
}

const CurrentTime = ({ format }: Props) => {
  const [date, setDate] = useState(new Date());
  const refreshClock = () => {
    setDate(new Date());
  };
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
  }, []);
  return <>{moment(date).format(format)}</>;
};

export default CurrentTime;
