import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ClassCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    console.log("그려지고나서 실행"); //componentDidMount()와 동일
  }, []); // 의존성 배열(dependency-array)=>배열 내용이 바뀔 때만 재실행

  useEffect(() => {
    console.log("변경되고 나서 실행"); //componentDidUpdate()와 동일
  });

  useEffect(() => {
    //componentDidWillUnMount()와 동일
    return () => {
      console.log("사라지기 전에 실행");
    };
  }, []);

  // 1.useEffect 합치기
  useEffect(() => {
    console.log("그려지고나서 실행");
    return () => {
      console.log("사라지기 전에 실행");
    };
  }); //변경이 필요한 내용이 있으면 dependency array 사용

  // 2.useEffect 잘못된 사용법
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]); -->무한루프에 빠짐

  const onClickCountUp = (): void => {
    console.log(count);
    setCount(count + 1);
  };

  const onClickMove = (): void => {
    router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
