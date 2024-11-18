import styled from "styled-components";

// 스타일 정의
const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const HeadStyle = styled.h1`
  font-size: 2.5em;
  color: royalblue;
  text-align: center;
  margin-bottom: 15px;
  font-family: "Arial", sans-serif;
`;

const Paragraph = styled.p`
  font-size: 1.1em;
  color: #333;
  line-height: 1.6;
  margin: 15px 0;
  font-family: "Georgia", serif;
`;

const DateStyle = styled.span`
  font-size: 0.9em;
  color: gray;
  display: block;
  text-align: right;
  margin-top: 10px;
`;

// 컴포넌트 정의
const HeadLine = ({ title }) => {
  return <HeadStyle>{title}</HeadStyle>;
};

const Contents = ({ description }) => {
  return <Paragraph>{description}</Paragraph>;
};

const NewsDate = ({ date }) => {
  return <DateStyle>{date}</DateStyle>;
};

const Article = ({ data }) => {
  return (
    <Container>
      <HeadLine title={`기사 제목 : ${data.title}`} />
      <Contents description={`본문 내용 : ${data.description}`} />
      <NewsDate date={`기사 작성일 : ${data.date}`} />
    </Container>
  );
};

export default Article;
