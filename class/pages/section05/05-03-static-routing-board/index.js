import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = async () => {
    router.push("/05-04-static-routed-board/1");
  };
  const onClickMove2 = async () => {
    router.push("/05-04-static-routed-board/2");
  };
  const onClickMove3 = async () => {
    router.push("/05-04-static-routed-board/3");
  };

  return (
    <>
      <button onClick={onClickMove1}>1번 페이지 이동하기!!!</button>
      <button onClick={onClickMove2}>2번 페이지 이동하기!!!</button>
      <button onClick={onClickMove3}>3번 페이지 이동하기!!!</button>
    </>
  );
}
