interface IChild2Props {
  onClickCountUp: () => void;
  count: number;
}

export default function Child2(props: IChild2Props) {
  return (
    <>
      자식2:<div>{props.count}</div>
      <button onClick={props.onClickCountUp}>+</button>
    </>
  );
}
