import { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalID = setInterval(() => setDate(new Date()), 1000); // 1초마다 한번씩 동작함
    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      <h1>현재 시간을 표시합니다.</h1>
      <h2>현재 시간은 {date.toLocaleTimeString()}</h2>
    </>
  );
};

export default Clock;
