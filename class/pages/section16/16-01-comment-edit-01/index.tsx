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
  const [myIndex, setMyIndex] = useState(10);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARD,
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    setMyIndex(Number(event.currentTarget.id));
  };

  return (
    <div>
      {data?.fetchBoards?.map((el, index) =>
        index !== myIndex ? (
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
