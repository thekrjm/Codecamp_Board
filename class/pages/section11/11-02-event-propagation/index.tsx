import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const qqq1 = () => {
    alert("1번");
  };

  const qqq2 = () => {
    alert("2번");
  };
  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div id={el.writer} onClick={qqq1}>
          <span>
            <input type="checkbox" onClick={qqq2} />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title} </span>
          <span style={{ margin: "10px" }}>{el.writer} </span>
        </div>
      ))}
    </div>
  );
}
