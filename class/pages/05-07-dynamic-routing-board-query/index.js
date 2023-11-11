import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/05-08-dynamic-routed-board-query/1");
  };
  const onClickMove2 = () => {
    router.push("/05-08-dynamic-routed-board-query/2");
  };
  const onClickMove3 = () => {
    router.push("/05-08-dynamic-routed-board-query/7654");
  };

  return (
    <>
      <button onClick={onClickMove1}>1번 페이지 이동하기!!!</button>
      <button onClick={onClickMove2}>2번 페이지 이동하기!!!</button>
      <button onClick={onClickMove3}>3번 페이지 이동하기!!!</button>
    </>
  );
}
