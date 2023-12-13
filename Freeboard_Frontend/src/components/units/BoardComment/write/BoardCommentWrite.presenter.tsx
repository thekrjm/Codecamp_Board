import * as S from "./BoardCommentWrite.styles";
import { BoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(
  props: BoardCommentWriteUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      {props.isEdit === false && (
        <>
          <S.PencilIcon src="/images/boardComment/write/pencil.png" />
          <span>댓글</span>
        </>
      )}
      <S.InputWrapper>
        <S.Input
          onChange={props.onChangeWriter}
          placeholder="작성자"
          value={props.writer !== "" ? props.writer : props.el?.writer ?? ""}
          readOnly={props.isEdit}
        />
        <S.Input
          type="password"
          onChange={props.onChangePassword}
          placeholder="비밀번호"
          value={props.password}
        />
        <S.Star onChange={props.setStar} value={props.star} />
      </S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          maxLength={100}
          onChange={props.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          value={
            props.contents !== "" ? props.contents || "" : props.el?.contents
          }
        />
        <S.BottomWrapper>
          <S.ContentsLength>
            {props.contents === ""
              ? props.contents.length
              : props.el?.contents.length ?? 0}
            /100
          </S.ContentsLength>
          <S.Button
            onClick={
              props.isEdit === true ? props.onClickUpdate : props.onClickSubmit
            }
          >
            등록하기
          </S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
