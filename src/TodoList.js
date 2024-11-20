import { useState } from "react";

const TodoList = () => {
  const [names, setNames] = useState([
    { id: 1, text: "html 연습" },
    { id: 2, text: "css 복습" },
    { id: 3, text: "자바스크립트 이해" },
    { id: 4, text: "리액트 프로젝트" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    // const nextNames = names.concat({id: nextId,  text: inputText});
    const nextNames = [...names, { id: nextId, text: inputText }];
    setNextId(nextId + 1); // id를 증가  시킴
    setNames(nextNames); // todo list 갱신
    setInputText(""); // 입력창을 초기화
  };

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>
        {names && names.map((name) => <li key={name.id}>{name.text}</li>)}
      </ul>
    </>
  );
};

export default TodoList;
