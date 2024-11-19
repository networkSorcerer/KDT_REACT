import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("balak");
  const onClickEnter = () => setMessage("안녕하세요~");
  const onClickLeave = () => setMessage("안녕히 가세요~");

  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color: value }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setValue("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setValue("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setValue("blue")}>
        파란색
      </button>
    </>
  );
};

export default Say;
