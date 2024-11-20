import React, { useState } from "react";
import styled from "styled-components";
// 앱은 화면을 그려주는 리소스(버튼, 인풋 박스 등등)가 이미 폰에 설치되어있음
// 앱은 주로 시스템의 기능을 많이 사용하는 경우는 앱이 유리
// 앱은 화면을 그려주는 요소가 html, css로 구성되어 있지 않음
// 웹으로 개발하면 배포가 자유로움, IOS, 안드로이드 동시 개발시 개발 부담이 적음

const DivBox = styled.div`
  margin: 20px auto;
  border-radius: 20px;
  border: 1px solid #ccc;
  font-size: 1.4em;
  width: 300px;
  height: 200px;
  margin-bottom: 20px;
  background-color: green;
  color: white;
`;

const data = [
  {
    id: 100,
    userName: "천지훈",
    email: "1000won@gmail.com",
  },
  {
    id: 200,
    userName: "백마리",
    email: "2000won@gmail.com",
  },
  {
    id: 300,
    userName: "서민혁",
    email: "3000won@gmail.com",
  },
];
const User = ({ user }) => {
  return (
    <DivBox>
      <p>ID : {user.id}</p>
      <p>이름 : {user.userName}</p>
      <p>이메일 : {user.email}</p>
    </DivBox>
  );
};
const UserList = () => {
  return (
    <>{data && data.map((user, index) => <User key={index} user={user} />)}</>
  );
};

export default UserList;
