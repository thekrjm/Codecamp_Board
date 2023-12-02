import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "src/commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";

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

const ScrollWrapper = styled.div`
  height: 700px;
  overflow: auto;
`;

export default function StaticRoutedPage() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARD);
  console.log(data);

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <ScrollWrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
        useWindow={false}
      >
        {data?.fetchBoards?.map((el) => (
          <div key={el._id}>
            <div>
              <div>작성자:{el.writer}</div>
              <br />
              <div>제목:{el.title}</div>
              <br />
              <div>내용:{el.contents}</div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </ScrollWrapper>
  );
}
