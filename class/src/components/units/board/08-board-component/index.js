export default function BoardComponent(props) {
    return (<>
        <h1> {props.component}페이지</h1>
        제목: <input type="text" /><br />
        내용: <input type="text" /><br />
        <button>{props.component}하기</button>
    </>)
}