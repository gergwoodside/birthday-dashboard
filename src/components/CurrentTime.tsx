import moment from "moment";
import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [date, setDate] = useState(new Date());
  const refreshClock = () => {
    setDate(new Date());
  };
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
  }, []);
  return (
    <>
      <div>{moment(date).format("dddd, MMMM Do")}</div>
      <div>{moment(date).format("h:mm:ss a")}</div>
    </>
  );
};

export default CurrentTime;
