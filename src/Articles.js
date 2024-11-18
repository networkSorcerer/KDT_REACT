import Article from "./Article";

const data = [
  {
    title: "정치",
    description: "2024 미 대선 도널드 트럼프 당선",
    date: "2024-11-18",
  },
  {
    title: "경제",
    description: "세계 경제 성장 둔화 예상",
    date: "2024-11-18",
  },
  {
    title: "사회",
    description: "겨울, 월동 준비 본격화",
    date: "2024-11-18",
  },
  {
    title: "문화",
    description: "새로운 영화 대작 개봉",
    date: "2024-11-18",
  },
];

const Articles = () => {
  return (
    <div>
      <h1>오늘의 뉴스</h1>
      {data && data.map((e, index) => <Article key={index} data={e} />)}
    </div>
  );
};

export default Articles;
