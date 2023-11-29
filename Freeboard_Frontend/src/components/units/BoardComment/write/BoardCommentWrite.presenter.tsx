import * as S from "./BoardCommentWrite.styles";
import { BoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: BoardCommentWriteUIProps) {
  return (
    <S.Wrapper>
      <>
        <S.PencilIcon src="/images/boardComment/write/pencil.png" />
        <span>댓글</span>
      </>
      <S.InputWrapper>
        <S.Input
          onChange={props.onChangeWriter}
          placeholder="작성자"
          value={props.writer}
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
          value={props.contents}
        />
        <S.BottomWrapper>
          <S.ContentsLength>{props.contents.length}/100</S.ContentsLength>
          <S.Button onClick={props.onClickSubmit}>등록하기</S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
