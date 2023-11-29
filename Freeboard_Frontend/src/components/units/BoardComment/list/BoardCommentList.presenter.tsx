import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
// import { useState } from "react";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  // const [isOpen, setIsOpen] = useState(props.isOpenDeleteModal);

  // const showModal = () => {
  //   setIsOpen(true);
  // };
  // const openModal = () => {
  //   setIsOpen(false);
  // };
  // const cancelModal = () => {
  //   setIsOpen((prev) => !prev);
  // };

  return (
    <div>
      {props.isOpenDeleteModal && (
        <S.PasswordModal open={true} onOk={props.onClickDelete}>
          <div>비밀번호 입력</div>
          <S.PasswordInput
            type="password"
            onChange={props.onChangeDeletePassword}
          />
        </S.PasswordModal>
      )}
      {props.data?.fetchBoardComments.map((el) => (
        <S.ItemWrapper key={el._id}>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{el.writer}</S.Writer>
                <S.Star value={el.rating} disabled />
              </S.WriterWrapper>
              <S.Contents>{el.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon src="/images/boardComment/list/option_update_icon.png" />
              <S.DeleteIcon
                id={el._id}
                src="/images/boardComment/list/option_delete_icon.png"
                onClick={props.onClickOpenDeleteModal}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(el?.createdAt)}</S.DateString>
        </S.ItemWrapper>
      ))}
    </div>
  );
}
