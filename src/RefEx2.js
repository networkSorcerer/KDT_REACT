// useRef 랜더링하지 않고 값을 저장 : Ex 누적값

import { useRef, useEffect, useState } from "react";

const InnerValueKeep = () => {
  const myButtonRef = useRef(null); // 특정한 DOM의 위치를 가리키기 위해서 사용

  useEffect(() => {
    if (myButtonRef.current) {
      myButtonRef.current.innerText = "클릭하세요";
    }
  }, []);

  // 컴포넌트 내부 변수값 유지
  const count = useRef(0);

  const handleClick = () => {
    count.current += 1;
    alert(`클릭 횟수 : ${count.current}`);
  };
  return (
    <>
      <button ref={myButtonRef} onClick={handleClick}>
        초기상태
      </button>
    </>
  );
};

export default InnerValueKeep;
