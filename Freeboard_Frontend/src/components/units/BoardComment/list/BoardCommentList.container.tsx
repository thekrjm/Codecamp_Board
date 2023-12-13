import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import { useQuery } from "@apollo/client";

export default function BoardCommentList() {
  const router = useRouter();

  if (typeof router.query.boardId !== "string") {
    alert("올바르지 않은 게시글 아이디입니다.");
    void router.push("/");
    return <></>;
  }

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  const onLoadMore = (): void => {
    if (data === undefined) return;
    const commentsLength = data?.fetchBoardComments.length;
    const page = Math.ceil(commentsLength / 10 + 1);
    void fetchMore({
      variables: {
        page,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }

        console.log("fetch~!~");

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return <BoardCommentListUI onLoadMore={onLoadMore} data={data} />;
}
