import { Dispatch, SetStateAction } from "react";

interface IChild1Props {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export default function Child1(props: IChild1Props) {
  const onClickCountUp = (): void => {
    props.setCount((prev) => prev + 1);
  };

  return (
    <>
      자식1:<div>{props.count}</div>
      <button onClick={onClickCountUp}>+</button>
    </>
  );
}
