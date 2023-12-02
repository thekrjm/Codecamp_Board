import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "src/commons/types/generated/types";
import { useState } from "react";
import type { MouseEvent } from "react";

const FETCH_BOARD = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARD,
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    const qqq = [...myIndex];
    qqq[Number(event.currentTarget.id)] = true;
    setMyIndex(qqq);
    console.log(qqq);
  };

  return (
    <div>
      {data?.fetchBoards?.map((el, index) =>
        !myIndex[index] ? (
          <div key={el._id}>
            <div>
              <div>작성자:{el.writer}</div>
              <div>제목:{el.title}</div>
              <button id={String(index)} onClick={onClickEdit}>
                수정하기
              </button>
            </div>
          </div>
        ) : (
          <input type="text" key={el._id} />
        ),
      )}
    </div>
  );
}
