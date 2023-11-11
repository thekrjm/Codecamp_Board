export default function CounterLetDocumentPage() {
  function onClickUp() {
    const count = Number(document.getElementById("count").innerText) + 1;
    document.getElementById("count").innerText = count;
  }
  function onClickDown() {
    const count = Number(document.getElementById("count").innerText) - 1;
    document.getElementById("count").innerText = count;
  }
  return (
    <>
      <div id="count">0</div>
      <button onClick={onClickUp}>올리기</button>
      <button onClick={onClickDown}>내리기</button>
    </>
  );
}
