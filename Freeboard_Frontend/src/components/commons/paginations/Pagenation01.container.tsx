import type { MouseEvent } from "react";
import { useState } from "react";
import Pagination01UI from "./Pagenation01.presenter";
import { IPagination01Props } from "./Pagenation01.types";

export default function Pagination01(props: IPagination01Props): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = Math.ceil((props.count ?? 0) / 10);

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    setStartPage(startPage + 10);
    void props.refetch({ page: startPage + 10 });
  };

  const onClickPagination = (event: MouseEvent<HTMLDivElement>) => {
    const activedPage = Number(event.currentTarget.id);
    setActivedPage(activedPage);
    void props.refetch({ page: activedPage });
  };

  return (
    <Pagination01UI
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      onClickPagination={onClickPagination}
      lastPage={lastPage}
      startPage={startPage}
      activedPage={activedPage}
    />
  );
}
