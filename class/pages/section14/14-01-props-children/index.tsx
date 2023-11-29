import Example from "../../../src/components/units/14-01-props-children-example";

export default function PropsChildrenPage(): JSX.Element {
  return (
    <div>
      <div>++++++++++++++++++++++++++++</div>
      <Example school="쿠베라초" name="사람">
        <div>
          <input type="radio" />
          <div>인사 좀 합시다</div>
          <div>인사 좀 합시다</div>
        </div>
      </Example>
      <div>--------------------------------</div>
    </div>
  );
}
