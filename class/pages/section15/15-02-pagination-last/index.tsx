import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import { useState } from "react";
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "src/commons/types/generated/types";

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

const FETCH_BOARD_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

const UserInfo = styled.div`
  /* display: flex; */
`;

const InfoWrapper = styled.div`
  /* display: flex; */
  margin-right: 20px;
`;

export default function StaticRoutedPage() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARD);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARD_COUNT);

  console.log(dataBoardsCount);

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  console.log(lastPage);

  const onClickPagination = (event: MouseEvent<HTMLButtonElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };
  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  return (
    <InfoWrapper>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          <UserInfo>
            <div>작성자:{el.writer}</div>
            <br />
            <div>제목:{el.title}</div>
            <br />
            <div>내용:{el.contents}</div>
          </UserInfo>
        </div>
      ))}
      <button onClick={onClickPrevPage}>이전페이지</button>

      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <div key={index + startPage}>
              <button
                id={String(index + startPage)}
                onClick={onClickPagination}
              >
                {index + startPage}
              </button>
            </div>
          ),
      )}
      <button onClick={onClickNextPage}>다음페이지</button>
    </InfoWrapper>
  );
}
