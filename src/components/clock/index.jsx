import { useEffect, useState } from "react";

const formatTimePresent = (timePresent) => {
  const hours = `0${timePresent.getHours()}`.slice(-2);
  const minutes = `0${timePresent.getMinutes()}`.slice(-2);
  const seconds = `0${timePresent.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
};

export default function Clock() {
  const [timeNow, setTimeNow] = useState("");

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const timePresent = new Date();
      const timePresentFormat = formatTimePresent(timePresent);
      setTimeNow(timePresentFormat);
      console.log(timePresentFormat);
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  });
  return (
    <div>
      <p style={{ fontSize: "50px" }}>{timeNow}</p>
    </div>
  );
}
