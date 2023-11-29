interface IExampleProps {
  school: string;
  children: JSX.Element;
  name: string;
}

export default function Example(props: IExampleProps): JSX.Element {
  return (
    <div>
      <div>방가!</div>
      <div>{props.school}</div>
      <div> {props.children} </div>
      <div>바이</div>
    </div>
  );
}
