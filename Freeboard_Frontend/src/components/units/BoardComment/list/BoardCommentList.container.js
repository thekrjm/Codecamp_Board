import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";

export default function BoardCommentList() {
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  const onClickDelete = async (event) => {
    const myPassword = prompt("비밀번호를 입력하세요.");
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };
  return <BoardCommentListUI onClickDelete={onClickDelete} data={data} />;
}
