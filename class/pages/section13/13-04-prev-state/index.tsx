import { useState } from "react";

export default function CounterLetDocumentPage() {
  const [count, setCount] = useState(0);

  const countUp = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // 최종 결과는 1

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    //최종 결과 5씩 증가
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={countUp}>올리기</button>
    </div>
  );
}
