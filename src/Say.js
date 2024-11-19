import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 960px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  .enterClick {
    background-color: royalblue;
  }
  .leaveClick {
    background-color: orangered;
  }
`;
const Button = styled.button`
  box-sizing: border-box;
  width: 150px;
  padding: 10px 20px;
  border-radius: 8px;
  color: white;
  font-size: 1.4em;
  font-weight: bold;
  background-color: ${(props) => props.color || "black"};
  transition: all 0.1s ease-in;
  &:hover {
    color: #aaa;
    cursor: pointer;
  }
  &:active {
    transform: translateY(2px);
  }
`;
const Say = () => {
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("black");
  const onClickEnter = () => setMessage("안녕하세요~");
  const onClickLeave = () => setMessage("안녕히 가세요~");

  return (
    <Container>
      <ButtonContainer>
        <Button className="enterClick" onClick={onClickEnter}>
          입장
        </Button>
        <Button className="leaveClick" onClick={onClickLeave}>
          퇴장
        </Button>
      </ButtonContainer>

      <h1 style={{ color: value }}>{message}</h1>
      <ButtonContainer>
        <Button color="red" onClick={() => setValue("red")}>
          빨간색
        </Button>
        <Button color="green" onClick={() => setValue("green")}>
          초록색
        </Button>
        <Button color="blue" onClick={() => setValue("blue")}>
          파란색
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Say;
