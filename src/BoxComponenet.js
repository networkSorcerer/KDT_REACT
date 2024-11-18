import styled from "styled-components";

const BoxStyle = styled.div`
  border: 1px solid black;
  color: white;
  text-align: center;
  background-color: royalblue;
  padding: 10px;
  font-size: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const BoxComponent = ({ children }) => {
  return (
    <>
      <BoxStyle>{children}</BoxStyle>
    </>
  );
};
export default BoxComponent;
