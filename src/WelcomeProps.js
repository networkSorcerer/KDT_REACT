// 컴포넌트 : 리액트를 UI를 구성하는 독립적인 모듈
// UI 와 상태 (state) 를 가짐
// 대문자로 시작해야함 ,  소문자로 시작하면 html태그로 판단해 버림
// 부분 컴포넌트에서 자식 컴포넌트로 정보르 전달할때는 props로 전달해야 함
// props는 키워드가 아님
// 구조분해 또는 비구조화 할당
// const welcomProps = ({ name, job, addr, isAdult, productInfo }) => {
const welcomProps = (props) => {
  const { name, job, addr, isAdult, productInfo } = props;
  return (
    <>
      <h1>Hello, {name}</h1>
      <p>직업 : {job}</p>
      <p>주소 : {addr}</p>
      <p>성인 : {isAdult ? "성인입니다." : "미성년자입니다."}</p>
      <p>폰 기종 : {productInfo.product}</p>
      <p>날짜 : {productInfo.date}</p>
    </>
  );
};

export default welcomProps;
