import { IQuery } from "../../../../commons/types/generated/types"
import { MouseEvent } from "react";

export interface IBoardCommentListUIProps {
    data?: Pick<IQuery, "fetchBoardComments">;
    onClickDelete: (event: MouseEvent<HTMLImageElement>) => void
}