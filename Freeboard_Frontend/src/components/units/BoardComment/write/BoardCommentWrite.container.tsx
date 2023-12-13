import { ChangeEvent, useState } from "react";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { useMutation } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from "../../../../commons/types/generated/types";
import { IBoardCommentWriteProps } from "./BoardCommentWrite.types";

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    try {
      if (typeof router.query.boardId !== "string") {
        alert("올바르지 않은 게시글 아이디입니다.");
        router.push("/");
        return;
      }
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: star,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
    setContents("");
    setPassword("");
    setWriter("");
    setStar(0);
  };

  const onClickUpdate = async (): Promise<void> => {
    if (contents === "") {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (password === "") {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }
    if (typeof props.el?._id !== "string") {
      console.log(props.el?._id);

      alert("오류가 발생했습니다.");
      return;
    }
    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (contents !== "") updateBoardCommentInput.contents = contents;
      if (star !== props.el?.rating) updateBoardCommentInput.rating = star;
      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      contents={contents}
      writer={writer}
      password={password}
      star={star}
      setStar={setStar}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
