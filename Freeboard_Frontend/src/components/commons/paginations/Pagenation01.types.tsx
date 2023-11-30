import type { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

export interface IPagination01UIProps {
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  onClickPagination: (event: MouseEvent<HTMLDivElement>) => void;
  lastPage: number;
  startPage: number;
  activedPage: number;
}

export interface IPagination01Props {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
}
