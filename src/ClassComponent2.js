import { useState } from "react";

const Counter2 = () => {
  const [number, setNumber] = useState(0);
  // let number = 0;
  // const setNumber = () => {
  //   number += 1;
  //   console.log(number);
  // };
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <button onClick={() => setNumber(number - 1)}>-1</button>
    </>
  );
};

export default Counter2;
