import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "src/commons/types/generated/types";
import styled from "styled-components";
import { MouseEvent, useState } from "react";

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

const UserInfo = styled.div`
  /* display: flex; */
`;

const InfoWrapper = styled.div`
  display: flex;
  margin-right: 20px;
`;

export default function StaticRoutedPage() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARD);
  console.log(data);

  const onClickPagination = (event: MouseEvent<HTMLButtonElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = (): void => {
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };
  const onClickNextPage = (): void => {
    setStartPage(startPage + 10);
    void refetch({ page: startPage + 10 });
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
      {new Array(10).fill(1).map((_, index) => (
        <div key={index + startPage}>
          <button id={String(index + startPage)} onClick={onClickPagination}>
            {index + startPage}
          </button>
        </div>
      ))}
      <button onClick={onClickNextPage}>다음페이지</button>
    </InfoWrapper>
  );
}
