// 복잡한 로직을 가진 상태를 관리하는데 사용
import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const ReducerCnt = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <>
      <p>현재 카운터 값은 {state.value}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <br />
    </>
  );
};

export default ReducerCnt;
