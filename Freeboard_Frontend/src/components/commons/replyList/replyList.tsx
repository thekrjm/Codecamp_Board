import * as S from "./replyList.styles";
import { getDate } from "../../../commons/libraries/utils";
import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  IBoardComment,
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../commons/types/generated/types";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "../../units/BoardComment/list/BoardCommentList.queries";
import BoardCommentWrite from "../../units/BoardComment/write/BoardCommentWrite.container";

interface IReplyListComponentProps {
  el: IBoardComment;
}

export default function ReplyListComponents(
  props: IReplyListComponentProps
): JSX.Element {
  const router = useRouter();

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [boardCommentId, setBoardCommentId] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDelete = async (event: MouseEvent<HTMLElement>) => {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  const onClickOpenDeleteModal = (event: MouseEvent<HTMLImageElement>) => {
    setBoardCommentId(event.currentTarget.id);
    setIsOpenDeleteModal(true);
  };

  return (
    <div>
      {isOpenDeleteModal && (
        <S.PasswordModal open={true} onOk={onClickDelete}>
          <div>비밀번호 입력</div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </S.PasswordModal>
      )}
      {!isEdit ? (
        <S.ItemWrapper key={props.el._id}>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el.writer}</S.Writer>
                <S.Star value={props.el.rating} disabled />
              </S.WriterWrapper>
              <S.Contents>{props.el.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon src="/images/boardComment/list/option_update_icon.png" />
              <S.DeleteIcon
                id={props.el._id}
                src="/images/boardComment/list/option_delete_icon.png"
                onClick={onClickOpenDeleteModal}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
        </S.ItemWrapper>
      ) : (
        <BoardCommentWrite isEdit={true} el={props.el} setIsEdit={setIsEdit} />
      )}
    </div>
  );
}
