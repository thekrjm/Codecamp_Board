import * as S from "./Pagenation01.styles";
import { IPagination01UIProps } from "./Pagenation01.types";

export default function Pagination01UI(
  props: IPagination01UIProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.PaginationButton onClick={props.onClickPrevPage}>
        이전페이지
      </S.PaginationButton>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <S.Page
              key={index + props.startPage}
              id={String(index + props.startPage)}
              onClick={props.onClickPagination}
              isActive={index + props.startPage === props.activedPage}
            >
              {index + props.startPage}
            </S.Page>
          )
      )}
      <S.PaginationButton onClick={props.onClickNextPage}>
        다음페이지
      </S.PaginationButton>
    </S.Wrapper>
  );
}
