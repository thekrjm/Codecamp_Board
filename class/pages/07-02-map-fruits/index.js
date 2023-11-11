const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
];

export default function mapFruitsPage() {
  //   const aaa = [
  //     <div>1 레드향</div>,
  //     <div>2 샤인머스켓</div>,
  //     <div>3 산청딸기</div>,
  //   ];

  const aaa = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
  ].map((el) => <div>{el.title}</div>);

  const bbb = FRUITS.map((el) => <div>{el.title}</div>);

  return (
    <>
      {aaa}
      {bbb}
    </>
  );
}
